export interface VideoState {
  isPlaying: boolean;
  currentTime: number;
  isHost: boolean;
}

export interface MovieInfo {
  title: string;
  netflixId: string;
  watchUrl: string;
} 