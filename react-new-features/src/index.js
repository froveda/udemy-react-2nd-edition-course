import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// We can use this approach, but is better to use useState multiple times
const App = (props) => {
  const [state, setState] = useState({
    count: props.count,
    text: ''
  })

  const increment = () => {
    setState({ ...state, count: state.count + 1 });
  }

  const decrement = () => {
    setState({ ...state, count: state.count - 1 });
  }

  const reset = () => {
    setState({ ...state, count: props.count });
  }

  const setTextFromInput = (e) => {
    setState({ ...state, text: e.target.value });
  }

  return (
    <React.StrictMode>
      <div>
        <p>The current {state.text || 'count'} is {state.count}</p>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={reset}>reset</button>
        <input value={state.text} onChange={setTextFromInput} />
      </div>
    </React.StrictMode>
  )
}


// const App = (props) => {
//   const [count, setCount] = useState(props.count);
//   const [text, setText] = useState('');

//   const increment = () => {
//     setCount(count + 1);
//   }

//   const decrement = () => {
//     setCount(count - 1);
//   }

//   const reset = () => {
//     setCount(props.count);
//   }

//   const setTextFromInput = (e) => {
//     setText(e.target.value);
//   }

//   return (
//     <React.StrictMode>
//       <div>
//         <p>The current {text || 'count'} is {count}</p>
//         <button onClick={increment}>+1</button>
//         <button onClick={decrement}>-1</button>
//         <button onClick={reset}>reset</button>
//         <input value={text} onChange={setTextFromInput} />
//       </div>
//     </React.StrictMode>
//   )
// }

App.defaultProps = {
  count: 0
}

ReactDOM.render(<App count={10} />, document.getElementById('root'));

serviceWorker.unregister();
