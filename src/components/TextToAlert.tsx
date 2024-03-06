import { useRef } from "react";

const TextToAlert = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    //Skickar ingen alert ifall input är tom (inputRef.current.value !== "")
    if (inputRef.current && inputRef.current.value !== "") {
      const inputValue = inputRef.current.value;
      alert(inputValue);
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={handleButtonClick}>Text to Alert</button>
    </div>
  );
};

export default TextToAlert;
