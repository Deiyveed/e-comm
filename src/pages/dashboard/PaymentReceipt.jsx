import { Button, Modal } from 'antd';
// import { useState } from 'react';
import usePayment from './usePayment';
import { useNavigate } from 'react-router-dom';

const PaymentReceipt = () => {
    const { open, paymentData, handleCancel: mainHandleCancel } = usePayment()
    const navigate = useNavigate()


    const handleCancel = () => {
        mainHandleCancel()
        navigate('/dashboard')
    }

    
    return (
        <>
            <Modal
                open={open}
                  title="Payment Receipt"
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Back to Dashboard
                    </Button>,
                ]}
            >
                {paymentData ? (
                    <div className=' border p-5'>
                        <p className=' text-[#CFCFCF] font-semibold text-xs mb-1'>Transaction Date</p>
                        <p className=' mb-3 font-semibold text-xs'>{new Date(paymentData.transaction_date).toLocaleString()}</p>
                        
                        <p className=' text-[#CFCFCF] font-semibold text-xs mb-1'>Reference</p>
                        <p className=' mb-3 font-semibold text-xs'>{paymentData.reference}</p>

                        <p className=' text-[#CFCFCF] font-semibold text-xs mb-1'>Amount</p>
                        <p className=' mb-3 font-semibold text-xs'>{paymentData.amount / 100} {paymentData.currency}</p>

                        <p className=' text-[#CFCFCF] font-semibold text-xs mb-1'>Transaction type</p>
                        <p className=' mb-3 font-semibold text-xs capitalize'>{paymentData.channel}</p>
                         
                        <p className=' text-[#CFCFCF] font-semibold text-xs mb-1'>Customer Email</p>
                        <p className=' mb-3 font-semibold text-xs'>{paymentData.customer.email}</p>
                         
                        <p className=' text-[#CFCFCF] font-semibold text-xs mb-1'>Payment Status</p>
                        <p className=' mb-3 font-semibold capitalize text-xs text-green-600'>{paymentData.status}</p>
                    </div>
                ) : (
                    <p>Loading payment details...</p>
                )}
            </Modal>
        </>
    );
};

export default PaymentReceipt