import React from "react";


function Task(props) {
  console.log("Task render");
  return (
    <li className={ props.isFinish ? "finish" : "" }>第{ props.id }个：{ props.name }</li>
  );
}

// export default Task;
export default React.memo(Task);