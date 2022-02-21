import style from "./AddBtn.module.css";

const AddBtn = () => {
  return (
    <>
      <div className={style["hero_add_btn"]}>
        <button className={style["btn_additem"]}>+</button>
      </div>
    </>
  );
};

export default AddBtn;
