import React, { useState } from "react";

export function Form({ setShippingList }) {
  const [shippingItem, setShippingItem] = useState({ name: "", quantity: 0 });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form input
    if (shippingItem.name === "" || shippingItem.quantity === 0) {
      const errorMessage = screen.getByTestId("task_err"); 
      errorMessage.classList.add("error-active");
      return;
    }

    setShippingList((prevList) => [...prevList, shippingItem]);
    setShippingItem({ name: "", quantity: 0 });
  };

  return (
    <>
      <form onSubmit={handleSubmit} data-testid="task_form">
        <label htmlFor="shipping-item-name">Nome do Item:</label>
        <input
          data-testid="task_input"
          type="text"
          id="shipping-item-name"
          value={shippingItem.name}
          onChange={(event) => setShippingItem({ ...shippingItem, name: event.target.value })}
        />
        <label htmlFor="shipping-item-quantity">Quantidade:</label>
        <input
          data-testid="task_quant"
          type="number"
          id="shipping-item-quantity"
          value={shippingItem.quantity}
          onChange={(event) => setShippingItem({ ...shippingItem, quantity: event.target.value })}
        />
        <input type="submit" value="Adicionar" data-testid="task_button" />
      </form>
      <p className="error" data-testid="task_err">O item e a quantidade não podem estar vazios.</p>
    </>
  );
}
