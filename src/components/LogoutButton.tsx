'use client'
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import Cookies from 'js-cookie';

const LogoutButton = () => {
    const {setUserData} = useAuth();
    const router = useRouter();

    const handleLogout = () => {
        setUserData(null);
        localStorage.removeItem("userSession")
        Cookies.remove("userSession")
        router.push("/")
        alert("Te has deslogueado")
    }

  return (
    <button className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" onClick={handleLogout}>Logout</button>
  )
}

export default LogoutButton