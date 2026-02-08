import { useEffect, useState } from "react";
import { getAllStudentsByPageAndLimit } from "../services/student";

/**
 * 获取学生分页数据
 * @param page
 * @param limit
 * @returns {{
 *   total: number,
 *   data: Object
 * }}
 */
export default function usePageStudent(page = 1, limit = 10) {
  const [resp, setResp] = useState({});

  useEffect(() => {
    (async function () {
      const data = await getAllStudentsByPageAndLimit(page, limit);
      setResp(data);
    })();
  }, []);

  return resp;
}