import React, { useEffect, useState } from "react";
import StudentList from "../StudentList";
import { fetchStudent } from "../../services/student";
import Pager from "../common/Pager/Pager";

function StudentContainer(props) {

  const [studentArr, setStudentArr] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 10;
  const panelNumer = 5;

  useEffect(() => {
    (async () => {
      const data = await fetchStudent(currentPage, limit);
      setStudentArr(data.data);
      setTotal(data.total);
      // console.log(data);
    })();
  }, [currentPage]);

  return (
    <div>
      <StudentList studentArr={ studentArr } />
      <Pager
        current={ currentPage }
        total={ total }
        limit={ limit }
        panelNumer={ panelNumer }
        onPageChange={ (targetPage) => {
          // console.log('targetPage', targetPage);
          setCurrentPage(targetPage);
        } }
      />
    </div>
  );
}

export default StudentContainer;