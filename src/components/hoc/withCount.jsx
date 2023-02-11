import { useState } from "react";

const WithCount = (WrappedComponent, value) => {
  const UpdatedComponent = (props) => {
    const [count, setCount] = useState(0);
    const incrementHandler = () => {
      setCount(count + value);
    };
    return (
      <WrappedComponent
        count={count}
        incrementHandler={incrementHandler}
        {...props}
      />
    );
  };
  return UpdatedComponent;
};

export default WithCount;
