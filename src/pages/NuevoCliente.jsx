import { useNavigate } from "react-router-dom";
import Formulario from "../components/Formulario";

const NuevoCliente = () => {
  const navigation = useNavigate();
  return (
    <>
      <h1 className="font-black text-4xl text-blue-">
        Administra tus clientes
      </h1>
      <p className="pt-3">
        Llena todos los campos para registrar al nuevo cliente
      </p>
      <div className="flex justify-end ">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigation("/")}
        >
          Volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        <form>
          <Formulario />
          <input
            type="submit"
            className="mt-5 w-full bg-blue-900 uppercase font-bold text-white text-lg"
            value="registrar cliente"
          />
        </form>
      </div>
    </>
  );
};

export default NuevoCliente;
