import React, { ReactNode } from "react";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;
