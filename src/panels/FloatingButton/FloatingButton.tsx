import React, { useEffect } from 'react';
import { isNetflixWatchPage } from '@/utils/helpers';
import './FloatingButton.css';

export const FloatingButton: React.FC = () => {
  const buttonId = 'nova-floating-button';

  useEffect(() => {
    if (isNetflixWatchPage()) {
      createButton();
    }

    return () => {
      const button = document.getElementById(buttonId);
      if (button) button.remove();
    };
  }, []);

  const createButton = () => {
    // Remove existing button if any
    const existingButton = document.getElementById(buttonId);
    if (existingButton) existingButton.remove();

    // Create new button
    const button = document.createElement('button');
    button.id = buttonId;
    button.className = 'nova-floating-button';
    
    const img = document.createElement('img');
    img.src = chrome.runtime.getURL('icons/watchparty.png');
    img.alt = 'Start Watch Party';
    img.style.width = '40px';
    img.style.height = '40px';

    button.appendChild(img);
    document.body.appendChild(button);

    // Add click event
    button.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('novaWatchPartyStart'));
      button.style.display = 'none';
    });

    // Hide button when sidebar is open
    const observer = new MutationObserver(() => {
      const sidebar = document.getElementById('nova-party-sidebar');
      if (button) {
        button.style.display = sidebar ? 'none' : 'flex';
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  };

  return null;
}; 