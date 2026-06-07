import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [showCount, setShowCount] = useState(false);
  return (
    <>
      <button onClick={() => setShowCount(!showCount)}>
        {showCount ? "Hide show count" : "Show count"}
      </button>
      {showCount ? (
        <>
          <h1>Counter Show Open</h1>
          <h1>Counter is{count}</h1>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
        </>
      ) : null}
    </>
  );
}

export default Counter;
