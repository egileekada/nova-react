export const SOCKET_SERVER_URL = 'https://s2.getnova.me/';
export const TYPING_TIMER_LENGTH = 3000;
export const MAX_MESSAGES = 100;
export const MAX_RETRY_ATTEMPTS = 3;

export const EVENTS = {
  CONNECT: 'connect',
  DISCONNECT: 'disconnect',
  MESSAGE: 'chat message',
  TYPING: 'typing',
  VIDEO_CONTROL: 'video_control',
  HOST_ASSIGNED: 'host_assigned',
  USERNAME_ASSIGNED: 'assign_username'
} as const;

export const STORAGE_KEYS = {
  CHAT_MESSAGES: 'chatMessages',
  CURRENT_USERNAME: 'currentUsername',
  IS_HOST: 'isHost',
  MOVIE_INFO: 'movieInfo'
} as const; 

export const SYSTEM_MESSAGE_DISPLAY_DELAY = 1000;
export const SYSTEM_MESSAGE_EXPIRY = 5000;
export const VIDEO_UPDATE_INTERVAL = 250;
export const SYNC_THRESHOLD = 1.5;

export const SELECTORS = {
  PLAY_BUTTON: '.primary-button.playLink',
  VIDEO_PLAYER: '.watch-video',
  FULLSCREEN_BUTTON: 'button[data-uia="control-fullscreen-enter"]',
  // ... other selectors
} as const;

export const STYLES = {
  WATCH_PARTY_BUTTON: {
    backgroundColor: '#5A20D5',
    color: '#fff',
    // ... other styles
  },
  
  FLOATING_BUTTON: `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #5A20D5;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  `
} as const;
