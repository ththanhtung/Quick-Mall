import React, { useState } from "react";
import { useSelector } from "react-redux";
import AdminBody from "./AdminBody";
import AdminNavbar from "./AdminNavbar";

function Admin() {
  const user = useSelector((state) => state.auth.user);
  const [canAccess, setCanAccess] = useState(false);
  const [loading, setLoading] = useState(true);

  useState(() => {
    const _user = JSON.parse(user);
    if (_user.isAdmin) {
      setCanAccess(true);
    }
    setLoading(false);
  }, [user]);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : canAccess ? (
        <div>
          {/* Header */}
          <div>
            <AdminNavbar />
          </div>
          {/* Body */}
          <div className="">
            <AdminBody />
          </div>
        </div>
      ) : (
        <div className="text-center">
          <div className=" mt-16 text-2xl font-bold">
            You are not allowed to access this page.
          </div>
          <div className="mt-32 font-bold text-8xl">T-T</div>
        </div>
      )}
    </>
  );
}

export default React.memo(Admin);
