import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <h1 className="text-6xl font-bold"> CRM - React</h1>
      <Outlet />
    </>
  );
};

export default Layout;
