import { useEffect, useRef, useState } from "react";

const FuntionalRef = () => {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState("");
  const inputRef = useRef();
  const preValue = useRef();
  const prevCount = useRef();
  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    preValue.current = inputValue;
  }, [inputValue]);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        onChange={changeHandler}
        value={inputValue}
        ref={inputRef}
      />
      <p>
        The Value is {inputValue} and it use to be {preValue.current}
      </p>
      <button onClick={() => setCount(Math.ceil(Math.random() * 100))}>
        generat random number
      </button>
      <h1> Random Number is : {count}</h1>
      <h1> Prev Random Number is : {prevCount.current}</h1>
    </div>
  );
};

export default FuntionalRef;
