import React, { useState } from "react"
import "./App.css"
import { Form } from "./components/Form/form"
import { ShippingList } from "./components/shippingList/shippingList";

function App() {
  const [shippingList, setShippingList] = useState([]);

  const handleRemoveItem = (index) => {
    const updatedShippingList = [...shippingList];
    updatedShippingList.splice(index, 1);
    setShippingList(updatedShippingList);
  };

  return (
    <div className="shop">
      <Form setShippingList={setShippingList}/>
      <ShippingList shippingList={shippingList} onRemoveItem={handleRemoveItem}/>
    </div>
  );
}

export default App;

