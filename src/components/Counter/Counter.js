import React from 'react';
import './Counter.css';

const Counter = (props) => {
  const [count, setCount] = React.useState(0);
  return (
    <div className='count-box'>
      <p>{count}</p>
      <div className='button-box'>
        <button onClick={() => setCount(count + 1)}>
          Increment
      </button>
        <button onClick={() => setCount(count - 1)}>
          Decrement
      </button>
      </div>
    </div>
  );
}

export default Counter;