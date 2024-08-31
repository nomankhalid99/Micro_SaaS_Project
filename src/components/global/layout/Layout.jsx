
import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";

const Layout = ({ menuCollapse, setMenuCollapse,children }) => {
  
  return (
    <>
      <Sidebar menuCollapse={menuCollapse} setMenuCollapse={setMenuCollapse} />
      <div className="">
        <Topbar menuCollapse={menuCollapse}/>
        {children}
      </div>
    </>
  );
};

export default Layout;