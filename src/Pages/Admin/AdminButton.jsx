import React, { useEffect, useState } from "react";

const AdminButtonLevel = {
  primary: [
    "bg-blue-600",
    "text-white",
    "hover:bg-blue-700",
    "focus:outline-none",
    "focus:shadow-outline",
  ],
  secondary: [
    "bg-gray-600",
    "text-white",
    "hover:bg-gray-700",
    "focus:outline-none",
    "focus:shadow-outline",
  ],
  danger: [
    "bg-red-600",
    "text-white",
    "hover:bg-red-700",
    "focus:outline-none",
    "focus:shadow-outline",
  ],
  success: [
    "bg-green-600",
    "text-white",
    "hover:bg-green-700",
    "focus:outline-none",
    "focus:shadow-ouline",
  ],
  warning: [
    "bg-yellow-600",
    "text-white",
    "hover:bg-yellow-700",
    "focus:outline-none",
    "focus:shadow-outline",
  ],
};

function AdminButton({ text, level, onClick, ...children }) {
  const [currentClasses, setCurrentClasses] = useState();
  useEffect(() => {
    const combinedString = AdminButtonLevel[level].join(" ");
    setCurrentClasses(
      "px-6 py-3 rounded-xl transition-all ease-in-out duration-300 disabled:bg-gray-600 ".concat(
        combinedString
      )
    );
  }, [level]);

  return (
    <button onClick={onClick} className={currentClasses} {...children}>
      {text}
    </button>
  );
}

export default AdminButton;
