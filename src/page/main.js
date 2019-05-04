import React, { useState, useEffect, useReducer, useRef, useCallback } from "react";
import { hot } from "react-hot-loader";

function MeasureExample() {
  const [rect, ref] = useClientRect();
  return (
    <div>
      <h1 ref={ref}>Hello, world</h1>
      {rect !== null &&
        <h2>The above header is {Math.round(rect.height)}px tall</h2>
      }
    </div>
  );
}

function useClientRect() {
  const [rect, setRect] = useState(null);
  const ref = useCallback(node => {
    if (node !== null) {
      setRect(node.getBoundingClientRect());
    }
  }, []);
  return [rect, ref];
}


export default hot(module)(MeasureExample);