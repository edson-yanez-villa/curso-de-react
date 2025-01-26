import { useState } from "react";
const useForm = (initialState = {}) => {
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const resetForm = () => {
    setFormData(initialState);
  };
  const clearForm = () => {
    const clearedState = Object.keys(initialState).reduce((acc, key) => {
      acc[key] = "";
      return acc;
    }, {});
    setFormData(clearedState);
  };
  return {
    formData,
    handleChange,
    resetForm,
    clearForm,
  };
};
export default useForm;
