import React, { useState } from "react";
import './form.module.css'

export function Form({ setShippingList }) {
  const [shippingItem, setShippingItem] = useState({ name: "", quantity: 0 });

  const handleSubmit = (event) => {
    event.preventDefault()
    const errorMessage = document.querySelector("p.error");

    if (shippingItem.name === "" || shippingItem.quantity == 0) {
      errorMessage.setAttribute("style", "color: red");
    } else {
      errorMessage.setAttribute("style", "color: #213547");
      setShippingList((prevList) => [...prevList, shippingItem])
    }
  };

  return (
    <div className="form">
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
      <input type="submit" value="Adicionar" data-testid="task_button"/>
    </form>
    <p className="error" data-testid="task_err">O item e a quantidade não podem estar vazios.</p>
    </div>
  );
}
