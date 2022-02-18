import Todo from "./Components/Todo/Todo";
import style from "./App.module.css";

function App() {
  return (
    <>
      <div className={style.App}>
        <Todo />
      </div>
    </>
  );
}
export default App;
