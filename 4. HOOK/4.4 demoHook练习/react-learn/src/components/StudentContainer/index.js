import React, { useEffect, useState } from "react";
import StudentList from "../StudentList";
import { getStudentsByPageAndLimit } from "../../services/student";
import Pager from "../common/Pager/Pager";

/**
 * 用于提供数据，以及控制数据的变化
 */
function StudentContainer() {

  const [studentArr, setStudentArr] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(10);
  const [panelNumer, setPanelNumer] = useState(5);

  // 当页码和页容量发生变化时，将重新获取数据
  useEffect(() => {
    (async () => {
      const data = await getStudentsByPageAndLimit(currentPage, limit);
      setStudentArr(data.data);
      // console.log(data);
      setTotal(data.total);
    })();
  }, [currentPage, limit]);

  return (
    <div>
      <StudentList studentArr={ studentArr } />
      <Pager
        current={ currentPage }
        total={ total }
        limit={ limit }
        panelNumer={ panelNumer }
        onPageChange={ (newPage) => {
          // console.log('newPage', newPage);
          setCurrentPage(newPage);
        } }
      />
      <p>
        每页显示的条数：<input type="number" value={ limit } onChange={ (e) => {
        setLimit(parseInt(e.target.value));
      } } />
      </p>
      <p>
        最多显示的面板页码数：<input type="number" value={ panelNumer } onChange={ (e) => {
        setPanelNumer(parseInt(e.target.value));
      } } />
      </p>
    </div>
  );
}

export default StudentContainer;