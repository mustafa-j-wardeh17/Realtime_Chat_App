import useConversation from '@/Zustant/zustand'
import { useAuthContext } from '@/context/authContext';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const useGetMessages = () => {
    const { messages, setMessages, selectedConversation } = useConversation();
    const {setAuthUser} = useAuthContext()
    const [loading, setLoading] = useState(false)
    // Fetch messages from the server and store them in state
    useEffect(() => {
        const getMessages = async () => {
            try {
                setLoading(true);
                const res = await fetch(`http://localhost:3001/message/${selectedConversation._id}`, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: 'include'
                })
                const data = await res.json()
                if (res.status === 401) {
                    setAuthUser(null)
                    localStorage.removeItem('chat-user')
                }
                else if (!res.ok) {
                    throw new Error(data.msg)
                }
                else setMessages(data.data)
            } catch (error: any) {
                console.log(error.message)
            }
            finally {
                setLoading(false)
            }
        }
        getMessages()
    }, [selectedConversation?._id,setMessages])

    return { loading, messages }
}

export default useGetMessages