import React from "react";
import * as RiIcons from "react-icons/ri";
import * as ImIcons from "react-icons/im";
import * as FaIcons from "react-icons/fa";

export const Navbar = [
  {
    title: "Dashboard",
    path: "/",
    icon: <RiIcons.RiAdminFill />,
    cName: "nav-text",
  },
  {
    title: "Video Connect",
    path: "/videocon",
    icon: <ImIcons.ImVideoCamera />,
    cName: "nav-text",
  },
  {
    title: "Todos",
    path: "/todos",
    icon: <RiIcons.RiTodoFill />,
    cName: "nav-text",
  },
  {
    title: "LogIn",
    path: "/login",
    icon: <RiIcons.RiLoginCircleFill />,
    cName: "nav-text",
  },
  {
    title: "Register",
    path: "/register",
    icon: <FaIcons.FaSignInAlt />,
    cName: "nav-text",
  },
];


