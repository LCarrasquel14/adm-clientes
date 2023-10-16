import { useLoaderData, Form, useNavigate } from "react-router-dom";
import { obtenerCliente } from "../Data/clientes";
import Formulario from "../components/Formulario";
export async function louder({ params }) {
  const cliente = await obtenerCliente(params.clienteId);
  if (Object.values(cliente).length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "cliente no encontrado",
    });
  }
  return cliente;
}

const EditarCliente = () => {
  const cliente = useLoaderData();
  const navigation = useNavigate();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-">Editar Cliente</h1>
      <p className="pt-3">A continuacion podras realizar cambios al cliente</p>
      <div className="flex justify-end ">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigation("/")}
        >
          Volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        <Form method="post" noValidate>
          {/* {errores && errores.map((error, i) => <Error key={i}>{error}</Error>)} */}
          <Formulario cliente={cliente} />
          <input
            type="submit"
            className="mt-5 w-full bg-blue-900 uppercase font-bold text-white text-lg"
            value="registrar cliente"
          />
        </Form>
      </div>
    </>
  );
};

export default EditarCliente;
