import { InputProps, ValidationPasswordType } from "@/types";
import { useEffect, useState } from "react";

export const useFormValid = (inputs: InputProps[]) => {
  const [formValues, setFormValues] = useState(
    inputs.map((input) => input.value || ""),
  );
  const [formValid, setFormValid] = useState(false);

  //VALIDATIONS
  const [validationPassword, setValidationPassword] =
    useState<ValidationPasswordType>({
      hasUppercase: false,
      hasNumber: false,
      hasSpecialChar: false,
      hasCorrectLenght: false,
    } as ValidationPasswordType);

  useEffect(() => {
    const allFieldsValid = inputs.every((input, index) => {
      const value = formValues[index];
      if (input.required && !value) return false;
      if (input.type === "email") {
        return /\S+@\S+\.\S+/.test(String(formValues[index]));
      }
      if (input.type === "password") {
        const password = String(value);
        setValidationPassword((prev) => ({
          ...prev,
          hasUppercase: /[A-Z]/.test(password),
        }));
        setValidationPassword((prev) => ({
          ...prev,
          hasNumber: /[0-9]/.test(password),
        }));
        setValidationPassword((prev) => ({
          ...prev,
          hasSpecialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(
            password,
          ),
        }));
        setValidationPassword((prev) => ({
          ...prev,
          hasCorrectLenght: password.length >= 8 && password.length <= 16,
        }));
        return (
          validationPassword.hasUppercase &&
          validationPassword.hasNumber &&
          validationPassword.hasSpecialChar &&
          validationPassword.hasCorrectLenght
        );
      }
      return true;
    });
    setFormValid(allFieldsValid);
  }, [formValues, inputs]);

  const handleChange = (index: number, value: string) => {
    setFormValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  };

  return { formValues, formValid, handleChange, validationPassword };
};
