import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminProducts from "./AdminProducts";
import AdminUsers from "./AdminUsers";

const AdminBodyContainerWrapper = ({ children }) => {
  const { path } = useParams();
  // alert(path);
  return (
    <div className="border border-gray-200 rounded-xl w-full h-full  p-5">
      {path && path === "products" ? (
        <AdminProducts />
      ) : path === "users" ? (
        <AdminUsers />
      ) : (
        <></>
      )}
    </div>
  );
};

const AdminBodyAsideBlock = ({ title, description, link }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="cursor-pointer p-4 text-right ml-3 mr-16"
        onClick={() => {
          navigate(`/admin${link}`);
        }}
      >
        <div className="text-xl font-bold text-left">{title}</div>
        <div className="text-sm text-left text-gray-500">{description}</div>
      </div>
    </>
  );
};

function AdminBody() {
  const [settings] = useState([
    {
      name: "Users",
      description: "Manage accounts and permissions",
      link: "/users",
    },
    {
      name: "Products",
      description: "Manage products",
      link: "/products",
    },
  ]);

  return (
    <div className="m-7">
      {/* A flex with 2 blocks inside, which aside and settings container */}
      <div className="block lg:flex flex-row gap-3 items-start">
        {/* Aside */}
        <div className=" border border-gray-200 rounded-xl w-full lg:w-1/3 mb-3">
          {settings &&
            settings.map((setting, index) => {
              return (
                <AdminBodyAsideBlock
                  title={setting.name}
                  description={setting.description}
                  link={setting.link}
                  key={index}
                />
              );
            })}
        </div>

        {/* Container */}

        <AdminBodyContainerWrapper className="w-2/3" />
      </div>
    </div>
  );
}

export default AdminBody;
