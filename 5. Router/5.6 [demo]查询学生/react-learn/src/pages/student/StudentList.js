import React, { useEffect, useState } from "react";
import StudentSearchBar from "../../components/StudentSearchBar";
import { getAllStudentsByPageAndLimit, getStudentsPageByKeywordAndSex } from "../../services/student";
import StudentTable from "../../components/StudentTable";
import { withRouter } from "react-router-dom";

const StudentTableWitchRouteInfo = withRouter(StudentTable);

function StudentList(props) {
  const [keyword, setKeyword] = useState("");
  const [sex, setSex] = useState("");
  const [page] = useState(1);
  const [limit] = useState(10);
  const [studentArr, setStudentArr] = useState([]);

  useEffect(() => {
    (async function () {
      const resp = await getStudentsPageByKeywordAndSex({ keyword, sex, page, limit });
      setStudentArr(resp.data);
    })();
  }, [keyword, sex, page, limit]);

  return (
    <div>
      <StudentSearchBar searchBySexAndKeyword={ (kw, gender) => {
        setKeyword(kw);
        setSex(gender);
      } } />
      <StudentTableWitchRouteInfo studentArr={ studentArr } page={ page } limit={ limit } />
    </div>
  );
}

export default StudentList;