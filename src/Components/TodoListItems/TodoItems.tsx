import "./TodoItems.css";
import { TodoItemsInterface } from "../Interface/Interface";
import { useState } from "react";

const TodoItems = (props: TodoItemsInterface) => {
  const [ischecked, setIschecked] = useState(false);

  const checkedHandler = () => {
    setIschecked(!ischecked);
  };

  return (
    <>
      <div className="hero_items">
        <div className={ischecked ? "todoItems_Checked" : "todoItems"}>{props.title}</div>
        <button id="btn_check" className={ischecked ? "btn_checked" : "button"} onClick={checkedHandler}>
        </button>
      </div>
    </>
  );
};

export default TodoItems;

