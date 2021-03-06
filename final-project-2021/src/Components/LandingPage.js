import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import "./style.css";
import { IconContext } from "react-icons";

function LandingPage() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "yellow" }}>
        <div className="navbar">
          <Link to="#" className="menu-bar">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div>
            <div style={{ marginLeft: "415px" }}>
              <h2>Admin Workspace</h2>
            </div>
          </div>
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bar">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {Navbar.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default LandingPage;
