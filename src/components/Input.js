import { useState } from "react";

const Input = ({ width, placeholder, isAdd }) => {
  const [value, setValue] = useState("");

  return (
    <div className={`${isAdd ? "flex justify-center" : ""} w-full`}>
      <input
        className={`w-${width} min-w-52 h-10 border-2 px-4 ${
          value.length > 0 ? "placeholder:px-4" : ""
        }`}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      {isAdd && <button className="text-4xl ml-2">+</button>}
    </div>
  );
};

export default Input;
