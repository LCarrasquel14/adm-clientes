import { Outlet, useLocation } from "react-router-dom";
import Enlace from "./Enlace";
const Layout = () => {
  const location = useLocation();
  return (
    <div className="md:flex ad:min-h-screen">
      <aside className="md:w-1/4 bg-blue-900 px-5 py-10">
        <h2 className="text-4xs font-black text-center text-white">
          CRM - Clientes
        </h2>
        <nav className="mt-10">
          <Enlace children="Cliente" address="/"></Enlace>
          <Enlace children="Nuevo Cliente" address="/clientes/nuevo"></Enlace>
        </nav>
      </aside>
      <main className="md: w-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
