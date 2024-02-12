'use client'
import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./authContext";
import io from "socket.io-client";

// Define the type for the context value
interface SocketContextType {
	socket: any; // Change 'any' to the actual type of socket if available
	onlineUsers: any; // Change 'any[]' to the actual type of onlineUsers if available
}

// Provide a default value for the context
const defaultValue: SocketContextType = {
	socket: null,
	onlineUsers: [],
};

const SocketContext = createContext(defaultValue);

export const useSocketContext = () => {
	return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [socket, setSocket] = useState<any>(null); // Change 'any' to the actual type of socket if available
	const [onlineUsers, setOnlineUsers] = useState<any>([]); // Change 'any[]' to the actual type of onlineUsers if available
	const { authUser } = useAuthContext();

	useEffect(() => {
		if (authUser) {
			const socketCreated = io('http://localhost:3001', {
				query: {
					userId: authUser._id
				}
			});
			setSocket(socketCreated);
			socketCreated.on('connect', () => {
				console.log('\nConnected to socket.io server successfully', socketCreated.id)
				socketCreated.emit('GetOnlineUsers'); // Emit the event after connection
			})
			socketCreated.on('GetOnlineUsers', (users: any) => {
				setOnlineUsers(users)
			})
			// Close the socket when you're done with it
			socketCreated.on('disconnect', () => {
				console.log('Socket disconnected:', socketCreated.id);
			});
		}
		else {
			if (socket) {
				socket.close()
				socket.on('GetOnlineUsers', (users: any[]) => {
					setOnlineUsers(users)
				})
			}
		}
	}, [authUser])

	return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>;
};
