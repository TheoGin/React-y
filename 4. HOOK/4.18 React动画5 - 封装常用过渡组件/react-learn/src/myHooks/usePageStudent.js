import { useEffect, useState } from "react";
import { getAllStudentsByPageAndLimit } from "../services/student";

/**
 * 获取学生分页数据
 * 根据页码和页容量获取学生数据，得到一个响应结果
 * 并且，当页码和页容量变化时，将重新获取学生数据
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
  }, [page, limit]);

  return resp;
}