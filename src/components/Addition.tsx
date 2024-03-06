import { useRef, useState } from "react";

const Addition = () => {
  const [firstValue, setFirstValue] = useState(0 || "");
  const [secondValue, setSecondValue] = useState(0 || "");
  const [sum, setSum] = useState(0 || "");
  //   const fstInputRef = useRef<HTMLInputElement>(null);
  //   const sndInputRef = useRef<HTMLInputElement>(null);
  //   let fstValue = fstInputRef.current?.value;
  //   const totalValue{ fstInputRef.current?.value + sndInputRef.current?.value}
  const handleClick = () => {
    if (Number(secondValue && Number(firstValue))) {
      setSum(String(Number(firstValue) + Number(secondValue)));
    } else if (String(secondValue) && String(firstValue)) {
      setSum(String(firstValue) + String(secondValue));
    }

    // String(firstValue) + String(secondValue)

    // setFirstValue(e.target.value.sndVdalue);
    // setSecondValue(Number(sndInputRef.current?.value));
    // const totalValue = firstValue + secondValue;
    // console.log(totalValue);
  };
  return (
    <>
      <div>
        <h1>Addition</h1>
        <input
          type="text"
          onChange={(e) => setFirstValue(String(e.target.value))}
        />
        <p> + </p>
        <input
          type="text"
          onChange={(e) => setSecondValue(String(e.target.value))}
        />
        <button onClick={handleClick}>Add</button>
        <p>{sum}</p>
      </div>
    </>
  );
};

export default Addition;
