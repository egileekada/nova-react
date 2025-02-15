import { useState, useCallback, useEffect } from 'react';

export const useNetflixScraper = () => {
  const [currentMovieTitle, setCurrentMovieTitle] = useState<string | null>(null);
  const [currentNetflixId, setCurrentNetflixId] = useState<string | null>(null);

  const isNetflixWatchPage = useCallback(() => {
    return window.location.href.match(/^https?:\/\/(www\.)?netflix\.com\/watch\//) !== null;
  }, []);

  const scrapeMovieInfo = useCallback(async () => {
    try {
      // Get Netflix ID from URL
      const match = window.location.href.match(/watch\/(\d+)/);
      const netflixId = match ? match[1] : null;
      setCurrentNetflixId(netflixId);

      // Get movie title
      const titleElement = document.querySelector('.video-title h4');
      const title = titleElement?.textContent?.trim() || null;
      setCurrentMovieTitle(title);

      if (title && netflixId) {
        await saveMovieInfo(title, netflixId);
      }
    } catch (error) {
      console.error('Error scraping movie info:', error);
    }
  }, []);

  const saveMovieInfo = async (title: string, netflixId: string) => {
    await chrome.storage.local.set({
      currentMovieTitle: title,
      netflixWatchUrl: window.location.href,
      currentNetflixId: netflixId
    });

    chrome.runtime.sendMessage({
      action: 'updateMovieTitle',
      movieTitle: title,
      netflixId: netflixId
    });
  };

  const initialize = useCallback(async () => {
    if (isNetflixWatchPage()) {
      await scrapeMovieInfo();
    }
  }, [isNetflixWatchPage, scrapeMovieInfo]);

  useEffect(() => {
    initialize();
  }, [initialize]);

  const cleanup = useCallback(() => {
    setCurrentMovieTitle(null);
    setCurrentNetflixId(null);
  }, []);

  return {
    currentMovieTitle,
    currentNetflixId,
    initialize,
    cleanup,
    isNetflixWatchPage
  };
}; 