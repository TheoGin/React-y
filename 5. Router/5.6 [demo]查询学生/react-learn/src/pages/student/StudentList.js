import React, { useEffect, useState } from "react";
import StudentSearchBar from "../../components/StudentSearchBar";
import { getStudentsPageByKeywordAndSex } from "../../services/student";
import StudentTable from "../../components/StudentTable";
import Pager from "../../components/common/Pager/Pager";
import qs from "query-string";
// import { withRouter } from "react-router-dom";

// const StudentTableWitchRouteInfo = withRouter(StudentTable);

/**
 * 获取服务器的响应结果
 * @param query 查询条件对象
 */
function useResponse(query) {
  const [resp, setResp] = useState({
    total: 0,
    data: [],
  });

  useEffect(() => {
    (async function () {
      // const resp = await getStudentsPageByKeywordAndSex(query);
      const resp = await getStudentsPageByKeywordAndSex({
        keyword: query.keyword,
        sex: query.sex,
        page: query.page,
        limit: query.limit,
      });
      setResp(resp);
    })();
    // }, [query]); // query 是对象，地址每次会发生变化，所以需要挨个写
  }, [query.keyword, query.sex, query.page, query.limit]);

  return resp;
}

/**
 * 该函数用于获取地址栏参数中提供的查询条件，返回一个对象
 * 如果某些条件在地址中缺失，该函数会使用默认值
 */
function getQuery(search) {
  const defaultSearch = {
    page: 1,
    limit: 10,
    keyword: "abc",
    sex: -1,
  };
  const query = qs.parse(search);
  // {keyword: 'abc', limit: '10', page: '3', sex: '-1'} 获取到的是 字符串，需要转为数字
  query.limit = +query.limit;
  query.page = +query.page;
  query.sex = +query.sex;
  return Object.assign({}, defaultSearch, query);
}

function changeLocation(query, history) {
  // console.log(query); // {page: 1, limit: 10, keyword: 'abc', sex: -1}
  // 根据条件对象，改变地址
  const search = qs.stringify(query);
  // console.log(search); // keyword=abc&limit=10&page=1&sex=-1

  // history.push(`/students?${ search }`);
  history.push(`?${ search }`); // 当前页面的路径可以省略 /students
}

function StudentList(props) {
  const query = getQuery(props.location.search);
  const resp = useResponse(query);

  return (
    <div>
      {/* searchBySexAndKeyword 可以取名为 onSearch */}
      <StudentSearchBar defaultValue={ {
        keyword: query.keyword,
        sex: query.sex,
      } } searchBySexAndKeyword={ (condition) => {
        changeLocation({
          ...query,
          ...condition,
          // 重新点查询需要回到第一页
          page: 1,
        }, props.history);
      } } />
      <StudentTable studentArr={ resp.data } />
      <Pager
        current={ query.page }
        total={ resp.total }
        limit={ query.limit }
        panelNumber={ 5 }
        onPageChange={ (newPage) => {
          changeLocation({
            ...query,
            page: newPage,
          }, props.history);
        } }
      />
    </div>
  );
}

export default StudentList;