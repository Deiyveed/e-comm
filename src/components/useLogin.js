import { message } from "antd"
import axios from "axios"
import { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const onLogin = useCallback(async (req) => {
        setLoading(true)
        try {
            const res = await axios.post('https://fakestoreapi.com/auth/login', req
            )
            if (res.data.token) {
                sessionStorage.setItem('***', res.data.token)
                setLoading(false)
                return navigate('/dashboard', { replace: true })
            } else {
                message.error('koshi lo')
            }

        } catch (error) {
            message.error(error.response.data)
            setLoading(false)
        }
    }, [navigate])

    return {
        onLogin,
        loading
    }
}

export default useLogin