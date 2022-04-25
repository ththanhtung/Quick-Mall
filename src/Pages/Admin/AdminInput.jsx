import React from "react";

function AdminInput({ name, altText, type, onChange, ...children }) {
  return (
    <div>
      {altText && <div className="text-gray-600 ">{altText}</div>}
      <input
        name={name}
        type={type || "text"}
        className="border border-solid rounded border-gray-300 outline-blue-500 px-2 py-1 w-full 
        ease-in-out duration-300 transition-all"
        onChange={(e) => {
          onChange(e.target.value);
        }}
        {...children}
      />
    </div>
  );
}

export default AdminInput;
