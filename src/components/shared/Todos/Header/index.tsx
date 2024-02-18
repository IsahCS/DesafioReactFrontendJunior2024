// Header.js

import React, { useState } from "react";
import "./index.css";

export const Header = ({
  onAddItem,
}: {
  onAddItem: (item: string) => void;
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && inputValue.length > 1) {
      onAddItem(inputValue);
      setInputValue("");
    }
  };

  return (
    <header>
      <h1>todos</h1>
      <div className="input-container">
        <input
          className="new-todo"
          id="todo-input"
          type="text"
          data-testid="text-input"
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleInputKeyPress}
          autoFocus
        />
        <label className="visually-hidden" htmlFor="todo-input">
          New Todo Input
        </label>
      </div>
    </header>
  );
};
