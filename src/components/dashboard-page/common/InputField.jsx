import React from 'react';

function InputField({label, name, value, onChange, type = 'text'}) {
    return (
        <div className={`flex flex-col w-[20vw]`}>
            <label>{label}</label>
            <input
                className={`border border-gray-300 p-2 rounded-md`}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default InputField;