import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader";

/* class Example extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.addEventListener('click', this.clickFunc, false)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.clickFunc)
  }

  clickFunc(e) {
    //  doSomethings
    console.log(e)
  }

  render() {
    return (
      <button>
        click me!
      </button>
    );
  }
} */

function Example() {

  useEffect(() => {
    document.addEventListener('click', clickFunc, false)
    return () => {
      document.removeEventListener('click', clickFunc)
    }
  });

  function clickFunc(e) {
    //  doSomethings
    console.log(e)
  }

  return (
    <button>
      click me!
      </button>
  );
}

export default hot(module)(Example);