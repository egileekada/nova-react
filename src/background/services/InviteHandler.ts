export class InviteHandler {
  constructor() {
    this.setupInviteListeners();
  }

  private setupInviteListeners(): void {
    chrome.webNavigation.onBeforeNavigate.addListener((details) => {
      if (details.url.startsWith('nova-netflix-party://')) {
        const url = new URL(details.url);
        const roomId = url.hostname;
        const movieTitle = url.searchParams.get('title');

        if (!roomId || !movieTitle) {
          console.error('Invalid invite link');
          return;
        }

        chrome.storage.local.set({
          pendingInvite: {
            roomId,
            movieTitle,
            timestamp: Date.now()
          }
        }, () => {
          chrome.tabs.update(details.tabId, {
            url: 'https://www.netflix.com/browse'
          });
        });
      }
    });
  }
} 