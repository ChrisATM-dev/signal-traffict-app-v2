import { useState } from "react";

export const useForm = (initialData = {}) => {
    const [data, setData] = useState(initialData)
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm , setShowConfirm ] = useState(false);
    
    const onInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const reset = () => {
        setData(initialData);
    }

    const onShowPassword = (e) => {
        e.preventDefault();
        setShowPassword((prev) => !prev);
    }
    const onShowConfirm = (e) => {
        e.preventDefault();
        setShowConfirm((prev) => !prev);
    }
    
    return { 
        ...data,
        showPassword,
        showConfirm,
        onShowPassword,
        onShowConfirm,
        data,
        onInputChange,
        reset 
    }
}
