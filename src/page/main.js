import React, { Component } from "react";
import { hot } from "react-hot-loader";


function PropsProxyHOC(WrappedComponent) {
  return class NewComponent extends React.Component {
    render() {
      const newProps = {}
      typeof this.props.getInstance === "function" && (newProps.ref = this.props.getInstance)
      return <WrappedComponent {...this.props} {...newProps} />
    }
  }
}

class Main extends Component {
  render() {
    return (
      <div>Main</div>
    )
  }
}

const HOCComponent = PropsProxyHOC(Main)

class ParentComponent extends Component {
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