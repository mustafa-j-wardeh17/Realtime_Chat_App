import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext";

interface loginProps {
    email: string;
    password: string;
}
const useLogin = () => {
	const [loading, setLoading] = useState(false);
    const [error,setError] = useState('')
	const { setAuthUser } = useAuthContext();

	const login = async ({ email, password}:loginProps) => {
		const success = handleInputErrors({ email, password  });
		if (!success) return;

		setLoading(true);
		try {
			const res = await fetch("http://localhost:3001/auth/v1/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password }),
                credentials:'include'
			});

			const data = await res.json();
			if (!res.ok) {
				throw new Error(data.msg);
			}
			localStorage.setItem("chat-user", JSON.stringify(data.data));
			setAuthUser(data.data);
            console.log(data.data)
		} catch (error:any) {
			setError(error.message)
		} finally {
			setLoading(false);
		}
	};

	return { error,loading, login };
};
export default useLogin;

function handleInputErrors({ email, password }:loginProps) {
	if (!email || !password ) {
		toast.error("Please fill in all fields");
		return false;
	}

	if (password.length < 6) {
		toast.error("Password must be at least 6 characters");
		return false;
	}

	return true;
}