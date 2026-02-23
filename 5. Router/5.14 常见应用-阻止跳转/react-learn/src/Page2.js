import React, { useState } from "react";

function Page2(props) {
  const [val, setVal] = useState("");
  if (val !== "") {
    props.history.block("切换会导致数据丢失，你确定要切换吗");
  }

  return (
    <div className="page page2">
      <textarea
        value={ val }
        onChange={ e => setVal(e.target.value) }
      />
    </div>
  );
}

export default Page2;