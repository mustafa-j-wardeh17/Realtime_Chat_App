'use client'
import Sidebar from "../Components/SideBar/Sidebar";
import ChatSide from "../Components/ChatSide/ChatSide";
import { useAuthContext } from "@/context/authContext";
import { useEffect, useState } from "react";
import useLogout from "@/hooks/useLogout";
import Loading from "./loading";
import { Sansita_Swashed } from 'next/font/google'
const inter = Sansita_Swashed({
	subsets: ['latin'],
	variable: '--font-inter',
  })
  
export default function Home() {
	const { authUser, setAuthUser } = useAuthContext()
	const { logout, loading } = useLogout()
	useEffect(() => {
		const Logout = async () => {
			await logout()
		}
		if (authUser === null) {
			Logout()
			window.location.replace("/login");
		}
	}, [authUser])
	return (
		<div className={`${inter.variable} relative flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0`}>
			{
				loading ? <Loading /> :
					(<div className={`flex w-full h-full `}>
						<Sidebar />
						<div className="w-1 h-full divider-horizontal p-0 m-0" />
						<ChatSide />
					</div>
					)
			}
		</div>
	);
}
