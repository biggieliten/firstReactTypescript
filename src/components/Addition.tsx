import { useRef, useState } from "react";

const Addition = () => {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [sum, setSum] = useState(0);
  const fstInputRef = useRef<HTMLInputElement>(null);
  const sndInputRef = useRef<HTMLInputElement>(null);
  //   let fstValue = fstInputRef.current?.value;
  //   const totalValue{ fstInputRef.current?.value + sndInputRef.current?.value}

  const handleClick = () => {
    setSum(Number(firstValue) + Number(secondValue));
    setFirstValue("");
    setSecondValue("");
  };

  return (
    <div>
      <h1>Addition</h1>
      <input
        type="number"
        value={firstValue}
        ref={fstInputRef}
        onChange={(e) => setFirstValue(e.target.value)}
      />
      <p> + </p>
      <input
        type="number"
        value={secondValue}
        ref={sndInputRef}
        onChange={(e) => setSecondValue(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
      <p>{sum}</p>
    </div>
  );
};

export default Addition;
