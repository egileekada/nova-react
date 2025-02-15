import React, { useEffect, useState, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import { useVideoController } from '@/services/VideoController';
import { useNetflixScraper } from '@/services/NetflixScraper';
import { useMessageHandler } from '@/services/MessageHandler';
import { useStorageManager } from '@/services/StorageManager';
import { isNetflixWatchPage } from '@/utils/helpers';
import '@/styles/index.css'; 
import { FloatingButton } from '@/panels/FloatingButton/FloatingButton';
import { SidebarController } from '@/panels/sideBarController';

export const NovaWatchParty: React.FC = () => {
  const [currentUrl, setCurrentUrl] = useState(window.location.href);
  const [currentUsername, setCurrentUsername] = useState<string | null>(null);
  const [isHost, setIsHost] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Use hooks instead of class instances
  const videoController = useVideoController();
  const netflixScraper = useNetflixScraper();
  const messageHandler = useMessageHandler();
  const storage = useStorageManager();

  const injectMediaController = useCallback(() => {
    console.log('[Nova] Injecting media controller script...');
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL('inject/media-controller.js');
    script.onload = () => {
      console.log('[Nova] Media controller script loaded successfully');
    };
    script.onerror = (error) => {
      console.error('[Nova] Failed to load media controller script:', error);
    };
    (document.head || document.documentElement).appendChild(script);
  }, []);

  const setupSidebarObserver = useCallback(() => {
    const observer = new MutationObserver(() => {
      const sidebar = document.getElementById('nova-party-sidebar');
      const sidebarNowOpen = !!sidebar;
      
      if (sidebarNowOpen !== sidebarOpen) {
        setSidebarOpen(sidebarNowOpen);
        if (sidebarNowOpen && isNetflixWatchPage()) {
          initialize();
        }
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, [sidebarOpen]);

  const initialize = useCallback(async () => {
    if (!isNetflixWatchPage()) return;

    const storedUsername = await storage.getUsername();
    setCurrentUsername(storedUsername);

    setupEventListeners();
    await restoreState();
  }, [storage]);

  const setupEventListeners = useCallback(() => {
    window.addEventListener('popstate', () => {
      handleURLChange();
    });

    const observer = new MutationObserver(() => {
      if (window.location.href !== currentUrl) {
        setCurrentUrl(window.location.href);
        handleURLChange();
      }
    });

    observer.observe(document, { subtree: true, childList: true });

    return () => {
      observer.disconnect();
    };
  }, [currentUrl]);

  const restoreState = useCallback(async () => {
    const hostStatus = await storage.getIsHost();
    setIsHost(hostStatus);
    videoController.setHost(hostStatus);
  }, [storage, videoController]);

  const handleURLChange = useCallback(() => {
    if (isNetflixWatchPage()) {
      if (!isInitialized) {
        initialize();
      }
    } else {
      cleanup();
    }
  }, [isInitialized, initialize]);

  const startWatchParty = useCallback(() => {
    if (!isNetflixWatchPage()) {
      console.log('Cannot start watch party: Not on watch page');
      return;
    }
    
    const sidebarContainer = document.createElement('div');
    sidebarContainer.id = 'nova-party-sidebar';
    document.body.appendChild(sidebarContainer);

    const root = createRoot(sidebarContainer);
    root.render(
      <React.StrictMode>
        <SidebarController />
      </React.StrictMode>
    );
  }, []);

  const setupURLObserver = useCallback(() => {
    let lastUrl = location.href;
    const observer = new MutationObserver(() => {
      const url = location.href;
      if (url !== lastUrl) {
        lastUrl = url;
        handleURLChange();
      }
    });

    observer.observe(document, {subtree: true, childList: true});

    return () => observer.disconnect();
  }, [handleURLChange]);

  const cleanup = useCallback(() => {
    setIsInitialized(false);
    setSidebarOpen(false);
    setIsHost(false);
    setCurrentUrl(window.location.href);
  }, []);

  const injectFontSizeScript = useCallback(() => {
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL('inject/setFontSize.js');
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    injectMediaController();
    initialize();
    
    const urlObserver = setupURLObserver();
    const sidebarObserver = setupSidebarObserver();

    window.addEventListener('novaWatchPartyStart', startWatchParty);

    if (isNetflixWatchPage()) {
      const floatingButtonRoot = document.createElement('div');
      floatingButtonRoot.id = 'nova-floating-button-root';
      document.body.appendChild(floatingButtonRoot);

      const root = createRoot(floatingButtonRoot);
      root.render(
        <React.StrictMode>
          <FloatingButton />
        </React.StrictMode>
      );

      return () => {
        floatingButtonRoot.remove();
      };
    }

    injectFontSizeScript();

    return () => {
      urlObserver();
      sidebarObserver();
      window.removeEventListener('novaWatchPartyStart', startWatchParty);
      cleanup();
    };
  }, [injectMediaController, injectFontSizeScript]);

  return null; // This component doesn't render anything directly
};

// Initialize the application
const init = () => {
  const container = document.createElement('div');
  container.id = 'nova-watch-party-root';
  document.body.appendChild(container);

  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <NovaWatchParty />
    </React.StrictMode>
  );
};

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}