import React, { useDebugValue, useEffect, useState } from "react";

function useStudents() {
  const [students] = useState([]);
  // function useDebugValue<T>(value: T): void;
  // useDebugValue：用于将自定义Hook的关联数据显示到调试栏
  // 如果创建的自定义Hook通用性比较高，可以选择使用useDebugValue方便调试
  useDebugValue("学生集合");

  return students;
}

function App() {
  useState(0);
  useState("abc");

  useEffect(() => {
    console.log("useEffect");
  }, []);

  useStudents();

  return (
    <div>
    </div>
  );
}

export default App;

