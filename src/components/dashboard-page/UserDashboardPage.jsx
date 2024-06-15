import {useEffect, useState} from "react";
import Table from "../table/Table";
import {useDispatch, useSelector} from "react-redux";
import {removeUser, fetchUsers, selectAllUsers} from "../../features/userSlice.js";
import EditForm from "./EditForm.jsx";

function UserDashboardPage() {
    const dispatch = useDispatch()
    const userList = useSelector(selectAllUsers)
    const [data, setData] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [fields, setFields] = useState([]);
    const [values, setValues] = useState([]);

    const handleDelete = () => {
        const id = userList[0].id;

        dispatch(removeUser(id));
    };

    const handleOpenModalEdit = () => {
        setOpenModal(true);
    }

    useEffect(() => {
        if (userList === null) {
            dispatch(fetchUsers())
        }
        setData(userList)
    }, [userList])

    useEffect(() => {
        if (data && data.length) {
            const fields =Object.keys(userList[0] || {}).filter(key => key !== 'id' && key !== 'isDeleted' && key !== 'password')
            setFields(fields);
            setValues(fields.map(field => userList[0][field]));
        }
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
            render: () => (
                <button
                    onClick={() => handleDelete()}
                    className="btn rounded bg-slate-700 px-4 py-2 text-white transition-all hover:bg-slate-400 hover:text-black active:bg-slate-700"
                >
                    Delete
                </button>
            ),
        },
        {
            key: "edit",
            label: "Edit",
            render: () => (
                <button
                    onClick={() => {handleOpenModalEdit()}}
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
            <EditForm openModal={openModal} setOpenModal={setOpenModal} fields={fields} values={values} setValues={setValues}/>
        </>
    );
}

export default UserDashboardPage;
