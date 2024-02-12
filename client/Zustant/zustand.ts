import { create } from "zustand";


// Define the type for the state
interface ConversationState {
    selectedConversation: any;
    setSelectedConversation: (selectedConversation: any) => void;
    messages: any;
    setMessages: (messages: any) => void;
    filter: string;
    setFilter: (filter: string) => void
}

const useConversation = create<ConversationState>((set) => ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
    messages: [],
    setMessages: (messages) => set({ messages }),
    filter: '',
    setFilter: (filter) => set({ filter })
}));

export default useConversation;
