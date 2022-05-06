import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  const accessToken = useSelector((state) => state.auth.accessToken);
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    if (accessToken) {
      setSignedIn(true);
    }
  }, [accessToken]);

  return (
    <div id="navbar" className="m-7">
      <h1 className="mb-3 font-bold text-3xl">
        <span className="text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Admin ~ Commercial Application
        </span>
      </h1>
      <div className="py-3">
        {/* <a>Home</a> */}
        <Link
          className="px-3 py-2 bg-gray-100 hover:bg-gray-300 rounded-xl transition-all"
          to={signedIn ? `/products` : `/`}
        >
          Home
        </Link>
        <Link
          className="px-3 py-2 bg-gray-100 hover:bg-gray-300 rounded-xl transition-all ml-6"
          to={signedIn ? `/admin` : `/`}
        >
          Admin
        </Link>
      </div>
    </div>
  );
};

export default AdminNavbar;
