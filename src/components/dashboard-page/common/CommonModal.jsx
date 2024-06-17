import React, {useEffect, useState} from 'react';
import InputField from "./InputField.jsx";

function CommonModal({fields, openModal, setOpenModal, values, handleDelete, handleUpdate, message}) {
    const [localValues, setLocalValues] = useState(values);

    useEffect(() => {
        setLocalValues(values);
    }, [values]);

    const handleChange = (e, index) => {
        const newValues = [...localValues];
        newValues[index] = e.target.value;
        setLocalValues(newValues);
    };

    const handleSave = () => {
        const updatedValues = {};
        for (let i = 0; i < fields.length; i++) {
            updatedValues[fields[i]] = localValues[i];
        }
        handleUpdate(updatedValues);
    };

    return (
        <>
            {
                openModal === true && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-6 rounded">
                            <h2 className="text-2xl font-semibold mb-4">Edit User</h2>
                            <form className={`w-max flex flex-col gap-4`}>
                                {
                                    fields?.map((field, index) => {
                                        return (
                                            <React.Fragment key={index}>
                                                <InputField
                                                    label={field}
                                                    name={fields}
                                                    value={localValues[index]}
                                                    onChange={(e) => handleChange(e, index)}/>
                                            </React.Fragment>
                                        );
                                    })
                                }
                                <div>{message && message}</div>
                                <div className={`flex justify-between items-center`}>
                                    {
                                        handleUpdate && (
                                            <button
                                                type={`button`}
                                                onClick={handleSave}
                                                className="btn rounded bg-slate-700 px-4 py-2 text-white transition-all hover:bg-slate-400 hover:text-black active:bg-slate-700"
                                            >
                                                Update
                                            </button>
                                        )
                                    }
                                    {
                                        handleDelete && (
                                            <button
                                                type={`button`}
                                                onClick={handleDelete}
                                                className="btn rounded bg-slate-700 px-4 py-2 text-white transition-all hover:bg-slate-400 hover:text-black active:bg-slate-700"
                                            >
                                                Delete
                                            </button>
                                        )
                                    }
                                    <button
                                        onClick={() => setOpenModal(false)}
                                        className={`btn rounded bg-slate-700 px-4 py-2 text-white transition-all hover:bg-slate-400 hover:text-black active:bg-slate-700`}
                                    >
                                        Close
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default CommonModal;