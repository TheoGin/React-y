import React from "react";
// import ValidationComp, {A, B} from "./ValidationComp";
import ValidationComp, {B} from "./ValidationComp";
import Comp from "./Comp";

function App(props) {
  return (
    <ValidationComp
      // anyVal={'abc'}
      num={123}
      arr={[1, "a", 3]}
      show
      onClick={() => {
        console.log('click');
      }}
      sym={Symbol("key")}
      Node={<Comp/>}
      Ele={<Comp/>}
      EleType={Comp}
      // instance={new A()}
      instance={new B()}
      sex={'男'}
      oneOfTypeValue={100}
      arrNum={[11, 22, 33]}
      objStr={{name: "tom", age: "18", addProp: " addPropValue"}}
      objShape={{
        name: "tom",
        age: 18,
        address: {
          province: "广东",
          city: "深圳",
          addProp: " addPropValue",
        },
      }}
      objExact={{name: "tom", age: 18}}
      score={0}
    />
  );
}

export default App;