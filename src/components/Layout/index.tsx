import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout: FC = () => {
 return (
    <div className="container-body">
      <header><Header /></header>
      <main><Outlet /></main>
      <Footer/>
    </div>
  );
};

