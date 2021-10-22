import React from "react";
import SideBar from "./SideBar";
import Footer from "./Footer";
import TopBar from "./TopBar";

const Layout = ({ children }) => {
  return (
    <div>
      <SideBar />
      <TopBar />
      <div className="main-container">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
