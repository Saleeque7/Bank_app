import { useState } from "react";

export const OnFormChange = (initialState) => {
  const [value, setValue] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return [value, handleChange];
};
