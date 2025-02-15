interface VideoControlEvent {
  type: 'play' | 'pause' | 'seek';
  time?: number;
}

class MediaController {
  private video: HTMLVideoElement | null = null;
  private lastTimeUpdate: number = 0;
  private readonly TIME_UPDATE_INTERVAL = 1000; // 1 second

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    this.findVideoElement();
    this.setupEventListeners();
    this.setupTimeTracking();
  }

  private findVideoElement(): void {
    this.video = document.querySelector('video');
    if (!this.video) {
      setTimeout(() => this.findVideoElement(), 500);
    }
  }

  private setupEventListeners(): void {
    if (!this.video) return;

    this.video.addEventListener('play', () => this.handleVideoEvent('play'));
    this.video.addEventListener('pause', () => this.handleVideoEvent('pause'));
    this.video.addEventListener('seeking', () => {
      if (this.video) {
        this.handleVideoEvent('seek', this.video.currentTime);
      }
    });
  }

  private setupTimeTracking(): void {
    setInterval(() => {
      if (this.video && this.video.currentTime !== this.lastTimeUpdate) {
        this.lastTimeUpdate = this.video.currentTime;
        window.postMessage({
          type: 'NOVA_VIDEO_TIME_UPDATE',
          data: { time: this.video.currentTime }
        }, '*');
      }
    }, this.TIME_UPDATE_INTERVAL);
  }

  private handleVideoEvent(event: VideoControlEvent['type'], time?: number): void {
    window.postMessage({
      type: 'NOVA_VIDEO_CONTROL_EVENT',
      event,
      time
    }, '*');
  }
}

// Initialize the controller
new MediaController(); 