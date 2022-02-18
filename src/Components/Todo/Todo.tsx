import TodoDate from "../Todo_Date_Month/TodoDate";
import TodoList from "../TodoList/TodoList";
import AddBtn from "../Todo-add-btn/AddBtn";
import style from "./Todo.module.css";

const Todo = () => {
  const todoItems = [
    { id: 1, title: "Buy new Sweatshirt" },
    { id: 2, title: "Buy old Sweatshirt" },
    { id: 3, title: "Buy Sweatshirt" },
  ];

  return (
    <>
      <div className={style["hero_main"]}>
        <TodoDate />
        <TodoList items = {todoItems} />
        <AddBtn />
      </div>
    </>
  );
};

export default Todo;
