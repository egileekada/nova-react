import { io, Socket } from 'socket.io-client';

interface PartyUser {
  username: string;
  isHost: boolean;
  id: string;
  isOnline: boolean;
  avatarUrl?: string;
}

export class SocketService {
  private socket: Socket | null = null;
  private readonly SERVER_URL = "https://s2.getnova.me/";
  private isConnected = false;
  private currentRoom: string | null = null;
  private username: string | null = null;
  private isHost: boolean = false;

  public init(): void {
    this.setupSocket();
  }

  private setupSocket(): void {
    if (this.socket) {
      this.socket.off();
      this.socket.disconnect();
    }

    this.socket = io(this.SERVER_URL, {
      transports: ['websocket'],
      upgrade: false,
      autoConnect: false
    });

    this.setupEventListeners();
  }

  private setupEventListeners(): void {
    if (!this.socket) return;

    this.socket.on("connect", () => {
      this.isConnected = true;
      this.notifyContentScript({ action: "connected" });
    });

    this.socket.on("assign_username", (assignedUsername: string) => {
      this.username = assignedUsername;
      this.storageUsername(assignedUsername);
      this.notifyContentScript({ 
        action: "username_assigned", 
        username: assignedUsername 
      });
    });

    this.socket.on("host_assigned", (isHostAssigned: boolean) => {
      this.isHost = isHostAssigned;
      this.notifyContentScript({ 
        action: "host_assigned", 
        isHost: isHostAssigned 
      });
      chrome.storage.local.set({ isHost: isHostAssigned });
    });

    this.socket.on("disconnect", () => {
      this.isConnected = false;
      this.isHost = false;
      chrome.storage.local.set({ isHost: false });
      this.notifyContentScript({ action: "disconnected" });
    });
  }

  private async storageUsername(username: string): Promise<void> {
    await chrome.storage.local.set({ currentUsername: username });
  }

  private notifyContentScript(message: any): void {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]?.id) {
        chrome.tabs.sendMessage(tabs[0].id, message);
      }
    });
  }

  public connect(): void {
    if (this.socket && !this.isConnected) {
      this.socket.connect();
    }
  }

  public disconnect(): void {
    if (this.socket && this.isConnected) {
      this.socket.disconnect();
    }
  }

  public emit(event: string, data: any): void {
    if (this.socket && this.isConnected) {
      this.socket.emit(event, data);
    }
  }

  public on(event: string, callback: (data: any) => void): void {
    if (this.socket) {
      this.socket.on(event, callback);
    }
  }

  public isSocketConnected(): boolean {
    return this.isConnected;
  }

  public getUsername(): string | null {
    return this.username;
  }

  public isUserHost(): boolean {
    return this.isHost;
  }
} 