import { TodoItem } from "../../../../../../utils/type";

type InputEditTodoProps = {
  item: TodoItem;
  inputRef: React.RefObject<HTMLInputElement>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  setIsEditionMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export const InputEditTodo: React.FC<InputEditTodoProps> = ({
  item,
  inputRef,
  handleInputChange,
  handleInputKeyPress,
  setIsEditionMode,
}) => {
  return (
    <input
      style={{ paddingLeft: "60px" }}
      ref={inputRef}
      type="text"
      className="edit"
      value={item.description}
      onChange={handleInputChange}
      onKeyPress={handleInputKeyPress}
      onBlur={() => setIsEditionMode(false)}
    />
  );
};
