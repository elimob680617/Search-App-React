import WithCount from "../hoc/withCount";

const HoverClick = ({ incrementHandler, count, name }) => {
  console.log(name);
  return (
    <div>
      <h1 onMouseOver={incrementHandler}>{count} Times By Hover</h1>
    </div>
  );
};

export default WithCount(HoverClick, 10);
