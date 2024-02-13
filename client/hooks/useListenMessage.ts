import { useEffect } from "react";

import { useSocketContext } from "@/context/socketContext";
import useConversation from "@/Zustant/zustand";

const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { messages, setMessages, selectedConversation } = useConversation();

	useEffect(() => {
		socket?.on("newMessage", (newMessage: any) => {
			newMessage.shouldShake = true;
			const sound = new Audio('./../public/notification.mp3');
			sound.play();
			if (newMessage.senderId === selectedConversation._id) {
				setMessages([...messages, newMessage]);
			}

		});

		return () => socket?.off("newMessage");
	}, [socket, setMessages, messages]);
};
export default useListenMessages;