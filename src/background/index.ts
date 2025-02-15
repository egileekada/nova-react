import { SocketService } from '@/background/services/SocketService';
import { StorageService } from '@/background/services/StorageService';
import { MessageService } from '@/background/services/MessageService';
import { InviteHandler } from '@/background/services/InviteHandler';

const initializeBackgroundServices = () => {
  const storageService = new StorageService();
  const socketService = new SocketService();
  const messageService = new MessageService(socketService, storageService);
  const inviteHandler = new InviteHandler();

  const initialize = async () => {
    await storageService.init();
    socketService.init();
    messageService.init();
  };

  initialize();
};

// Initialize background services
initializeBackgroundServices(); 