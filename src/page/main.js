import React, { Component } from "react";
import { hot } from "react-hot-loader";

function PropsProxyHOC(WrappedComponent) {
  return class NewComponent extends React.Component {
    // 返回ref实例
    getWrappedInstance = () => {
      if (this.props.withRef) {
        return this.wrappedInstance;
      }
    }

    //设置ref实例
    setWrappedInstance = (ref) => {
      this.wrappedInstance = ref;
    }

    render() {
      const newProps = {}
      // 监听到有对应方法才赋值props实例
      this.props.withRef && (newProps.ref = this.setWrappedInstance)
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
  
  componentWillMount() {
    console.log('componentWillMount: ', this.refs.child)
  }
  
  componentDidMount() {
    console.log('componentDidMount: ', this.refs.child.getWrappedInstance())
  }

  render() {
    return (
      <HOCComponent ref="child" withRef />
    )
  }
}


export default hot(module)(ParentComponent);