let count = 0;
const addOne = () => {
    count++;
    rederCounterApp();
}
const minusOne = () => {
    count--;
    rederCounterApp();
}
const reset = () => {
    count = 0;
    rederCounterApp();
}

const appRoot = document.getElementById("app");

const rederCounterApp = () => {
    const template = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

rederCounterApp()