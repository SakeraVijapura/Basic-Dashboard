import { useState } from "react"
import { Navigate, Outlet } from "react-router-dom";


const PrivateRoutes = () => {

    const [user, setUser] = useState(() => {
        return JSON.parse(localStorage.getItem('loggedUser') || null);
    });

    return (
        <>
            {user ? <Outlet /> : <Navigate to={'/login'} />}
        </>
    )


}

export default PrivateRoutes;