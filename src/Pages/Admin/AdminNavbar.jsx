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
    <div id="navbar" className=" m-7">
      <h1 className="mb-3 font-bold text-3xl">
        Admin commercial web application
      </h1>
      <div>
        {/* <a>Home</a> */}
        <Link to={signedIn ? `/products` : `/`}>Home</Link>
      </div>
    </div>
  );
};

export default AdminNavbar;
