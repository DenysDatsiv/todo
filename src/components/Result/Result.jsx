import React, { useContext } from "react";
import { Context } from "../context";
import styles from "./Result.module.css"

function Result() {
  const { deleteForm, todo, handleClickForm } = useContext(Context);

  return (
    <section >
      {todo.map((resultForm) => (
        <div key={resultForm.id} className={styles.result
        }  onClick={() => handleClickForm(resultForm)}>
          <p>{resultForm.todoITEM}</p>
          <button className={styles.btn_delete} onClick={() => deleteForm(resultForm.id)}>❌</button>
        </div>
      ))}
    </section>
  );
}
export default Result;
