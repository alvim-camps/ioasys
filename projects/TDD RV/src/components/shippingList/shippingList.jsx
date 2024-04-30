import React from "react";

export function ShippingList({ shippingList, onRemoveItem }) {
  // ...

  const handleRemoveItem = (index) => {
    onRemoveItem(index);
  };

  return (
    <table>
      <tr>
        <th>Nome</th>
        <th>Quantidade</th>
        <th>Ações</th>
      </tr>
      <tbody>
        {shippingList.map((item, index) => (
          <tr key={index}>
            <td data-testid="task_name">{item.name}</td>
            <td data-testid="task_qtd">{item.quantity}</td>
            <td>
              <button data-testid="task_button" onClick={() => handleRemoveItem(index)}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

