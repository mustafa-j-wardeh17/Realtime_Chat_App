'use client'
import Sidebar from "../Components/SideBar/Sidebar";
import ChatSide from "../Components/ChatSide/ChatSide";
import { useAuthContext } from "@/context/authContext";
import { useEffect, useState } from "react";

export default function Home() {
	const { authUser } = useAuthContext()
	const [loading, setLoading] = useState(false)
	useEffect(() => {
		if (authUser === null) {
			window.location.replace("/login");
		}
	}, [])
	return (
		<div className='relative flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<div className={`flex w-full h-full `}>
				<Sidebar />
				<div className="w-1 h-full divider-horizontal p-0 m-0" />
				<ChatSide />
			</div>
		</div>
	);
}
