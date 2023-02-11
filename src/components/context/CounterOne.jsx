import { useCount, useCountAction } from "./CounterProvider";

const CounterOne = () => {
  const count = useCount();
  const dispatch = useCountAction();

  return (
    <div>
      <h1>Count is : {count}</h1>
      <button onClick={() => dispatch({ type: "add", value: 1 })}>
        Add One
      </button>
      <button onClick={() => dispatch({ type: "add", value: 5 })}>
        Add Five
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Minus One
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Minus Five
      </button>
    </div>
  );
};

export default CounterOne;
