import React, { Component } from "react";
import { hot } from "react-hot-loader";

function PropsProxyHOC(WrappedComponent) {
  return class NewComponent extends React.Component {
    render() {
      const newProps = {}
      // 监听到又对应方法才生成props实例
      typeof this.props.getInstance === "function" && (newProps.ref = this.props.getInstance)
      return <WrappedComponent {...this.props} {...newProps} />
    }
  }
}

// 被获取ref实例组件
class Main extends Component {
  render() {
    return (
      <div>Main</div>
    )
  }
}

const HOCComponent = PropsProxyHOC(Main)

class ParentComponent extends Component {
  // 提供给高阶组件调用生成实例
  getInstance(ref) {
    this.wrappedInstance = ref;
    console.log(ref)
  }

  render() {
    return (
      <HOCComponent getInstance={this.getInstance.bind(this)} />
    )
  }
}

export default hot(module)(ParentComponent);