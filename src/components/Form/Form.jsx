import React, { useContext } from "react";
import { Context } from "../context";
import styles from "./Form.module.css"
function FormOfTodo() {
  const { value, handleChange } = useContext(Context);
  const { handleClear } = useContext(Context);
  return (
    <div className={styles.input_block}>
      <input
      className={styles.input_todo}
        type="text"
        required="Add your ToDo"
        value={value.todoITEM}
        onChange={(e) => handleChange("todoITEM", e.target.value)}
      ></input>
      <button     className={styles.btn_add} type="submit" value="Add Form">
        Add
      </button>
      <button type="reset"  className={styles.btn_clean} onClick={() => handleClear()}>
        Clean
      </button>
    </div>
  );
}

export default FormOfTodo;
