import useConversation from "@/Zustant/zustand";
import { useAuthContext } from "@/context/authContext";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
	const [loading, setLoading] = useState(false);
	const [conversations, setConversations] = useState([]);
	const { messages } = useConversation()
	const { setAuthUser } = useAuthContext()
	useEffect(() => {
		const getConversations = async () => {
			setLoading(true);
			try {
				const res = await fetch("http://localhost:3001/user", {
					method: 'GET',
					headers: {
						"Type-Content": "application/json"
					},
					credentials: 'include'
				});
				const data = await res.json();

				if (res.status === 401) {
					setAuthUser(null)
					localStorage.removeItem('chat-user')
				}
				else if (data.error) {
					throw new Error(data.msg);
				}
				else {
					setConversations(data.data);
				}
			} catch (error: any) {
				toast.error(error.message);

			} finally {
				setLoading(false);
			}
		};
		getConversations();
	}, [messages]);

	return { loading, setLoading, conversations, setConversations };
};
export default useGetConversations;