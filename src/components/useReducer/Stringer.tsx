import { useReducer, useRef } from "react";

const ACTION = {
  ADD_STRING: "addsString",
  RESET_STRING: "resetString",
};

type State = { string: string };
type Action = { type: string; payload?: string };

const stringer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTION.ADD_STRING:
      return { string: state.string + " " + String(action.payload) };
    case ACTION.RESET_STRING:
      return { string: (state.string = "") };
    default:
      return state;
  }
};

const Stringer = () => {
  const [state, dispatch] = useReducer(stringer, { string: "Robin" });
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      Add string
      <input type="" ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current &&
            dispatch({
              type: ACTION.ADD_STRING,
              payload: String(inputRef.current.value),
            });
          inputRef.current?.focus();
        }}
      >
        Add
      </button>
      <button onClick={() => dispatch({ type: ACTION.RESET_STRING })}>
        Reset
      </button>
      <p>{state.string}</p>
    </div>
  );
};

export default Stringer;
