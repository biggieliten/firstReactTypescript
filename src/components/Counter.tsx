import { useState } from "react";

function Counter() {
  //   type InputType = {
  //     e: React.ChangeEventHandler<HTMLInputElement>;

  //   };
  const [newCount, setNewCount] = useState(0);
  const [count, setCount] = useState(0);

  const handleClickChange = () => {
    setCount(newCount);
  };

  const handleChangeRemove: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setNewCount(Number(e.target.value));
  };

  return (
    <div>
      {/* <input type="text" value={count} onChange={handleChange} /> */}
      <input type="text" value={newCount} onChange={handleChangeRemove} />
      <button onClick={handleClickChange}>Add</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default Counter;
