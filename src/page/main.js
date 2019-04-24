import React, { Component } from "react";
import { hot } from "react-hot-loader";

function InheritanceInversionHOC(WrappedComponent) {
  return class NewComponent extends WrappedComponent {
    render() {
      const wrapperTree = super.render()
      const newProps = Object.assign({}, wrapperTree.props, {
        name: 'NewComponent'
      })

      const newTree = React.cloneElement(wrapperTree, newProps, wrapperTree.props.children)
      console.log(newTree)
      return newTree
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


export default hot(module)(InheritanceInversionHOC(Main));