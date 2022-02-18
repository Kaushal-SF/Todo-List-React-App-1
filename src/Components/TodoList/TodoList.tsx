import style from "./TodoList.module.css";

interface TodoItems {
  id: number;
  title: string;
}

const TodoList: React.FC<{ items: TodoItems[] }> = (props) => {
  return (
    <>
      <div className={style["hero_todo_list"]}>
        {props.items.map((data) => {
          return (
              <>
            
              <p className={style.para}>{data.title}</p>
            </>
          );
          console.log(data);
        })}
      </div>
    </>
  );
};

export default TodoList;
