import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const onLogout = () => {
        console.log(true)
        setLoading(true);
        sessionStorage.clear()
        return navigate('/', { replace: true })
    }

    return {
        onLogout,
        loading
    }

}

export default useLogout