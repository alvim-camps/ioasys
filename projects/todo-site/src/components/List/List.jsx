import React from "react";
import './List.module.css';

export function List({ taskList, setTaskList }) {
  return (
    <table>
      <thead>
        <tr>
          <th>A Fazer:</th>
        </tr>
      </thead>
      <tbody>
        {taskList.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>
              <button onClick={(event) => {
                  event.preventDefault;
                  setTaskList((list) => list.slice(0, -1));
                }}>
                Apagar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
