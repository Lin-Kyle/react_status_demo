import React, { Component } from "react";
import { hot } from "react-hot-loader";

function InheritanceInversionHOC(WrappedComponent) {
  return class NewComponent extends WrappedComponent {

    componentDidMount() {
      console.log('componentDidMount: ', this)
    }

    render() {
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

  render() {
    return (
      <div ref="child">Main</div>
    )
  }
}


export default hot(module)(InheritanceInversionHOC(Main));