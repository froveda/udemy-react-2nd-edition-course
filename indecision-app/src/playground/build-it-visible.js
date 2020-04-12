const appRoot = document.getElementById("app");

let showDetails = false;

const toggleDetails = () => {
    showDetails = !showDetails;
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleDetails}>
                { showDetails ? 'Hide details' : 'Show details' }
            </button>
            { showDetails && <p>Hey, these are some details you can now see!</p> }
        </div>
    );

    ReactDOM.render(template, appRoot);
}
render();