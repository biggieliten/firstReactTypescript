import { useReducer, useRef } from "react";

const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
  ADD10: "add10",
  HALF: "half",
  INPUT: "input",
};

type State = { count: number };
type Action = { type: string; payload?: number };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { count: state.count + Number(action.payload) };
    case ACTION.DECREMENT:
      return { count: state.count - Number(action.payload) };
    case ACTION.RESET:
      return { count: action.payload! };
    case ACTION.ADD10:
      return { count: state.count + Number(action.payload) };
    case ACTION.HALF:
      return { count: Math.ceil(state.count / Number(action.payload)) };
    case ACTION.INPUT:
      return { count: state.count + Number(action.payload) };
    default:
      return state; //Bör egentligen vara ett Error under default:
  }
};

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <h2>Counter useReducer()</h2>
      <input type="text" ref={inputRef} />
      <button
        onClick={() =>
          inputRef.current &&
          dispatch({
            type: ACTION.INPUT,
            payload: Number(inputRef.current.value),
          })
        }
      >
        Add Value
      </button>
      <button onClick={() => dispatch({ type: ACTION.INCREMENT, payload: 1 })}>
        +
      </button>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: ACTION.DECREMENT, payload: 1 })}>
        -
      </button>
      <button onClick={() => dispatch({ type: ACTION.RESET, payload: 0 })}>
        Reset
      </button>
      <button onClick={() => dispatch({ type: ACTION.ADD10, payload: 10 })}>
        Add 10
      </button>
      <button onClick={() => dispatch({ type: ACTION.HALF, payload: 2 })}>
        Halvera
      </button>
    </div>
  );
};

export default CounterReducer;
