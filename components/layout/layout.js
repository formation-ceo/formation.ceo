import cx from "classnames";
import React from "react";
import Logo from "../logo";
import Head from "next/head";
import "./layout.scss";

const Layout = ({ className, children }) => {
  return (
    <div className={cx("layout", className)}>
      <Head>
        <title>Formation</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header className="layout-header">
        <Logo className="layout-logo" />
      </header>

      <main className="layout-main">{children}</main>

      {/* <footer className="layout-footer">
        &copy; {new Date().getFullYear()} Formation. 150 Paularino Ave, Bldg
        B, Costa Mesa, CA 92626.
      </footer> */}
    </div>
  );
};

export default Layout;
