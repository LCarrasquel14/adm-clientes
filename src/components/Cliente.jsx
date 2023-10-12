import React from "react";

const Cliente = ({ cliente }) => {
  return (
    <tr className="border-b">
      <td className="p-6 space-y-2">
        <p className="text-2xl text-gray-900">{cliente.nombre}</p>
        <p>{cliente.empresa}</p>
      </td>
      <td className="p-6">
        <p className="text-gray-600">
          {" "}
          <span className="text-gray-800 uppercase font-bold">
            Email:{" "}
          </span>{" "}
          {cliente.email}
        </p>
        <p className="text-gray-600">
          {" "}
          <span className="text-gray-800 uppercase font-bold">tlf: </span>{" "}
          {cliente.telefono}
        </p>
      </td>
      <td className="p-6 flex gap-3">
        <button
          type="button"
          className="text-blue-800 hover:text-blue-600 uppercase font-bold "
        >
          Editar
        </button>
        <button
          type="button"
          className="text-red-800 hover:text-red-600 uppercase font-bold "
        >
          Elimar
        </button>
      </td>
    </tr>
  );
};

export default Cliente;
