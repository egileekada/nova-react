import { useState, useCallback } from 'react';

export const useStorageManager = () => {
  const [isHost, setIsHost] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

  const getIsHost = useCallback(async (): Promise<boolean> => {
    const result = await chrome.storage.local.get(['isHost']);
    const hostStatus = result.isHost || false;
    setIsHost(hostStatus);
    return hostStatus;
  }, []);

  const setIsHostStatus = useCallback(async (hostStatus: boolean): Promise<void> => {
    await chrome.storage.local.set({ isHost: hostStatus });
    setIsHost(hostStatus);
  }, []);

  const getUsername = useCallback(async (): Promise<string | null> => {
    const result = await chrome.storage.local.get(['currentUsername']);
    const storedUsername = result.currentUsername || null;
    setUsername(storedUsername);
    return storedUsername;
  }, []);

  const setUsernameValue = useCallback(async (newUsername: string): Promise<void> => {
    await chrome.storage.local.set({ currentUsername: newUsername });
    setUsername(newUsername);
  }, []);

  const clearStorage = useCallback(async (): Promise<void> => {
    await chrome.storage.local.clear();
    setIsHost(false);
    setUsername(null);
  }, []);

  return {
    isHost,
    username,
    getIsHost,
    setIsHost: setIsHostStatus,
    getUsername,
    setUsername: setUsernameValue,
    clearStorage
  };
}; 