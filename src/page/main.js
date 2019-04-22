import React, { Component } from "react";
import { hot } from "react-hot-loader";

function InheritanceInversionHOC(WrappedComponent) {
  return class NewComponent extends WrappedComponent {
    render() {
      console.log(this)
      return super.render()
    }
  }
}

// 被获取ref实例组件
class Main extends Component {
  constructor() {
    super()
    this.state = {
      name: 'WrappedComponent'
    }
  }

  componentDidMount() {
    console.log('WrappedComponent did mount')
  }

  render() {
    return (
      <div ref="child">Main</div>
    )
  }
}


export default hot(module)(InheritanceInversionHOC(Main));