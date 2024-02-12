import useConversation from "@/Zustant/zustand"
import Image from "next/image"
import { IoChevronBack } from "react-icons/io5";

const ChatHeader = () => {
  const { selectedConversation, setSelectedConversation } = useConversation()
  const handleBackToConversations = () => {
    setSelectedConversation(null)
  }
  return (
    <div className="bg-transparent flex px-3 py-2 w-full items-center justify-between">
      <div className="flex items-center space-x-2 md:space-x-3">
        <button
          className={`${selectedConversation ? 'md:hidden flex items-center' : 'hidden'}`}
          onClick={handleBackToConversations}
        >
          <IoChevronBack size={26} className="text-slate-200" />

        </button>
        <img src={selectedConversation.profilePic}
          alt="user"
          className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full"
        />
        <p className="text-white font-bold md:text-[16px] text-[12px]">{selectedConversation.fullName}</p>
      </div>
    </div>
  )
}

export default ChatHeader