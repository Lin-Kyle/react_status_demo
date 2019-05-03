import React, { Component } from "react";
import { hot } from "react-hot-loader";

function InheritanceInversionHOC(WrappedComponent) {
  return class NewComponent extends WrappedComponent {
    constructor() {
      super()
      this.state = {
        'a': 'b'
      }
    }

    componentDidMount() {
      console.log('componentDidMount: ', this)
    }

    render() {
      const wrapperTree = super.render()
      const newProps = {
        name: 'NewComponent'
      }
      const newTree = React.cloneElement(wrapperTree, newProps, wrapperTree.props.children)
      console.log('newTree: ', newTree)
      return newTree
    }
  }
}

// 被获取ref实例组件
class Main extends Component {
  render() {
    return (
      <div ref='child'>Main</div>
    )
  }
}


export default hot(module)(InheritanceInversionHOC(Main));