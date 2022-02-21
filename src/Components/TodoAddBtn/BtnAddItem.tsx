import style from "./BtnAddItem.module.css";

const BtnAddItem = () => {
  return (
    <>
      <div className={style["hero_add_btn"]}>
        <button className={style["btn_additem"]}>+</button>
      </div>
    </>
  );
};

export default BtnAddItem;
