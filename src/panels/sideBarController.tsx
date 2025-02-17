import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChatState } from '@/types/chat';
import { SELECTORS } from '@/utils/constants';
import SideBar from './sideBar';
import { Box } from '@chakra-ui/react';
import { Provider } from '@/components/ui/provider';

interface SidebarProps {
    onClose?: () => void;
}

export const SidebarController: React.FC<SidebarProps> = ({ onClose }) => {

    const [chatState, setChatState] = useState<ChatState>({
        isConnected: false,
        currentUsername: null,
        isHost: false
    });

    const sidebarRef = useRef<HTMLDivElement>(null);
    const urlObserverRef = useRef<MutationObserver | null>(null);

    const handleUrlChange = useCallback(() => {
        if (!isNetflixWatchPage()) {
            onClose?.();
        }
    }, [onClose]);

    const isNetflixWatchPage = (): boolean => {
        return window.location.href.match(/https:\/\/www\.netflix\.com\/watch\/*/) !== null;
    };

    useEffect(() => {
        // Setup URL monitoring
        const handlePopState = () => handleUrlChange();
        window.addEventListener('popstate', handlePopState);

        urlObserverRef.current = new MutationObserver(() => {
            if (window.location.href !== window.location.href) {
                handleUrlChange();
            }
        });

        urlObserverRef.current.observe(document, { subtree: true, childList: true });

        // Adjust video player layout
        const videoPlayer = document.querySelector<HTMLElement>(SELECTORS.VIDEO_PLAYER);
        if (videoPlayer) {
            videoPlayer.style.width = '70%';
            videoPlayer.style.float = 'left';
        }

        // Setup message listeners
        const messageListener = (request: any) => {
            switch (request.action) {
                case 'connected':
                    setChatState(prev => ({ ...prev, isConnected: true }));
                    break;
                case 'disconnected':
                    setChatState(prev => ({ ...prev, isConnected: false }));
                    break;
                case 'host_assigned':
                    setChatState(prev => ({ ...prev, isHost: request.isHost }));
                    break;
            }
        };

        chrome.runtime.onMessage.addListener(messageListener);

        return () => {
            window.removeEventListener('popstate', handlePopState);
            urlObserverRef.current?.disconnect();
            chrome.runtime.onMessage.removeListener(messageListener);

            // Reset video player
            if (videoPlayer) {
                videoPlayer.style.width = '100%';
                videoPlayer.style.float = 'none';
            }
        };
    }, [handleUrlChange]);

    return (
        <Provider>
            <Box ref={sidebarRef} w={"30%"} position={"fixed"} top={"0"} right={"0"} bottom={"0"} h={"100vh"} color={"white"} overflowY={"auto"} zIndex={"50"} >
                <SideBar />
            </Box>
        </Provider>
    );
};
