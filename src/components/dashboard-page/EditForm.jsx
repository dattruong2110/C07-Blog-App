import React from 'react';
import InputField from "./InputField.jsx";

function EditForm({fields, openModal, setOpenModal, values, setValues}) {
    return (
        <>
            {
                openModal === true && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-6 rounded">
                            <h2 className="text-2xl font-semibold mb-4">Edit User</h2>
                            <form className={`w-max`}>
                                {fields?.map((field, index) => {
                                    return (
                                        <InputField
                                            key={index}
                                            label={field}
                                            name={field}
                                            value={values[index]}
                                            onChange={(e) => setValues(e.target.value)}
                                        />
                                    );
                                })}
                                <div className={`flex justify-between items-center pt-4`}>
                                    <button
                                        type="submit"
                                        className="btn rounded bg-slate-700 px-4 py-2 text-white transition-all hover:bg-slate-400 hover:text-black active:bg-slate-700"
                                    >
                                        Update
                                    </button>
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

export default EditForm;