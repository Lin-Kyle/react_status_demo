import React, { Component } from "react";
import { hot } from "react-hot-loader";

function PropsProxyHOC(WrappedComponent) {
  return class NewComponent extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        name: 'PropsProxyHOC'
      }
    }

    logName() {
      console.log(this.name)
    }

    render() {
      const newProps = {
        name: this.state.name,
        logName: this.logName
      }
      return <WrappedComponent {...this.props} {...newProps} />
    }
  }
}

class Main extends Component {
  componentDidMount() {
    this.props.logName()
  }

  render() {
    return (
      <div>PropsProxyHOC</div>
    )
  }
}

export default PropsProxyHOC(Main);