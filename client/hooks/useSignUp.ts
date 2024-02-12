import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext";

interface signUpProps {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    gender:string;
}
const useSignup = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const signup = async ({ fullName, email, password, confirmPassword, gender }:signUpProps) => {
		const success = handleInputErrors({ fullName, email, password, confirmPassword, gender });
		if (!success) return;

		setLoading(true);
		try {
			const res = await fetch("http://localhost:3001/auth/v1/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ fullName, email, password, confirmPassword, gender }),
                credentials:'include'
            });

			const data = await res.json();
			if (!res.ok) {
				throw new Error(data.msg);
			}
            console.log(data.data)
			localStorage.setItem("chat-user", JSON.stringify(data.data));
			setAuthUser(data.data);
            toast.success('Account created successfully!');
		} catch (error:any) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, signup };
};
export default useSignup;

function handleInputErrors({ fullName, email, password, confirmPassword, gender }:signUpProps) {
	if (!fullName || !email || !password || !confirmPassword || !gender) {
		toast.error("Please fill in all fields");
		return false;
	}

	if (password !== confirmPassword) {
		toast.error("Passwords do not match");
		return false;
	}

	if (password.length < 6) {
		toast.error("Password must be at least 6 characters");
		return false;
	}

	return true;
}