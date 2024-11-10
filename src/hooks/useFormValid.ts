import { InputProps } from "@/types";
import { useEffect, useState } from "react";

export const useFormValid = (inputs: InputProps[]) => {
    const [formValues, setFormValues] = useState(inputs.map((input) => input.value || ''));
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        const allFieldsValid = inputs.every((input, index) => {
            if (input.type === 'email') {
                return /\S+@\S+\.\S+/.test(String(formValues[index]));
            }
            if (input.type === 'password') {
                return String(formValues[index]).length >= 7;
            }
            return true
        });
        setFormValid(allFieldsValid);
    }, [formValues, inputs]);

    const handleChange = (index: number, value: string) => {
        setFormValues((prevValues) => {
            const newValues = [...prevValues];
            newValues[index] = value;
            return newValues;
        })
    }

    return { formValues, formValid, handleChange };
}