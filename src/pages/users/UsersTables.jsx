/* eslint-disable react/prop-types */

import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { message, Table } from 'antd';
import { ConfigProvider } from 'antd';
import { useNavigate } from 'react-router-dom';


const UsersTables = ({ data, loading, onUserDeleted, searchQuery, setOpen, setUserFormValue, setAction}) => {


    const navigate = useNavigate()
    const handleDelete = async (id) => {
        try {
            fetch(`https://fakestoreapi.com/users/${id}`, {
                method: "DELETE"
            }).then(() => {
                message.success('User deleted successfully')
                onUserDeleted(id)
                navigate('/users')
            }) 
        } catch (error) {
            message.error('Failed to delete user')
            console.error('Error deleting user:', error);
        }
    };

    const onEdit = (record) => {
        console.log(record);
        setUserFormValue({
            firstname: record.name.split(' ')[0],
            lastname: record.name.split(' ')[1],
            username: record.userName,
            password: record.password,
            phone: record.phoneNumber,
            email: record.emailAddress,
            address: record.address,
            id: record.id,
        })
        setOpen(true)
        setAction('EDIT')
    }

    const filteredData = data.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.emailAddress.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.phoneNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.address.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // const handleEdit = (id) => {
    //     onEditClick(id);
    // };


    // columns for the table was brought down cus of the action buttons
    const columns = [
        // {
        //     title: 'S/N',
        //     dataIndex: 'serial',
        //     key: 'serial',
        // },

        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'User Name',
            dataIndex: 'userName',
            key: 'userName',
        },
        {
            title: 'Email Address',
            dataIndex: 'emailAddress',
            key: 'emailAddress',
        },
        {
            title: 'Password',
            dataIndex: 'password',
            key: 'password',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            render: (_, record) => (
                <>
                    <div className=' flex gap-5 cursor-pointer'>
                        <EditOutlined className=' hover:animate-bounce' onClick={() => onEdit(record)} />
                        <DeleteOutlined className=' hover:animate-bounce' onClick={() => handleDelete(record.id)} />
                    </div>
                </>
            )
        },
    ];

    return (
        <ConfigProvider
            theme={{
                components: {
                    Table: {
                        cellPaddingBlock: 10.5,
                        cellFontSize: 12,
                        headerBg: "white",
                        headerColor: 'black',
                        colorText: 'black',
                        fontWeightStrong: 650,
                        cellPaddingInline: 22,
                        rowHoverBg: '#C4C4C4'
                    },
                },
            }}
        >
             
            <Table columns={columns} dataSource={filteredData} loading={loading} />
        </ConfigProvider>
    )
}

export default UsersTables;