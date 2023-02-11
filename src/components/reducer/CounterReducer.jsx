import { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "addOne":
      return state + action.value;
    case "reset":
      return initialState;
    case "decrement":
      return state - action.value;
    default:
      return state;
  }
};

const CounterReducer = () => {
  //   const [count, setCount] = useState(0);

  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <p>The Count {count}</p>
        <button onClick={() => dispatch({ type: "addOne", value: 1 })}>
          Add One
        </button>
        <button onClick={() => dispatch({ type: "addOne", value: 5 })}>
          Add Five
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          Decrement
        </button>
      </div>

      <div>
        <p>The Count {countTwo}</p>
        <button onClick={() => dispatchTwo({ type: "addOne", value: 1 })}>
          Add One
        </button>
        <button onClick={() => dispatchTwo({ type: "addOne", value: 5 })}>
          Add Five
        </button>
        <button onClick={() => dispatchTwo({ type: "reset" })}>Reset</button>
        <button onClick={() => dispatchTwo({ type: "decrement", value: 1 })}>
          Decrement
        </button>
      </div>
    </>
  );
};

export default CounterReducer;
