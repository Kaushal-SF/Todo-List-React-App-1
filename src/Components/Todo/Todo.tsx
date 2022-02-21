import { Component } from "react";
import TodoDate from "../TodoDate/TodoDate";
import TodoList from "../TodoList/TodoList";
import AddBtn from "../TodoAddBtn/AddBtn";
import style from "./Todo.module.css";

const todoItems = [
  { id: 1, title: "Buy new Sweatshirt" },
  { id: 2, title: "Buy old Sweatshirt" },
  { id: 3, title: "Read ana article" },
  { id: 4, title: "watch 'sherlock'" },
  { id: 5, title: "Go for a walk" },
  { id: 6, title: "Buy Sweatshirt" },
  { id: 7, title: "watch 'sherlock'" },
  { id: 8, title: "Read ana article" },
  { id: 9, title: "Go for a walk" },
];

// class component 
class Todo extends Component {
  render() {
    return (
      <>
        <div className={style["hero_main"]}>
          <TodoDate />
          <TodoList items={todoItems} />

          <AddBtn />
        </div>
      </>
    );
  }
}

export default Todo;
