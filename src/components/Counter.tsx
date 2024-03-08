import { useState, useReducer } from "react";

const ACTION = { INCREMENT: "increment", DECREMENT: "decrement" };

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { count: state.count + 1 };
    case ACTION.DECREMENT:
      return { count: state.count - 1 };
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  //   type InputType = {
  //     e: React.ChangeEventHandler<HTMLInputElement>;

  //   };
  //   const [newCount, setNewCount] = useState(0);
  //   const [count, setCount] = useState(0);
  //   const handleClickChange = () => {
  //     setCount(newCount);
  //   };

  //   const handleChangeRemove: React.ChangeEventHandler<HTMLInputElement> = (
  //     e
  //   ) => {
  //     setNewCount(Number(e.target.value));
  //   };

  return (
    <div>
      <input type="text" name="" id="" value={state.count} />

      <button onClick={() => dispatch({ type: ACTION.INCREMENT })}>+</button>
      <button onClick={() => dispatch({ type: ACTION.DECREMENT })}>-</button>
      {/* <p>{state}</p> */}
    </div>
  );
  {
    /* <input type="text" value={count} onChange={handleChange} /> */
  }
  {
    /* <input type="text" value={newCount} onChange={handleChangeRemove} /> */
  }
  {
    /* //   <button onClick={() => setCount(count + 1)}>+</button>
	  //   <p>{count}</p>
    //   <button onClick={() => setCount(count - 1)}>-</button> */
  }
  {
    /* </div> */
  }
}

export default Counter;
