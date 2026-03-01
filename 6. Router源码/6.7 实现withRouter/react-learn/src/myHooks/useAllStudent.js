import { useEffect, useState } from "react";
import { getAllStudents } from "../services/student";

/**
 * 获取学生所有数据
 * @returns {*[]}
 */
export default function useAllStudent() {
  const [studentArr, setStudentArr] = useState([]);
  useEffect(() => {
    (async function () {
      const data = await getAllStudents();
      setStudentArr(data);
    })();
  }, []);

  return studentArr;
}