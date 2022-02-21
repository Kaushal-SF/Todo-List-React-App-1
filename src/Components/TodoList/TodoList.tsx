import style from "./TodoList.module.css";
import TodoItems from "../TodoListItems/TodoItems";
import {TodoItemsInterface} from "../Interface/Interface";



const TodoList: React.FC<{ items: TodoItemsInterface[] }> = (props) => {
  return (
    <>
      <div className={style["hero_todo_list"]}>
        {props.items.map((data) => {
          return (
             <TodoItems key={data.id} title={data.title}/>
          );
        })}
      </div>
    </>
  );
};

export default TodoList;
