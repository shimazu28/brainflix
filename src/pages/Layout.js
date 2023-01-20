import { Outlet } from "react-router-dom";
import PageHeader from "../components/PageHeader";

function Layout() {
  return (
    <>
      <PageHeader />
      <Outlet />
    </>
  );
}

export default Layout;
