import { useNavigate, Form, useActionData, redirect } from "react-router-dom";
import Formulario from "../components/Formulario";
import Error from "../components/Error";
import { agregarCliente } from "../Data/clientes";
export async function action({ request }) {
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

  if (Object.keys(errores).length) {
    return errores;
  }

  await agregarCliente(datos);

  return null;
}

const NuevoCliente = () => {
  const errores = useActionData();
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
        <Form method="post" noValidate>
          {errores && errores.map((error, i) => <Error key={i}>{error}</Error>)}
          <Formulario />
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

export default NuevoCliente;
