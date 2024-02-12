import useConversation from "@/Zustant/zustand"

const ChatHeader = () => {
  const {selectedConversation} = useConversation()
  return (
    <div className="bg-gray-600 flex px-3 py-2 w-full items-center">
      <p className="text-black font-bold"><span className="text-gray-300">To:</span> { selectedConversation.fullName}</p>
    </div>
  )
}

export default ChatHeader