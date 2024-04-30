import React, { useState } from "react"
import "./App.css"
import { Form } from "./components/Form/form"
import { ShippingList } from "./components/shippingList/shippingList";

function App() {
  const [shippingList, setShippingList] = useState([]);

  const handleRemoveItem = (index) => {
    const updatedShippingList = [...shippingList]; // Cria uma cópia da lista
    updatedShippingList.splice(index, 1); // Remove o item no índice especificado
    setShippingList((updatedShippingList)); // Atualiza o estado com a lista modificada
  };

  return (
    <div className="shop">
      <Form setShippingList={setShippingList}/>
      <ShippingList shippingList={shippingList} onRemoveItem={handleRemoveItem}/>
    </div>
  );
}

export default App;

