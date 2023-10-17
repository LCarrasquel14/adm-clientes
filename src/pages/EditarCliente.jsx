import {
  useLoaderData,
  Form,
  useNavigate,
  useActionData,
  redirect,
} from "react-router-dom";
import { actualizarCliente, obtenerCliente } from "../Data/clientes";
import Formulario from "../components/Formulario";
import Error from "../components/Error";
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

export async function action({ request, params }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);

  const email = formData.get("email");

  //Validacion
  const errores = [];
  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  if (!regex.test(email)) {
    errores.push("email no es valido");
  }
  Object.values(datos).includes("") &&
    errores.push("todos los campos son obligatorios");

  //retornar si hay errores
  if (Object.keys(errores).length) {
    return errores;
  }
  //actualiar clientes
  await actualizarCliente(params.clienteId, datos);

  return redirect("/");
}

const EditarCliente = () => {
  const cliente = useLoaderData();
  const navigation = useNavigate();
  const errores = useActionData();

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
          {errores && errores.map((error, i) => <Error key={i}>{error}</Error>)}
          <Formulario cliente={cliente} />
          <input
            type="submit"
            className="mt-5 w-full bg-blue-900 uppercase font-bold text-white text-lg "
            value="Guardar cliente"
          />
        </Form>
      </div>
    </>
  );
};

export default EditarCliente;
