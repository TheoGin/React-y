import React, {Component} from "react";
import PropTypes from "prop-types";

export class A {

}

export class B extends A {

}


class ValidationComp extends Component {
  // 先混合属性
  static defaultProps = {
    anyVal: 1,
  };

  // 再调用相应的函数进行验证（PropTypes.array、PropTypes.array.isRequired都是函数）
  // static propsType = {
  static propTypes = {
    anyVal: PropTypes.any.isRequired, // 1. 可以设置必填   2. 阵型保持整齐（所有属性都在该对象中）
    arr: PropTypes.array.isRequired, // 数组中的类型任意，与 PropTypes.arrayOf(PropTypes.XXX) 区分
    show: PropTypes.bool.isRequired,  // 必须是一个bool属性,并且必填
    onClick: PropTypes.func,  // onClick必须是一个函数
    // 如果没传 Warning: Failed prop type: The prop `num` is marked as required in `ValidationComp`, but its value is `undefined`.
    num: PropTypes.number.isRequired, // 属性必须是一个数字类型,并且必填
    sym: PropTypes.symbol, // 符号类型

    Node: PropTypes.node.isRequired, // 必填，而且必须是一个可以被渲染的内容，字符串、数字、React元素
    Ele: PropTypes.element, // 必须是一个React元素
    EleType: PropTypes.elementType, // 必须是一个组件类型
    instance: PropTypes.instanceOf(A), // 必须是指定构造函数 A 的实例
    sex: PropTypes.oneOf(["男", "女"]),  //属性必须是数组当中的一个
    oneOfTypeValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // 属性类型必须是数组中的其中一个
    arrNum: PropTypes.arrayOf(PropTypes.number).isRequired, // 数组的每一项必须满足类型要求
    objStr: PropTypes.objectOf(PropTypes.string), // 每一个属性必须满足类型要求
    objShape: PropTypes.shape({ // 属性必须满足该对象的要求
      name: PropTypes.string.isRequired, // name必须是一个字符串，必填
      age: PropTypes.number, // age必须是一个数字
      address: PropTypes.shape({
        province: PropTypes.string,
        city: PropTypes.string,
      }),
    }),
    objExact: PropTypes.exact({
      name: PropTypes.string,
      age: PropTypes.number,
      // 传递的对象不能添加额外的属性
    }),
    score: function (props, propName, componentName) { // 给使用开发者的验证
      console.log(props, propName, componentName); // {num: 123, arr: Array(3), show: true, sym: Symbol(key), onClick: ƒ, …… } 'score' 'ValidationComp'
      const val = props[propName];

      // 必填
      // if (!val) { // 错误写法，因为 数字是0、空字符串也为false
      if (val === undefined || val === null) {
        return new Error(`The prop [${propName}] is marked as required in [${componentName}], but its value is [${val}].`);
        // Warning: Failed prop type: The prop [score] is marked as required in [ValidationComp], but its value is [null].
      }

      // 该属性必须是一个数字
      if (typeof val !== "number") {
        return new Error(`Invalid prop [${propName}] of type [${typeof val}] supplied to [${componentName}], expected [number].`);
        // Warning: Failed prop type: Invalid prop [score] of type [string] supplied to [ValidationComp], expected [number].
      }

      // 并且取值范围是0~100
      if (val < 0 || val > 100) {
        return new Error(`Invalid prop [${propName}] of value [${val}] supplied to [${componentName}], the range of ${propName} must be between 0 and 100.`);
        // Warning: Failed prop type: Invalid prop [score] of value [123] supplied to [ValidationComp], the range of score must be between 0 and 100.
      }

      /*
      // PropTypes.number(true, props, propName, componentName);
      // Warning: Failed prop type: Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types
      const res = PropTypes.checkPropTypes({ [propName]: PropTypes.number.isRequired }, props, propName, componentName);
      // Warning: Failed score type: Invalid score `score` of type `string` supplied to `ValidationComp`, expected `number`. Error Component Stack
      // Warning: Failed score type: The score `score` is marked as required in `ValidationComp`, but its value is `null`. Error Component Stack
      // PropTypes.checkPropTypes 只会抛出错误，并没有返回值，所以不好用，还是得自己实现 必填、非空 判断
      console.log(res); // undefined
      */
    },
  };

  render() {
    // PropTypes.number、PropTypes.array.isRequired都是函数
    console.log(PropTypes.number);  // function checkType(isRequired, props, propName, componentName, location, propFullName, secret) { ... }
    console.log(PropTypes.array.isRequired); // function checkType(isRequired, props, propName, componentName, location, propFullName, secret) { ... }
    const EleType = this.props.EleType;
    return (
      <div>
        <p>anyVal: {this.props.anyVal}</p>
        <p>arr: {this.props.arr}</p>
        <p>show: {+this.props.show}</p>
        <p onClick={this.props.onClick}>点击触发 onClick</p>
        <p>num: {this.props.num}</p>
        <p>sym: {this.props.sym.toString()}</p>
        <p>node: {this.props.Node}</p>
        <p>Ele: {this.props.Ele}</p>
        <p>EleType: <EleType/></p>
        <p>sex: {this.props.sex}</p>
        <p>oneOfTypeValue: {this.props.oneOfTypeValue}px</p>
        <p>arrNum: {this.props.arrNum}</p>
        <p>objStr info: {Object.values(this.props.objStr).join(", ")}</p>
        <p>objShape info: {this.props.objShape.name + "-" + Object.values(this.props.objShape.address)}</p>
        <p>objStr info: {Object.values(this.props.objExact).join(", ")}</p>
        <p>score: {this.props.score}</p>
      </div>
    );
  }
}

export default ValidationComp;

/*
anyVal: 1

arr: 1a3

show: 1

点击触发 onClick

num: 123

sym: Symbol(key)

node: Comp

Ele: Comp

EleType: Comp

sex: 男

oneOfTypeValue: 100px

arrNum: 112233

objStr info: tom, 18, addPropValue

objShape info: tom-广东,深圳, addPropValue

objStr info: tom, 18

score: 0
* */