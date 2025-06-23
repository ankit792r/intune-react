import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { Client, type IFrame, type IMessage } from '@stomp/stompjs';
import { getToken } from '../utils/token';



// 1. Define context type
interface IWebSocketContext {
  stompClient: Client | null;
  isConnected: boolean;
}

interface WebSocketProviderProps {
  children: ReactNode;
}

// 2. Create context with default value
const WebSocketContext = createContext<IWebSocketContext>({
  stompClient: null,
  isConnected: false,
});

// 3. Custom hook for using the context
export const useWebSocket = (): IWebSocketContext => useContext(WebSocketContext);

export const WebSocketProvider: React.FC<WebSocketProviderProps> = ({ children }) => {
  const [stompClient, setStompClient] = useState<Client | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);

  useEffect(() => {
    const client = new Client({
      brokerURL: "ws://localhost:8080/ws",
      connectHeaders: {
        "Authorization": `Bearer ${getToken()}`
      },
      onConnect: () => {
        console.log('✅ WebSocket Connected');
        setIsConnected(true);

        client.subscribe("/topic/friend/new-request", (frame: IFrame)=> {
          console.log(JSON.parse(frame.body));
          
        })
      },
      onDisconnect: () => {
        console.log('🔌 WebSocket Disconnected');
        setIsConnected(false);
      },
      reconnectDelay: 5000, // auto-reconnect every 5 sec
    });

    client.activate();
    setStompClient(client);  

    return () => {
      if (client.active) {
        client.deactivate();
      }
    };
  }, []);

  return (
    <WebSocketContext.Provider value={{ stompClient, isConnected }}>
      {children}
    </WebSocketContext.Provider>
  );
};