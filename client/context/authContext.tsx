'use client'
import { createContext, useContext, useEffect, useState } from "react";

// Define the type for the context value
interface AuthContextType {
	authUser: any; // Change 'any' to the actual type of authUser if available
	setAuthUser: React.Dispatch<React.SetStateAction<any>>; // Change 'any' to the actual type of authUser if available
}

// Provide a default value for the context
const defaultValue: AuthContextType = {
	authUser: null,
	setAuthUser: () => { },
};

export const AuthContext = createContext(defaultValue);

export const useAuthContext = () => {
	return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
	const chat_auth = localStorage.getItem("chat-user")
	const [authUser, setAuthUser] = useState(chat_auth ? JSON.parse(chat_auth) : null);

	return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>;
};

// export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
// 	const [authUser, setAuthUser] = useState(null);
  
// 	useEffect(() => {
// 	  const chat_auth = localStorage.getItem("chat-user");
// 	  if (chat_auth) {
// 		setAuthUser(JSON.parse(chat_auth));
// 	  }
// 	}, [authUser]); 
  
// 	return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>;
//   };
  