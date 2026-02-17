import React, { useEffect, useState } from "react";
import StudentSearchBar from "../../components/StudentSearchBar";
import { getStudentsPageByKeywordAndSex } from "../../services/student";
import StudentTable from "../../components/StudentTable";
import { withRouter } from "react-router-dom";
import Pager from "../../components/common/Pager/Pager";

const StudentTableWitchRouteInfo = withRouter(StudentTable);

function StudentList(props) {
  const [keyword, setKeyword] = useState("");
  const [sex, setSex] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [studentArr, setStudentArr] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    (async function () {
      const resp = await getStudentsPageByKeywordAndSex({ keyword, sex, page, limit });
      setStudentArr(resp.data);
      setTotal(resp.total);
    })();
  }, [keyword, sex, page, limit]);

  return (
    <div>
      <StudentSearchBar searchBySexAndKeyword={ (kw, gender) => {
        setKeyword(kw);
        setSex(gender);
      } } />
      <StudentTableWitchRouteInfo studentArr={ studentArr } page={ page } limit={ limit } />
      <Pager current={ page } total={ total } limit={ limit } panelNumber={ 5 } onPageChange={ (newPage) => {
        setPage(newPage);
      } } />
    </div>
  );
}

export default StudentList;