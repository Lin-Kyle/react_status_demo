import React, { Component } from "react";
import { hot } from "react-hot-loader";

function PropsProxyHOC(WrappedComponent) {
  return class NewComponent extends React.Component {
    constructor(props) {
      super(props)
      this.state = { fields: {} }
    }

    getField(fieldName) {
      const _s = this.state
      if (!_s.fields[fieldName]) {
        _s.fields[fieldName] = {
          value: '',
          onChange: event => {
            this.state.fields[fieldName].value = event.target.value
            // 强行触发render
            this.forceUpdate()
            console.log(this.state)
          }
        }
      }

      return {
        value: _s.fields[fieldName].value,
        onChange: _s.fields[fieldName].onChange
      }
    }

    render() {
      const newProps = {
        fields: this.getField.bind(this),
      }
      return <WrappedComponent {...this.props} {...newProps} />
    }
  }
}

// 被获取ref实例组件
class Main extends Component {
  render() {
    return <input type="text" {...this.props.fields('name')} />
  }
}



export default hot(module)(PropsProxyHOC(Main));