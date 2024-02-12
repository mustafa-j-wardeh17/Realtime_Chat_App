import useConversation from "@/Zustant/zustand";
import { useAuthContext } from "@/context/authContext";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
	const [loading, setLoading] = useState(false);
	const [conversations, setConversations] = useState([]);
	const {messages} = useConversation()

	useEffect(() => {
		const getConversations = async () => {
			setLoading(true);
			try {
				const res = await fetch("http://localhost:3001/user",{
                    method:'GET',
                    headers:{
                        "Type-Content"  : "application/json"
                    },
                    credentials:'include'
                });
				const data = await res.json();
				if (data.error) {
					throw new Error(data.msg);
				}
				setConversations(data.data);
			} catch (error:any) {
				toast.error(error.message);				
			} finally {
				setLoading(false);
			}
		};
		getConversations();
	}, [messages]);

	return { loading, conversations };
};
export default useGetConversations;