import { useRef, useState } from "react";

const List = () => {
  const [list, setList] = useState<string[]>([]);
  const [textInput, setTextInput] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const addToList = () => {
    setList([...list, textInput]);
    setTextInput("");
    inputRef.current?.focus();
    if (textInput === "") {
      alert("Please enter a value");
    }
  };

  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        ref={inputRef}
        value={textInput}
        onChange={(e) => {
          setTextInput(e.target.value);
        }}
      />
      <button onClick={addToList}>Add to list</button>
      <ul>
        {list.map((text, index) => {
          return <li key={index}>{text}</li>;
        })}

        {/* {textInput.map((text, index) => {
          <li>{text}</li>)}} */}
      </ul>
    </div>
  );
};

export default List;
