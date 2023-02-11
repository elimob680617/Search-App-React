import WithCount from "../hoc/withCount";

const ClickCounter = ({ incrementHandler, count, name }) => {
  console.log(name);
  return (
    <div>
      <h1 onClick={incrementHandler}>{count} Times By Click</h1>
    </div>
  );
};

export default WithCount(ClickCounter, 5);
