import React from "react";

const TabCalificaciones = () => {
  return (
    <div className="space-y-2">
      <h4 className="font-semibold text-lg">Libro de calificaciones</h4>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="px-2 py-1">Actividad</th>
            <th className="px-2 py-1">Calificación</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-2 py-1">Examen parcial</td>
            <td className="px-2 py-1">85/100</td>
          </tr>
          <tr>
            <td className="px-2 py-1">Proyecto 1</td>
            <td className="px-2 py-1">90/100</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TabCalificaciones;
