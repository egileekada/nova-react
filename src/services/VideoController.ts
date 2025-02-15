import { useEffect, useRef, useState } from 'react';

export const useVideoController = () => {
  const [isHost, setIsHost] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const lastTimeUpdateRef = useRef<number>(0);
  const TIME_UPDATE_INTERVAL = 1000;

  const findVideoElement = () => {
    videoRef.current = document.querySelector('video');
    if (!videoRef.current) {
      setTimeout(findVideoElement, 500);
    }
  };

  const handleVideoEvent = (event: 'play' | 'pause' | 'seek', time?: number) => {
    if (!isHost) return;

    chrome.runtime.sendMessage({
      action: 'NOVA_VIDEO_CONTROL',
      data: {
        type: event,
        time: time || (videoRef.current?.currentTime || 0)
      }
    });
  };

  useEffect(() => {
    findVideoElement();

    if (videoRef.current) {
      videoRef.current.addEventListener('play', () => handleVideoEvent('play'));
      videoRef.current.addEventListener('pause', () => handleVideoEvent('pause'));
      videoRef.current.addEventListener('seeking', () => {
        if (videoRef.current) {
          handleVideoEvent('seek', videoRef.current.currentTime);
        }
      });
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('play', () => handleVideoEvent('play'));
        videoRef.current.removeEventListener('pause', () => handleVideoEvent('pause'));
        videoRef.current.removeEventListener('seeking', () => handleVideoEvent('seek'));
      }
    };
  }, [isHost]);

  return {
    setHost: (hostStatus: boolean) => setIsHost(hostStatus),
    isUserHost: () => isHost,
    getCurrentTime: () => videoRef.current?.currentTime || 0,
    play: () => videoRef.current?.play(),
    pause: () => videoRef.current?.pause(),
    seek: (time: number) => {
      if (videoRef.current) {
        videoRef.current.currentTime = time;
      }
    }
  };
}; 