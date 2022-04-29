import React from "react";
import Select from "react-select";

const CustomSelect = ({ label, options, defaultValue, ...children }) => {
  return (
    <div className="container-custom-select">
      <h3>{label}</h3>
      <Select
        className="custom-select"
        options={options}
        defaultValue={defaultValue}
        {...children}
      />
    </div>
  );
};

export default React.memo(CustomSelect);
