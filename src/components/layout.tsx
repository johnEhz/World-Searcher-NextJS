import React from "react";
import Header from "./header";
import Footer from "./footer";

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="page-container w-full bg-gray-100 dark:bg-[#283641]">
        <Header />
        <main className="w-full min-h-screen -mt-14 pt-14">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
