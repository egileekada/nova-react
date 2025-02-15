export const isNetflixWatchPage = (): boolean => {
  return window.location.href.match(/^https?:\/\/(www\.)?netflix\.com\/watch\//) !== null;
};

export const injectScript = (scriptName: string): void => {
  const script = document.createElement('script');
  script.src = chrome.runtime.getURL(`inject/${scriptName}`);
  (document.head || document.documentElement).appendChild(script);
}; 