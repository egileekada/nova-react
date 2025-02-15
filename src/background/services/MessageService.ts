import { SocketService } from './SocketService';
import { StorageService } from './StorageService';

export class MessageService {
  private activeTabId: number | null = null;
  private typingUsers: Set<string> = new Set();

  constructor(
    private socketService: SocketService,
    private storageService: StorageService
  ) {}

  public init(): void {
    this.setupMessageListeners();
    this.setupSocketEventHandlers();
  }

  private setupMessageListeners(): void {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (sender.tab?.id) {
        this.activeTabId = sender.tab.id;
      }

      switch (request.action) {
        case 'connect':
          this.handleConnect(sendResponse);
          break;
        case 'disconnect':
          this.handleDisconnect(sendResponse);
          break;
        case 'sendMessage':
          this.handleSendMessage(request, sendResponse);
          break;
        case 'typing':
          this.handleTyping(request, sendResponse);
          break;
      }
      return true;
    });
  }

  private setupSocketEventHandlers(): void {
    this.socketService.on('chat message', this.handleChatMessage.bind(this));
    this.socketService.on('typing', this.handleTypingUpdate.bind(this));
  }

  private async handleConnect(sendResponse: (response: any) => void): Promise<void> {
    if (!this.socketService.isSocketConnected()) {
      this.socketService.connect();
    }

    const messages = await this.storageService.getMessages();
    const username = this.socketService.getUsername();
    const isHost = this.socketService.isUserHost();
    
    sendResponse({ 
      status: "connected",
      messages,
      username,
      isHost
    });
  }

  private handleDisconnect(sendResponse: (response: any) => void): void {
    this.socketService.disconnect();
    sendResponse({ status: "disconnected" });
  }

  private handleSendMessage(request: any, sendResponse: (response: any) => void): void {
    if (!this.socketService.isSocketConnected()) {
      sendResponse({ status: "error", message: "Not connected" });
      return;
    }

    this.socketService.emit('chat message', request.message);
    sendResponse({ status: "sent" });
  }

  private handleTyping(request: any, sendResponse: (response: any) => void): void {
    this.socketService.emit('typing', {
      isTyping: request.isTyping,
      username: request.username
    });
    sendResponse({ status: "sent" });
  }

  private async handleChatMessage(message: any): Promise<void> {
    await this.storageService.addMessage(message);
    if (this.activeTabId) {
      chrome.tabs.sendMessage(this.activeTabId, {
        action: "newMessage",
        message
      });
    }
  }

  private handleTypingUpdate(data: any): void {
    if (data.isTyping) {
      this.typingUsers.add(data.username);
    } else {
      this.typingUsers.delete(data.username);
    }

    if (this.activeTabId) {
      chrome.tabs.sendMessage(this.activeTabId, {
        action: "typingUpdate",
        typingUsers: Array.from(this.typingUsers)
      });
    }
  }
} 