import React from 'react'
import { useAuth } from '../Context/AuthProvider'
import toast from 'react-hot-toast';


function Logout() {

    const [authUser, setAuthUser] = useAuth();
    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null
            })
            localStorage.removeItem("Users");

            toast.success("Logout Successfully");
            setTimeout(() => {
                window.location.reload();
            }, 1000)

        } catch (error) {
            toast.error("Error:" + error.message)
            setTimeout(() => { }, 1000);
        }
    }

    return (
        <div>
            <button className="bg-red-500 text-white px-3.5 py-2 rounded-md hover:bg-red-800 duration-300 cursor-pointer dark:bg-red-800"
                onClick={handleLogout}>
                Logout
            </button>
        </div>
    )
}

export default Logout