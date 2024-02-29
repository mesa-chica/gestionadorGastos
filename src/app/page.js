"use client";

import Input from "@/components/Input";
import GastosList from "@/components/GastosList";

const DUMMY_GASTOS = [
  { id: "1", nombre: "Comida", precio: 100, fecha: new Date("2024-02-01") },
  { id: "2", nombre: "Ropa", precio: 200, fecha: new Date("2024-02-02") },
  { id: "3", nombre: "Cine", precio: 300, fecha: new Date("2024-01-01") },
  { id: "4", nombre: "Café", precio: 400, fecha: new Date("2023-12-01") },
  { id: "5", nombre: "Viajes", precio: 100, fecha: new Date("2023-12-02") },
  {
    id: "6",
    nombre: "Supermercado",
    precio: 200,
    fecha: new Date("2023-12-03"),
  },
  { id: "7", nombre: "Medicina", precio: 300, fecha: new Date("2023-11-01") },
  { id: "8", nombre: "Carbon", precio: 400, fecha: new Date("2023-10-01") },
];

export default function Gastos() {
  return (
    <div className="flex items-center flex-col flex-grow mt-12">
      <Input width="3/6" placeholder="Gasto" isAdd />
      <div className="w-4/5 mt-12">
        <GastosList gastos={DUMMY_GASTOS} />
      </div>
    </div>
  );
}
