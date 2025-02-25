/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Button, Form, Input, message, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddUsersModal = ({ onUserAdded, open, setOpen, userFormValue, setUserFormValue, action }) => {

    const navigate = useNavigate()


    //Modal state changes
    const [loading, setLoading] = useState(false);

    const handleCancel = () => {
        setOpen(false);
    };

    const handleChange = (key, value) => {
        setUserFormValue((prev) => {
            return {
                ...prev,
                [key]: value
            }
        })
    }

    const handleSubmit = async () => {
        
        setLoading(true);

        const newUser = {
            email: userFormValue.email,
            username: userFormValue.username,
            password: userFormValue.password,
            name: {
                firstname: userFormValue.firstname,
                lastname: userFormValue.lastname,
            },
            address: {
                city: userFormValue.address
            },
            phone: userFormValue.phone,
        };
        console.log(newUser)

        try {
            const url = action === "EDIT" ? `https://fakestoreapi.com/users/${userFormValue.id}` : 'https://fakestoreapi.com/users'
            await action === "EDIT" ? axios.put(url, newUser) : axios.post(url, newUser)
            message.success('User added successfully')
            onUserAdded(newUser);
            setLoading(false);
            setOpen(false);
            navigate('/users')
            setUserFormValue({})
        } catch (error) {
            message.error('Failed to add user')
            console.error(error)
        }


    };

    return (
        <>
            <Modal
                open={open}
                title="Add Users"
                onOk={handleSubmit}
                onCancel={handleCancel}
                footer={[
                    null,
                ]}
            >
                <Form
                    onFinish={handleSubmit}
                    autoComplete='off'
                    fields={[
                        {
                            name: 'firstname',
                            value: userFormValue.firstname
                        },
                        {
                            name: 'lastname',
                            value: userFormValue.lastname
                        },
                        {
                            name: 'username',
                            value: userFormValue.username
                        },
                        {
                            name: 'password',
                            value: userFormValue.password
                        },
                        {
                            name: 'phone',
                            value: userFormValue.phone
                        },
                        {
                            name: 'email',
                            value: userFormValue.email
                        },
                        {
                            name: 'address',
                            value: userFormValue.address
                        },
                    ]}
                >
                    <Form.Item
                        name='firstname'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your First Name!',
                            },
                        ]}>
                        <Input className='border placeholder:text-xs outline-none pl-2 mt-4 mb-2 h-8 w-full rounded-lg'
                            placeholder='First Name'
                            onChange={(e) => handleChange('firstname', e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item
                        name='lastname'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Last Name!',
                            },
                        ]}>
                        <Input className='border placeholder:text-xs outline-none pl-2 mb-2 h-8 w-full rounded-lg'
                            placeholder='Last Name'
                            onChange={(e) => handleChange('lastname', e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item
                        name='username'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}>
                        <Input className='border placeholder:text-xs outline-none pl-2 mb-2 h-8 w-full rounded-lg'
                            placeholder='Username'
                            onChange={(e) => handleChange('username', e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item
                        name='password'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}>
                        <Input.Password className='border placeholder:text-xs outline-none pl-2 mb-2 h-8 w-full rounded-lg'
                            placeholder='Password'
                            onChange={(e) => handleChange('password', e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item
                        name='phone'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Phone Number!',
                            },
                        ]}>
                        <Input className='border placeholder:text-xs outline-none pl-2 mb-2 h-8 w-full rounded-lg'
                            placeholder='Phone Number'
                            maxLength={11}
                            onChange={(e) => handleChange('phone', e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item
                        name='email'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Email Address!',
                            },
                        ]}>
                        <Input className='border placeholder:text-xs outline-none pl-2 mb-2 h-8 w-full rounded-lg'
                            placeholder='Email Address'
                            onChange={(e) => handleChange('email', e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item
                        name='address'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Address!',
                            },
                        ]}>
                        <Input className='border placeholder:text-xs outline-none pl-2 mb-2 h-8 w-full rounded-lg'
                            placeholder='Address'
                            onChange={(e) => handleChange('address', e.target.value)}
                        />
                    </Form.Item>
                    <div className=' flex justify-end gap-4'>
                        <Button key="back" danger type='primary' onClick={handleCancel}>
                            Cancel
                        </Button>
                        <Button key="submit" type="primary" loading={loading} htmlType='submit'>
                            Submit
                        </Button>
                    </div>
                </Form>
            </Modal>
        </>
    );
};
export default AddUsersModal;