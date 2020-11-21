import React from "react";

export const SearchBox = ({ placeholder, handleSubmit, initialValue }) => {
  const [value, setValue] = React.useState(initialValue, "");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    handleSubmit(value);
  };

  const onHandleSetValue = (e) => setValue(e.target.value);

  return (
    <form onSubmit={onHandleSubmit}>
      <input
        type="search"
        className="search"
        value={value}
        placeholder={placeholder}
        onChange={onHandleSetValue}
      />
    </form>
  );
};
