import '@testing-library/jest-dom'
import { render, fireEvent, screen} from "@testing-library/react";
import { Form } from "./form";
import React from 'react';
import App from '../../App'

describe("Componente de formulario", () => {
    test("renderizar input e button", () => {
        render(<Form/>)

        const input = screen.getByTestId("task_input");
        const quant = screen.getByTestId("task_quant");
        const button = screen.getByTestId("task_button");

        expect(input);
        expect(quant);
        expect(button);
    });

    test("deve exibir uma mensagem de erro se o nome do item ou a quantidade estiver vazia", () => {
        render(<Form/>)

        const errorMessage = screen.queryByTestId("task_err");

        expect(errorMessage).toBeInTheDocument();
        expect(errorMessage).toHaveTextContent("O item e a quantidade não podem estar vazios.");
    });

    test("deve atualizar a lista de itens quando um novo item for adicionado", () => {
        render(<App />); // Render the App component

        // Simulate user input
        fireEvent.change(screen.getByTestId("task_input"), { target: { value: "Item 1" } });
        fireEvent.change(screen.getByTestId("task_quant"), { target: { value: 1 } });

        // Simulate form submission
        fireEvent.submit(screen.getByTestId("task_form"));

        // Assert shipping list update
        expect(screen.getAllByTestId("task_name")).toHaveLength(1); // Check for added item
        expect(screen.getByText(/Item 1/i)).toBeInTheDocument();
    })
})
