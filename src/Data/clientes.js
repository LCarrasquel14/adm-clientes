export async function obtenerClientes() {
  const url = "http://localhost:3000/clientes";

  const respuesta = await fetch(url);
  const resultado = await respuesta.json();
  return resultado;
}
export async function obtenerCliente(id) {
  const url = `http://localhost:3000/clientes/${id}`;

  const respuesta = await fetch(url);
  const resultado = await respuesta.json();
  return resultado;
}
export async function agregarCliente(datos) {
  const url = "http://localhost:3000/clientes";
  try {
    const respuesta = await fetch(url, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await respuesta.json();
  } catch (error) {
    console.log(error);
  }
}

export async function actualizarCliente(id, datos) {
  const url = "http://localhost:3000/clientes";
  try {
    const respuesta = await fetch(`${url}/${id}`, {
      method: "PUT",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await respuesta.json();
  } catch (error) {
    console.log(error);
  }
}

export async function eliminarCliente(id) {
  const url = "http://localhost:3000/clientes";
  try {
    const respuesta = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    await respuesta.json();
  } catch (error) {
    console.log(error);
  }
}
