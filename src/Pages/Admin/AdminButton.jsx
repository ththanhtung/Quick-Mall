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
  "rounded-outline-primary": [
    "px-4 py-4",
    "border-blue-600",
    "border",
    "bg-transparent",
    "text-blue-600",
    "hover:bg-blue-700",
    "focus:outline-none",
    "focus:shadow-outline",
    "hover:text-blue-100",
  ],
  "rounded-outline-secondary": [
    "px-4 py-4",
    "border-gray-600",
    "border",
    "bg-transparent",
    "text-gray-600",
    "hover:bg-gray-700",
    "focus:outline-none",
    "focus:shadow-outline",
    "hover:text-gray-100",
  ],
  "rounded-outline-danger": [
    "px-4 py-4",
    "border-red-600",
    "border",
    "bg-transparent",
    "text-red-600",
    "hover:bg-red-700",
    "focus:outline-none",
    "focus:shadow-outline",
    "hover:text-red-100",
  ],
  "rounded-outline-success": [
    "px-4 py-4",
    "border-green-600",
    "border",
    "bg-transparent",
    "text-green-600",
    "hover:bg-green-700",
    "focus:outline-none",
    "focus:shadow-outline",
    "hover:text-green-100",
  ],
};

function AdminButton({ text, level, onClick, square, alt, ...children }) {
  const [currentClasses, setCurrentClasses] = useState();
  const [visibleToolTip, setVisibleToolTip] = useState(false);
  const [durationId, setDurationId] = useState(-1);

  useEffect(() => {
    const combinedString = AdminButtonLevel[level].join(" ");
    setCurrentClasses(
      "px-6 py-3 rounded-xl transition-colors ease-in duration-50 disabled:bg-gray-600 ".concat(
        combinedString
      )
    );
  }, [level]);

  return (
    <button
      onClick={onClick}
      className={currentClasses}
      {...children}
      onMouseEnter={() => {
        if (alt !== "") {
          // setVisibleToolTip(true);
          setDurationId(
            setTimeout(() => {
              setVisibleToolTip(true);
            }, 500)
          );
        }
      }}
      onMouseOut={() => {
        if (alt !== "") {
          setVisibleToolTip(false);
          clearTimeout(durationId);
        }
      }}
      alt={alt}
    >
      {text}
      {alt !== "" && visibleToolTip && (
        <div className="absolute bg-zinc-800 text-white p-2 rounded mt-[1rem] ml-[-1rem] text-sm">
          {alt}
        </div>
      )}
    </button>
  );
}

export default AdminButton;
