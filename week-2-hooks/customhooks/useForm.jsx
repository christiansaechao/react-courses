import { useState, useEffect } from "react";
import FormProps from './types/form-props';


export const useForm = (): [FormProps, (e: React.ChangeEvent<HTMLInputElement>) => void]  => {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return [form, handleChange];
};
