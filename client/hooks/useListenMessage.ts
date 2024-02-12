import { useEffect } from "react";


import { useSocketContext } from "@/context/socketContext";
import useConversation from "@/Zustant/zustand";

const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { messages, setMessages } = useConversation();

	useEffect(() => {
		socket?.on("newMessage", (newMessage:any) => {
			newMessage.shouldShake = true;
			const sound = new Audio('/client/public/notification.mp3');
			sound.play();
			setMessages([...messages, newMessage]);
		});

		return () => socket?.off("newMessage");
	}, [socket, setMessages]);
};
export default useListenMessages;