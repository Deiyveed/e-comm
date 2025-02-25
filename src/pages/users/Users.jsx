
/* eslint-disable react/no-children-prop */
import { useEffect, useState } from "react";
import Filter from "../../components/Filter";
import SearchButton from "../../components/SearchButton";
import AddUsersModal from "./AddUsersModal";
import UsersTables from "./UsersTables"
import axios from "axios";
import { message } from "antd";


const Users = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const [searchQuery, setSearchQuery] = useState('');
    const [open, setOpen] = useState(false);

    const [userFormValue, setUserFormValue] = useState({
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        phone: '',
        email: '',
        address: '',
        id: '',
    })

    const [action, setAction] = useState()
    
    const onShowForm = (action) => {
        setOpen(true);
        setAction(action)
    }


    const fetchUsers = () => {
        setTimeout(() => {
            axios.get('https://fakestoreapi.com/users')
                .then((response) => {
                    const userData = response.data.map((user) => ({
                        key: user.id,
                        id: user.id,
                        // serial: user.id,
                        name: `${user.name.firstname} ${user.name.lastname}`,
                        userName: user.username,
                        emailAddress: user.email,
                        password: user.password,
                        phoneNumber: user.phone,
                        address: `${user.address.number} ${user.address.street} ${user.address.city}`
                    }));
                    setData(userData);
                    setLoading(false)
                }).catch((error) => {
                    message.error(error.response.data)
                    setLoading(false)
                })
        }, 1000);
    }

    useEffect(() => {
        fetchUsers()
    }, []);

    const handleUserAdded = (newUser) => {
        const addedUserData = {
            key: newUser.id,
            id: newUser.id,
            // serial: newUser.id,
            name: `${newUser.name.firstname} ${newUser.name.lastname}`,
            userName: newUser.username,
            emailAddress: newUser.email,
            password: newUser.password,
            phoneNumber: newUser.phone,
            address: `${newUser.address.city}`
        };
        setData(prevData => [...prevData, addedUserData]);
    };

    const handleUserDeleted = (userId) => {
        setData(prevData => prevData.filter(user => user.id !== userId));
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };


    return (
        <div className=" mx-20 mt-2">
            <div className=" mt-5 border-t ">
                <div className=" flex justify-between items-center mt-5 pb-4 border-b">
                    <SearchButton
                        onChange={handleSearch}
                        value={searchQuery}
                        placeholder="Search Users" />
                    <div className=" flex gap-4 items-center">
                        <Filter children="Filter" />
                        <button className='bg-white hover:bg-black border text-black hover:text-white font-medium text-[16px] leading-5 px-5 py-2 rounded-lg border-[#C4C4C4]'
                            size='large'
                            type="primary"
                            onClick={() => onShowForm('CREATE')}
                            >
                            Add Users
                        </button>
                        {
                            open &&
                            <AddUsersModal open={open} setOpen={setOpen} onUserAdded={handleUserAdded} userFormValue={userFormValue} setUserFormValue={setUserFormValue} action={action} />
                        }
                    </div>
                </div>
                <UsersTables data={data} loading={loading} onUserDeleted={handleUserDeleted} searchQuery={searchQuery} setOpen={setOpen} setUserFormValue={setUserFormValue} setAction={setAction} />
                {/* <p className=" text-xs relative bottom-[3rem]">Showing 1 to 10 of 2 entries</p> */}
            </div>
        </div>
    )
}

export default Users