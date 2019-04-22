import React, { Component } from "react";
import { hot } from "react-hot-loader";

function PropsProxyHOC(WrappedComponent) {
  return class NewComponent extends React.Component {
    render() {
      return this.props.isLoading ? <div>Loading...</div> : <WrappedComponent {...this.props} />
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
  constructor() {
    super()
    this.state = {
      isLoading: true
    }
  }

  render() {
    setTimeout(() => this.setState({ isLoading: false }), 2000)
    return (
      <HOCComponent isLoading={this.state.isLoading} />
    )
  }
}

export default hot(module)(ParentComponent);