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

  it("remove an item", () => {
    const { getByText, getByPlaceholderText, queryAllByTestId } = render(
      <App />
    );

    const inputElement = getByPlaceholderText("What needs to be done?");
    userEvent.type(inputElement, "Buy groceries{enter}");
    expect(getByText("Buy groceries")).toBeInTheDocument();

    const buttonRemove = getByText("Buy groceries")
      ?.closest("li")
      ?.querySelector("button");
    userEvent.click(buttonRemove as Element);
    expect(queryAllByTestId("todo-item-button").length).toBe(0);
  });

  it("clear completed items", () => {
    const { getByText, getByPlaceholderText, queryAllByTestId } = render(
      <App />
    );

    const inputElement = getByPlaceholderText("What needs to be done?");
    userEvent.type(inputElement, "Buy groceries{enter}");
    expect(getByText("Buy groceries")).toBeInTheDocument();

    const buttonCheck = getByText("Buy groceries")
      ?.closest("li")
      ?.querySelector("input");
    userEvent.click(buttonCheck as Element);

    const buttonClearCompleted = getByText("Buy groceries")
      ?.closest("li")
      ?.querySelector("button");
    userEvent.click(buttonClearCompleted as Element);
    expect(queryAllByTestId("clear-completed").length).toBe(0);
  });

  it("filter items", () => {
    const { getByText, getByPlaceholderText, getByTestId, queryAllByText } =
      render(<App />);

    const inputElement = getByPlaceholderText("What needs to be done?");
    userEvent.type(inputElement, "Buy groceries{enter}");
    userEvent.type(inputElement, "Wash the car{enter}");
    userEvent.type(inputElement, "Walk the dog{enter}");
    expect(getByText("Buy groceries")).toBeInTheDocument();
    expect(getByText("Wash the car")).toBeInTheDocument();
    expect(getByText("Walk the dog")).toBeInTheDocument();

    const buttonCheck = getByText("Buy groceries")
      ?.closest("li")
      ?.querySelector("input");
    userEvent.click(buttonCheck as Element);

    const buttonFilterActive =
      getByTestId("footer-navigation").querySelector('[href="#/active"]');
    userEvent.click(buttonFilterActive as Element);
    expect(getByText("Wash the car")).toBeInTheDocument();
    expect(getByText("Walk the dog")).toBeInTheDocument();
    expect(queryAllByText("Buy groceries").length).toBe(0);

    const buttonFilterCompleted = getByTestId(
      "footer-navigation"
    ).querySelector('[href="#/completed"]');
    userEvent.click(buttonFilterCompleted as Element);
    expect(getByText("Buy groceries")).toBeInTheDocument();
    expect(queryAllByText("Wash the car").length).toBe(0);
    expect(queryAllByText("Walk the dog").length).toBe(0);

    const buttonFilterAll =
      getByTestId("footer-navigation").querySelector('[href="#/all"]');
    userEvent.click(buttonFilterAll as Element);
    expect(getByText("Buy groceries")).toBeInTheDocument();
    expect(getByText("Wash the car")).toBeInTheDocument();
    expect(getByText("Walk the dog")).toBeInTheDocument();
  });

  it("toggle all items", () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(<App />);

    const inputElement = getByPlaceholderText("What needs to be done?");
    userEvent.type(inputElement, "Buy groceries{enter}");
    userEvent.type(inputElement, "Wash the car{enter}");
    userEvent.type(inputElement, "Walk the dog{enter}");
    expect(getByText("3 item left!")).toBeInTheDocument();

    const buttonToggleAll = getByTestId("toggle-all");
    userEvent.click(buttonToggleAll as Element);
    expect(getByText("0 item left!")).toBeInTheDocument();
  });

  it("toggle all items back", () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(<App />);

    const inputElement = getByPlaceholderText("What needs to be done?");
    userEvent.type(inputElement, "Buy groceries{enter}");
    userEvent.type(inputElement, "Wash the car{enter}");
    userEvent.type(inputElement, "Walk the dog{enter}");
    expect(getByText("3 item left!")).toBeInTheDocument();

    const buttonToggleAll = getByTestId("toggle-all");
    userEvent.click(buttonToggleAll as Element);
    expect(getByText("0 item left!")).toBeInTheDocument();

    userEvent.click(buttonToggleAll as Element);
    expect(getByText("3 item left!")).toBeInTheDocument();
  });
});
