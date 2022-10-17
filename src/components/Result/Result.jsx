import React, { useContext } from "react";
import { Context } from "../context";

function Result() {
  const { deleteForm, todo, handleClickForm } = useContext(Context);

  return (
    <section >
      {todo.map((resultForm) => (
        <div key={resultForm.id}  onClick={() => handleClickForm(resultForm)}>
          <p>{resultForm.todoITEM}</p>
          <button onClick={() => deleteForm(resultForm.id)}>Delete</button>
        </div>
      ))}
    </section>
  );
}
export default Result;
