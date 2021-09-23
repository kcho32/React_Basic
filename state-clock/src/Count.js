import React, { useState } from 'react';

function Count(props) {
  //function hook : useState 사용
  const [count, setCount] = useState(0); //useState(초기값)
  const [data, setData] = useState("hi")
  return (
    <div>
      <p>you clicked {count} times</p>
      <p>Test value : {data} </p>
      <button onClick={() => setCount(count+1)}>
      Click me
      </button>
      <button onClick={() => setCount(data * 2)}>
      Test
      </button>      
    </div>
  );
}

export default Count;