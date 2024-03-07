const GastosLista = ({ gastos }) => {
  return (
    <>
      <div className="mb-10">
        <p>Filtrar por gasto:</p>
        <p>Filtrar por fecha:</p>
      </div>
      <ul>
        {gastos.map((gasto) => {
          return (
            <li
              key={gasto.id}
              className="flex flex-row justify-between py-2 border-b-2"
            >
              <p>{gasto.nombre}</p>
              <p>{gasto.precio}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default GastosLista;
