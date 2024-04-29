import React, { useState } from "react";
import styles from './Insert.module.css';
import { Input } from "./Input";

export function Form({ setTaskList }) {
  const [taskItem, setTaskItem] = useState({name: ""});

  const handleSubmit = (event) => {
    console.log(12)
    event.preventDefault()
    if (taskItem.name === "") {
      const errorMessage = document.querySelector("p.error");
      errorMessage.setAttribute("style", "color: red");
    } else {
        setTaskList((prevList) => [...prevList, taskItem])
    }
  };

  return (
    <>
        <form onSubmit={handleSubmit} className={styles.form}>
            <Input label='Nome da Tarefa:' id="task-name" type='text' setTaskItem={setTaskItem} taskItem={taskItem} value={taskItem.name}/>
            <Input type='submit' value="Adicionar">Adicionar</Input>
        </form>
        <p className={styles.err}>O formulario não pode ser enviado sem nada.</p>
    </>
  );
}