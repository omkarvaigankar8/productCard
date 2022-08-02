import React from 'react'
import { useFormContext } from "react-hook-form";
import './input.scss'
const TextInput = ({ name, type, placeholder, validationRules, value }) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();
    const error = errors[name];
    return (
        <div className='input_container'>
            {type === 'submit' ? (
                <input
                    type={type}
                    value={value}

                />
            ) : (
                <>
                    {type === 'textarea' ? (

                        <textarea
                            placeholder={placeholder}
                            {...register(name, validationRules)}

                        />

                    ) : (
                        <input
                            type={type}
                            placeholder={placeholder}
                            {...register(name, validationRules)}

                        />

                    )}
                </>
            )}
            {error && <div className='error'><p>Please enter {placeholder}</p></div>}
        </div>
    )
}

export default TextInput