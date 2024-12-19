import { useState } from "react";

function CartInput({ addNewItem }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <section>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      ></input>
      <button
        onClick={() => {
          if (inputValue.trim() !== "") {
            addNewItem(inputValue);
            setInputValue("");
          }
        }}
      >
        추가
      </button>
    </section>
  );
}
export default CartInput;
