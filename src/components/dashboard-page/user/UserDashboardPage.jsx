import {useEffect, useState} from "react";
import Table from "../../table/Table.jsx";
import {useDispatch, useSelector} from "react-redux";
import {removeUser, fetchUsers, selectAllUsers, updateUser} from "../../../features/userSlice.js";
import CommonModal from "../common/CommonModal.jsx";

function UserDashboardPage() {
    const dispatch = useDispatch()
    const userList = useSelector(selectAllUsers)
    const [data, setData] = useState([]);
    const [fields, setFields] = useState([]);
    const [values, setValues] = useState([]);
    const [userId, setUserId] = useState(null);

    const [openModalDelete, setOpenModalDelete] = useState(false);
    const handleOpenModalDelete = (id) => {
        setUserId(id);
        setOpenModalDelete(true);
    }

    const handleDelete = () => {
        dispatch(removeUser(userId));
        setData(data.filter(item => item.id !== userId));
        setOpenModalDelete(false);
    }

    const [selectedUser, setSelectedUser] = useState(null);
    const [openModalUpdate, setOpenModalUpdate] = useState(false);
    const handleOpenModalUpdate = (id) => {
        const userToUpdate = data.find(user => user.id === id);
        setSelectedUser(userToUpdate);
        setFields(Object.keys(userToUpdate).filter(key => key !== 'id' && key !== 'isDeleted' && key !== 'password'));
        setValues(Object.keys(userToUpdate).filter(key => key !== 'id' && key !== 'isDeleted' && key !== 'password').map(key => userToUpdate[key]));
        setOpenModalUpdate(true);
    };

    const handleUpdate = (updatedValues) => {
        const updatedUser = { ...selectedUser, ...updatedValues };
        dispatch(updateUser(updatedUser));
        setData(data.map(user => user.id === selectedUser.id ? updatedUser : user));
        setOpenModalUpdate(false);
    };

    useEffect(() => {
        if (userList === null) {
            dispatch(fetchUsers())
        }
        setData(userList)
    }, [userList]);

    const columns = [
        {key: "username", label: "User Name"},
        {key: "email", label: "Email"},
        {key: "fullName", label: "fullName"},
        {
            key: "avatar",
            label: "avatar",
            render: (value) => {
                return (
                    <img
                        src={value}
                        alt="avatar"
                        style={{width: "50px", height: "50px"}}
                        className="rounded-full border border-blueGray-50 shadow-lg"
                    />
                );
            },
        },
        {
            key: "delete",
            label: "Delete",
            render: (row) => (
                <button
                    onClick={() => handleOpenModalDelete(row.id)}
                    className="btn rounded bg-slate-700 px-4 py-2 text-white transition-all hover:bg-slate-400 hover:text-black active:bg-slate-700"
                >
                    Delete
                </button>
            ),
        },
        {
            key: "edit",
            label: "Edit",
            render: (row) => (
                <button
                    onClick={() => {
                        handleOpenModalUpdate(row.id)
                    }}
                    className="btn rounded bg-slate-700 px-4 py-2 text-white transition-all hover:bg-slate-400 hover:text-black active:bg-slate-700"
                >
                    Edit
                </button>
            ),
        }
    ];

    return (
        <>
            {
                data && <Table title={`User`} columns={columns} data={data}/>
            }

            <CommonModal openModal={openModalUpdate}
                         setOpenModal={setOpenModalUpdate}
                         fields={fields}
                         values={values}
                         handleUpdate={handleUpdate}/>

            <CommonModal openModal={openModalDelete}
                         handleDelete={handleDelete}
                         setOpenModal={setOpenModalDelete}
                         message={`Bạn muốn xóa người dùng này?`}/>
        </>
    );
}

export default UserDashboardPage;
