const CategoirasList = ({ categorias }) => {
  return (
    <>
      {/* <div className="mb-10">
          <p>Buscar categoría</p>
        </div> */}
      <ul>
        {categorias.map((categoria) => {
          return (
            <li
              key={categoria.id}
              className="flex flex-row justify-between py-2 pl-4 border-2 m-4 rounded-lg hover:bg-lime-200 cursor-pointer"
            >
              <p>{categoria.nombre}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CategoirasList;
