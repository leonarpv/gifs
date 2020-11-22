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
      <div className="input-group">
        <input
          type="text"
          className="search-query form-control"
          value={value}
          placeholder={placeholder}
          onChange={onHandleSetValue}
        />
        <span className="input-group-btn">
          <button type="button" disabled>
            <span className="fa fa-search"></span>
          </button>
        </span>
      </div>
    </form>
  );
};
