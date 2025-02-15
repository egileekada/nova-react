export class StorageService {
  private readonly MAX_STORED_MESSAGES = 100;
  private chatMessages: any[] = [];

  public async init(): Promise<void> {
    await this.loadPersistedMessages();
  }

  public async addMessage(message: any): Promise<void> {
    if (!message.id) {
      message.id = Date.now().toString();
    }
    
    this.chatMessages.push(message);
    
    if (this.chatMessages.length > this.MAX_STORED_MESSAGES) {
      this.chatMessages = this.chatMessages.slice(-this.MAX_STORED_MESSAGES);
    }
    
    await this.persistMessages();
  }

  public async getMessages(): Promise<any[]> {
    if (this.chatMessages.length === 0) {
      await this.loadPersistedMessages();
    }
    return this.chatMessages;
  }

  private async loadPersistedMessages(): Promise<void> {
    try {
      const result = await chrome.storage.local.get(['chatMessages']);
      this.chatMessages = result.chatMessages || [];
    } catch (error) {
      console.error('Failed to load messages:', error);
      this.chatMessages = [];
    }
  }

  private async persistMessages(): Promise<void> {
    try {
      await chrome.storage.local.set({ chatMessages: this.chatMessages });
    } catch (error) {
      console.error('Failed to persist messages:', error);
    }
  }

  public async clear(): Promise<void> {
    await chrome.storage.local.clear();
    this.chatMessages = [];
  }
} 