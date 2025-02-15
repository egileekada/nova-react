export interface ChatMessage {
  id?: string;
  username: string;
  text: string;
  timestamp?: number;
  type?: 'user' | 'system';  // Update the type to be a union type
  pending?: boolean;
}

export interface TypingStatus {
  username: string;
  isTyping: boolean;
}

export interface ChatState {
  currentUsername: string | null;
  isConnected: boolean;
  isHost: boolean;
  hostUsername?: string;
  typingUsers?: string[];
}
