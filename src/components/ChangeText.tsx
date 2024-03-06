import { useState, useRef } from "react";

const ChangeText = () => {
  const [word, setWord] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    //Returnerar "word" när input inte är tomt, när input är tomt returneras inget ("inputRef.current.value !== "")
    if (inputRef.current && inputRef.current.value !== "") {
      console.log("current", inputRef.current);
      console.log("value", inputRef.current.value);
      setWord(inputRef.current.value);
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      setWord("");
    }
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Add</button>
      <button onClick={handleClear}>Clear</button>

      <p>{word}</p>
    </div>
  );
};

export default ChangeText;
