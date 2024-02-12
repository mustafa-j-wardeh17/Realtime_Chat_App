import useConversation from "@/Zustant/zustand";
import { useState } from "react";
import toast from "react-hot-toast";

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { selectedConversation, messages, setMessages } = useConversation()
    const sendMessage = async ({ message }: { message: string }) => {
        setLoading(true)
        try {
            const res = await fetch(`http://localhost:3001/message/send/${selectedConversation._id}`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({message}),
                credentials:'include'
            })

            const data = await res.json()
            if (!res.ok) throw new Error(data.msg)
            setMessages([...messages, message])
        } catch (error: any) {
            toast.error(error.message)
        }
        finally {
            setLoading(false)
        }
    }

    return { sendMessage, loading }
}

export default useSendMessage