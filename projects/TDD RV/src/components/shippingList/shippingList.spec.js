import { render, fireEvent, screen } from "@testing-library/react";
import {ShippingList} from "./shippingList";

describe("Componente de Lista de Compras", () => {
  const mockShippingList = [
    { name: 'Item 1', quantity: 2 },
    { name: 'Item 2', quantity: 1 },
  ];
  
  const mockRemoveItem = jest.fn();
  
  test('renderizar itens e quantidades e botoes', () => {
    render(<ShippingList shippingList={mockShippingList} onRemoveItem={mockRemoveItem} />);
  
    const items = screen.getAllByTestId("task_name");
    expect(items.length).toBe(2);
  
    const quants = screen.getAllByTestId("task_qtd");
    expect(quants.length).toBe(2);

    const buttons = screen.getAllByTestId("task_button");
    expect(buttons.length).toBe(2);
  });
  
  test('calls onRemoveItem on button click', () => {
    render(<ShippingList shippingList={mockShippingList} onRemoveItem={mockRemoveItem} />);
  
    const button = screen.getAllByTestId("task_button");
    fireEvent.click(button[0]);
  
    expect(mockRemoveItem).toHaveBeenCalledTimes(1);
  });
})
