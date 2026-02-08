import React from "react";
import PropTypes from "prop-types";

/**
 * 学生列表的组件，纯展示组件，没有状态，从属性中获取数据用于显示
 */
function StudentList({ studentArr }) {

  const list = studentArr.map(student => <li
    key={ student.id }>{ student.name }, { student.sex === 1 ? "男" : "女" }</li>);

  return (
    <ul>
      { list }
    </ul>
  );
}

StudentList.defaultProps = {
  studentArr: [],
};

StudentList.propTypes = {
  studentArr: PropTypes.array.isRequired, // 可以用 PropTypes.arrayOf 定义对象每个属性
};

export default StudentList;