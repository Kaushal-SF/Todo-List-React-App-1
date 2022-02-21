import { Component } from "react";
import Todo from "./Components/Todo/Todo";
import style from "./App.module.css";

class App extends Component {
  render() {
    return (
      <>
        <div className={style.App}>
          <Todo />
        </div>
      </>
    );
  }
}

export default App;
