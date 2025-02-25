import axios from "axios";
import { useEffect, useState } from "react";

const usePayment = () => {
    const [initializing, setInitializing] = useState(false);
    const [open, setOpen] = useState(false);
    const [paymentData, setPaymentData] = useState(null)
   
      const handleCancel = () => {
        setOpen(false);
      };
  

    const initializePayment = async (req) => {
      setInitializing(true)
      const response = await axios.post('https://api.paystack.co/transaction/initialize', { ...req, callback_url: 'http://localhost:3000/dashboard' }, {
        headers: {
          Authorization: 'Bearer ' + import.meta.env.VITE_PAYSTACK_SECRET_KEY
        }
      })
      setInitializing(false)
      window.location.href = response.data.data.authorization_url
    }

    const verifyPayment = async (reference) => {
      setInitializing(true)
      const response = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, {
        headers: {
          Authorization: 'Bearer ' + import.meta.env.VITE_PAYSTACK_SECRET_KEY
        }
      })
      console.log(response)
      setInitializing(false)
      setPaymentData(response.data.data)
      setOpen(true)
    }
  
    useEffect(() => {
      const search = new URLSearchParams(window.location.search)
      const reference = search.get('reference')
      console.log(reference)
      if (reference) {
        verifyPayment(reference)
      }
    }, [])

    const [initializingProductId, setInitializingProductId] = useState(null)

    const handlePaymentInitialization = async (product) => {
      setInitializingProductId(product.id)
      await initializePayment({
        email: 'oladipupoolumide@gmail.com',
        amount: product.price * 100
      })
      setInitializingProductId(null)
    }

  return {
    initializing,
    initializePayment,
    open,
    setOpen,
    handleCancel,
    paymentData,
    initializingProductId,
    setInitializingProductId,
    handlePaymentInitialization,
  }
}

export default usePayment