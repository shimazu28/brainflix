import { Outlet } from "react-router-dom";
import PageHeader from "../components/PageHeader/PageHeader";

function Layout() {
  return (
    <>
      <PageHeader />
      <Outlet />
    </>
  );
}

export default Layout;
