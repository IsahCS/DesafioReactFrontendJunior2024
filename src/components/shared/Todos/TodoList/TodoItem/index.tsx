import { useState } from "react";
import { TodoItem as TodoItemType } from "../../../../../utils/type";

type TodoItemProps = {
  item: TodoItemType;
  onToggleCompletion: (id: number) => void;
  onDeleteItem: (id: number) => void;
};

export const TodoItem: React.FC<TodoItemProps> = ({
  item,
  onToggleCompletion,
  onDeleteItem,
}) => {
  const [isEditionMode, setIsEditionMode] = useState(false);

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
        <input
          type="text"
          value={item.description}
          onChange={(e) => {
            item.description = e.target.value;
          }}
        />
      )}
      <button
        className="destroy destroy-button"
        data-testid="todo-item-button"
        onClick={() => onDeleteItem(item.id)}
      ></button>
    </div>
  );
};
