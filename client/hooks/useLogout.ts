import { useAuthContext } from "@/context/authContext"
import { useState } from "react"
import toast from "react-hot-toast"


const useLogout = () => {
    const { setAuthUser } = useAuthContext()
    const [loading, setLoading] = useState(false)
    const logout = async () => {
        try {
            setLoading(true)
            const res = await fetch("http://localhost:3001/auth/v1/logout", {
                method: "get",
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            })
            const data = await res.json()
            if (!res.ok) {
                throw new Error(data.msg)
            }
            localStorage.removeItem("chat-user")
            setAuthUser(null)

        } catch (error: any) {
            toast.error(error.message)
        }
        finally {
            setLoading(false)
            window.location.replace('/login')
        }

    }
    return { loading, logout }
}

export default useLogout