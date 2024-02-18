import { getByPlaceholderText, render } from "@testing-library/react";
import { App } from "../app";
import userEvent from "@testing-library/user-event";

describe("Todos", () => {
  it("renders the app", () => {
    const { getByText } = render(<App />);
    expect(getByText("todos")).toBeInTheDocument();
  });

  it("add new item from the input", () => {
    const { getByText, getByPlaceholderText } = render(<App />);

    const inputElement = getByPlaceholderText("What needs to be done?");
    userEvent.type(inputElement, "Buy groceries{enter}");
    expect(getByText("Buy groceries")).toBeInTheDocument();
    expect(getByText("1 item left!")).toBeInTheDocument();
  });

  it("check an item", () => {
    const { getByText, getByPlaceholderText } = render(<App />);

    const inputElement = getByPlaceholderText("What needs to be done?");
    userEvent.type(inputElement, "Buy groceries{enter}");
    expect(getByText("1 item left!")).toBeInTheDocument();

    const buttonCheck = getByText("Buy groceries")
      ?.closest("li")
      ?.querySelector("input");
    userEvent.click(buttonCheck as Element);
    expect(getByText("0 item left!")).toBeInTheDocument();
  });
});
