import Image from "next/image";
import Sidebar from "../Components/SideBar/Sidebar";
import ChatSide from "../Components/ChatSide/ChatSide";

export default function Home() {
  return (
		<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<Sidebar />
      <div className="w-1 h-full divider-horizontal p-0 m-0"/>
			<ChatSide />
		</div>
  );
}
