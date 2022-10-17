import React, { useState, useCallback } from "react";
import { Context } from "./context";
import Result from "./Result/Result";
import FormOfTodo from "./Form/Form";
import styles from './Home.module.css'
const Home = () => {
  const [newId, setNewId] = useState(0);

  const [todo, setTodo] = useState([]);

  const [value, setValue] = useState({ todoITEM: "" });

  const handleChange = useCallback(
    (field, value) => {
      setValue({ ...value, [field]: value });
    },
    [value]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo((todo) => [...todo, { id: newId, ...value }]);
    setNewId((id) => ++id);
    handleClear();
  };

  const deleteForm = (id) => {
    const updateForms = [...todo].filter((todo) => todo.id !== id);
    setTodo(updateForms);
  };

  const handleClickForm = () => {
    JSON.parse(JSON.stringify(todo));
  };

  const handleClear = () => {
    setValue({todoITEM: ""});
  };
  return (
    <Context.Provider
      value={{
        deleteForm,
        todo: todo,
        handleClickForm,
        value,
        handleChange,
        handleClear,
      }}
    >
      <section className={styles.Form_block} >
          <form onSubmit={handleSubmit}>
            <FormOfTodo />
          </form>
          <Result />
      </section>
    </Context.Provider>
  );
};
export default Home;
