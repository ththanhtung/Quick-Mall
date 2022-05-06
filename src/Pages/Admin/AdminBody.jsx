import React, { useEffect, useState } from "react";
import { FaList, FaTools, FaUserAlt } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import AdminOrderManager from "./AdminOrderManager";
import AdminProducts from "./AdminProducts";
import AdminUsers from "./AdminUsers";

const SETTINGS = [
  // {
  //   name: "Analytics",
  //   description: "View analytics",
  //   link: "/analytics",
  //   icon: <MdOutlineAnalytics />,
  // },
  {
    name: "Users",
    description: "Manage accounts and permissions",
    link: "/users",
    icon: <FaUserAlt />,
  },
  {
    name: "Products",
    description: "Manage products",
    link: "/products",
    icon: <FaTools />,
  },
  {
    name: "Orders",
    description: "Manage orders which users have made",
    link: "/orders",
    icon: <FaList />,
  },
];

const AdminBodyContainerWrapper = ({ children }) => {
  const { path } = useParams();
  const navigate = useNavigate();
  const [navigator] = useState([
    {
      path: "products",
      component: <AdminProducts />,
    },
    {
      path: "users",
      component: <AdminUsers />,
    },
    {
      path: "orders",
      component: <AdminOrderManager />,
    },
  ]);

  return (
    <div className="border border-gray-200 rounded-xl w-full h-full p-5">
      {path === undefined ? (
        <div className="flex flex-col md:flex-row p-4 gap-4">
          {SETTINGS.map((nav, _index) => {
            return (
              <div
                className="px-8 py-4 md:p-8 w-full bg-gradient-to-tl from-red-500 to-indigo-400 rounded-3xl flex-1 
                  cursor-pointer hover:scale-105 transition ease-in-out flex flex-row gap-4"
                key={_index}
                onClick={() => {
                  navigate(`/admin${nav.link}`);
                }}
              >
                <div className="text-xl md:text-3xl text-white w-1/5">
                  {nav.icon}
                </div>
                <div className="flex-1 w-4/5">
                  <div className="md:text-2xl text-white font-extrabold">
                    {nav.name}
                  </div>
                  <div className="text-sm text-white">{nav.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        navigator &&
        navigator.map((item) => {
          if (item.path === path) {
            return item.component;
          }
          return null;
        })
      )}
    </div>
  );
};

const AdminBodyAsideBlock = ({ title, description, link, icon }) => {
  const [isActive, setActive] = useState(false);

  const navigate = useNavigate();
  const { path } = useParams();
  useEffect(() => {
    setActive(link.includes(path));
  }, [path, setActive, link]);

  return (
    <>
      <div
        className={`cursor-pointer p-7 text-right  pr-16 hover:bg-gray-100 flex 
          flex-row items-center justify-between ${
            isActive ? "bg-gray-100" : ""
          }`}
        onClick={() => {
          navigate(`/admin${link}`);
        }}
      >
        <div className={`w-1/5`}>
          <div className="text-2xl text-zinc-800">{icon}</div>
        </div>
        <div className="w-4/5">
          <div className="text-xl font-bold text-left">{title}</div>
          <div className="text-sm text-left text-gray-500">{description}</div>
        </div>
      </div>
    </>
  );
};

function AdminBody() {
  const [settings, setSettings] = useState([...SETTINGS]);

  useEffect(() => {
    setSettings(settings.sort((a, b) => b.name.localeCompare(a.name)));
  }, [settings, setSettings]);

  return (
    <div className="m-7">
      {/* A flex with 2 blocks inside, which aside and settings container */}
      <div className="block lg:flex flex-row gap-3 items-start">
        {/* Aside */}
        <div className=" border border-gray-200 rounded-xl w-full lg:w-1/3 mb-3 hidden lg:block">
          {settings &&
            settings.map((setting, index) => {
              return (
                <AdminBodyAsideBlock
                  title={setting.name}
                  description={setting.description}
                  link={setting.link}
                  key={index}
                  icon={setting.icon}
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
