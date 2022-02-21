import style from "./TodoListItems.module.css";
import { TodoItemsInterface } from "../Interface/Interface";
import { useState } from "react";

const TodoListItems = (props: TodoItemsInterface) => {
  const [ischecked, setIschecked] = useState(false);

  const checkedHandler = () => {
    setIschecked(!ischecked);
  };

  return (
    <>
      <div className={style['hero_items']}>
        <div className={`${ischecked ? style["todoItems_Checked"] : style.todoItems}`}>{props.title}</div>
        <button id="btn_check" className={`${ischecked ? style["btn_checked"] : style["button"]}`} onClick={checkedHandler}>
        </button>
      </div>
      
    </>
  );
};

export default TodoListItems;

