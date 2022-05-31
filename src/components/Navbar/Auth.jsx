import React from "react";
import { Menu } from "@headlessui/react";
import { Icon } from "Icons";

const Auth = () => {
  const user = {
    name: "Abdullah Yanık",
    avatar:
      "https://yt3.ggpht.com/yti/APfAmoFIkink6-H8VotCwkQn4N_0OGeFBypwE6cfRcP_=s88-c-k-c0x00ffffff-no-rj-mo",
  };
  return (
    <Menu as="nav" className={"relative"}>
      {({ open }) => (
        <>
          <Menu.Button
            className={`flex items-center h-8 rounded-3xl pr-2 hover:bg-active ${
              open ? "bg-active" : "bg-black"
            }`}
          >
            <img
              className="w-8 h-8 rounded-full p-px mr-2 "
              src={user.avatar}
              alt=""
            />
            <span className="text-sm font-semibold mr-2">{user.name}</span>
            <span className={open && 'rotate-180'}><Icon size={16} name="downDir" /></span>
          </Menu.Button>
          <Menu.Items
            className={
              "absolute top-full p-1 right-0 w-48 bg-active rounded translate-y-2 "
            }
          >
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex justify-between items-center px-2 rounded text-sm    ${active && "bg-blue-500   "}`}
                  href="/"
                >
                  Account 
                  <Icon name="external" size={16}/>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 rounded text-sm  ${active && "bg-blue-500 "}`}
                  href="/"
                >
                  Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 rounded text-sm ${active && "bg-blue-500  "}`}
                  href="/"
                >
                  Log Out
                </a>
              )}
            </Menu.Item>
            
          </Menu.Items>
        </>
      )}
    </Menu>
  );
};

export default Auth;
