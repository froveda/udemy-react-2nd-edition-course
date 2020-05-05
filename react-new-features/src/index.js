import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const App = (props) => {
  const [count, setCount] = useState(props.count);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(props.count);
  }

  return (
    <React.StrictMode>
      <div>
        <p>The current count is {count}</p>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={reset}>reset</button>
      </div>
    </React.StrictMode>
  )
}

App.defaultProps = {
  count: 0
}

ReactDOM.render(<App count={10} />, document.getElementById('root'));

serviceWorker.unregister();
