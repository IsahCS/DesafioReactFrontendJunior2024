import React, { useEffect, useRef, useState } from "react";
import { TodoItem as TodoItemType } from "../../../../../utils/type";
import { InputEditTodo } from "./InputEditTodo";

type TodoItemProps = {
  item: TodoItemType;
  onToggleCompletion: (id: number) => void;
  onDeleteItem: (id: number) => void;
  onEditItem: (id: number, description: string) => void;
};

export const TodoItem: React.FC<TodoItemProps> = ({
  item,
  onToggleCompletion,
  onDeleteItem,
  onEditItem,
}) => {
  const [itemInput, setItemInput] = useState(item);
  const [isEditionMode, setIsEditionMode] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditionMode && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditionMode]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemInput({ ...itemInput, description: e.target.value });
  };

  const handleInputKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onEditItem(item.id, itemInput.description);
      setIsEditionMode(false);
    }
  };

  return (
    <div
      className="view"
      tabIndex={0}
      onDoubleClick={() => setIsEditionMode(true)}
    >
      <input
        className="toggle"
        type="checkbox"
        data-testid="todo-item-toggle"
        onClick={() => onToggleCompletion(item.id)}
      ></input>
      {!isEditionMode && (
        <label data-testid="todo-item-label">{item.description}</label>
      )}
      {isEditionMode && (
        <InputEditTodo
          item={itemInput}
          inputRef={inputRef}
          handleInputChange={handleInputChange}
          handleInputKeyPress={handleInputKeyPress}
          setIsEditionMode={setIsEditionMode}
        />
      )}
      {!isEditionMode && (
        <button
          className="destroy destroy-button"
          data-testid="todo-item-button"
          onClick={() => onDeleteItem(item.id)}
        ></button>
      )}
    </div>
  );
};
