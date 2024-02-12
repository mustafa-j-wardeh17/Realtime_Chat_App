import { create } from "zustand";


// Define the type for the state
interface ConversationState {
    selectedConversation: any;
    setSelectedConversation: (selectedConversation: any) => void;
    messages: any;
    setMessages: (messages: any) => void;
}

const useConversation = create<ConversationState>((set) => ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
    messages: [],
    setMessages: (messages) => set({ messages }),
}));

export default useConversation;
