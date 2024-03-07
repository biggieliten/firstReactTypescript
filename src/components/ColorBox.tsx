import { useRef, useState } from "react";

const ColorBox = () => {
  const [divColor, setDivColor] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const hexColorRegEx = /^#([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$/;

  const handleClick = () => {
    const hexColor = String(inputRef.current?.value);

    if (hexColorRegEx.test(hexColor)) {
      setDivColor(hexColor);
      inputRef.current!.value = "#";
    } else {
      alert("Invalid color");
    }
    console.log(hexColor);
  };

  return (
    <>
      <div>
        <label htmlFor="">Put Color</label>
        <input type="text" ref={inputRef} placeholder="#fff123" />
        <button onClick={handleClick}>Get color</button>
        <div
          style={{
            width: "50px ",
            height: "50px",
            backgroundColor: divColor,
            border: "1px solid black",
          }}
        ></div>
      </div>
    </>
  );
};

export default ColorBox;
