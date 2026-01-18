import PropTypes from "prop-types";

export default {
  children: PropTypes.node,
  // 多选框组、单选框组、下拉列表的数据源
  groupDatas: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ), // 整个groupDatas加不加必填，由使用者决定（更有通用性），里面的属性使用者控制不了，就在这里加上必填
  chooseDatas: PropTypes.arrayOf(PropTypes.string),
};
