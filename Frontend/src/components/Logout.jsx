import React from 'react'
import { useAuth } from '../Context/AuthProvider'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


function Logout() {

    const [authUser, setAuthUser] = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null
            })
            localStorage.removeItem("Users");

            toast.success("Logout Successfully");
            setTimeout(() => {
                navigate('/');
                window.location.reload();
            }, 1000)

        } catch (error) {
            toast.error("Error:" + error.message)
            setTimeout(() => { }, 1000);
        }
    }

    return (
        <div>
            <button className="bg-purple-500 text-white px-3 py-1.5 rounded-md hover:bg-purple-800 duration-300 cursor-pointer dark:bg-purple-800"
                onClick={handleLogout}>
                Logout
            </button>
        </div>
    )
}

export default Logout