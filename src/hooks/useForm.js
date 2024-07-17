import { useState } from "react";

export function useForm () {
    const [form, setForm] = useState((initialState));

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm((prev)=>({
            ...prevForm, 
            [name]: value,
        }))
    }

    return { form, setForm, handleChange }
}