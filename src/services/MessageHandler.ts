import { useState, useCallback, useEffect } from 'react';

export const useMessageHandler = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [currentUsername, setCurrentUsername] = useState<string | null>(null);

  const setupMessageListeners = useCallback(() => {
    const messageListener = (request: any, sender: any, sendResponse: any) => {
      switch (request.action) {
        case 'connected':
          handleConnection(request, sendResponse);
          break;
        case 'disconnected':
          handleDisconnection(request, sendResponse);
          break;
        // Add other message handlers as needed
      }
      return true; // Keep channel open for async responses
    };

    chrome.runtime.onMessage.addListener(messageListener);

    return () => {
      chrome.runtime.onMessage.removeListener(messageListener);
    };
  }, []);

  const handleConnection = useCallback((request: any, sendResponse: (response: any) => void) => {
    setIsConnected(true);
    if (request.username) {
      setCurrentUsername(request.username);
    }
    sendResponse({ status: 'acknowledged' });
  }, []);

  const handleDisconnection = useCallback((request: any, sendResponse: (response: any) => void) => {
    setIsConnected(false);
    setCurrentUsername(null);
    sendResponse({ status: 'acknowledged' });
  }, []);

  const sendMessage = useCallback(async (action: string, data: any): Promise<any> => {
    return new Promise((resolve) => {
      chrome.runtime.sendMessage({ action, ...data }, (response) => {
        resolve(response);
      });
    });
  }, []);

  useEffect(() => {
    const cleanup = setupMessageListeners();
    return cleanup;
  }, [setupMessageListeners]);

  return {
    isConnected,
    currentUsername,
    sendMessage,
    handleConnection,
    handleDisconnection
  };
}; 