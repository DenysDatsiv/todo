import React, { useContext } from "react";
import { Context } from "../context";
function FormOfTodo() {
  const { value, handleChange } = useContext(Context);
  const { handleClear } = useContext(Context);
  return (
    <div>
      <input
        type="text"
        required="Add your ToDo"
        value={value.todoITEM}
        onChange={(e) => handleChange("todoITEM", e.target.value)}
      ></input>
      <button type="submit" value="Add Form">
        Add
      </button>
      <button type="reset" onClick={() => handleClear()}>
        Clean
      </button>
    </div>
  );
}

export default FormOfTodo;
