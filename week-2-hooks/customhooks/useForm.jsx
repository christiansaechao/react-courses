import { useState, useEffect } from "react";

export const useForm = () => {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return [form, handleChange];
};
