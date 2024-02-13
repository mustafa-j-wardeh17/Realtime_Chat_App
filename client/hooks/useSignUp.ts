import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext";

interface signUpProps {
	fullName: string;
	email: string;
	password: string;
	confirmPassword: string;
	gender: string;
	setError: (error: string) => void
}
const useSignup = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('')
	const { setAuthUser } = useAuthContext();

	const signup = async ({ fullName, email, password, confirmPassword, gender }: signUpProps) => {
		const success = handleInputErrors({ fullName, email, password, confirmPassword, gender ,setError});
		if (!success) return;

		setLoading(true);
		try {
			const res = await fetch("http://localhost:3001/auth/v1/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ fullName, email, password, confirmPassword, gender }),
				credentials: 'include'
			});

			const data = await res.json();
			if (res.status === 401) {
				setAuthUser(null)
				localStorage.removeItem('chat-user')
			}
			else if (!res.ok) {
				throw new Error(data.msg);
			}
			else {
				console.log(data.data)
				localStorage.setItem("chat-user", JSON.stringify(data.data));
				setAuthUser(data.data);
				toast.success('Account created successfully!');
			}
		} catch (error: any) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { error, loading, signup };
};
export default useSignup;

function handleInputErrors({ fullName, email, password, confirmPassword, gender,setError }: signUpProps) {
	if (!fullName || !email || !password || !confirmPassword || !gender) {
		setError("Please fill in all fields");
		return false;
	}

	if (password !== confirmPassword) {
		setError("Passwords do not match");
		return false;
	}

	if (password.length < 6) {
		setError("Password must be at least 6 characters");
		return false;
	}

	return true;
}