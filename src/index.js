import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return(
        // returns some jsx code
        <div>
            Hi there!
        </div>
    )
}

ReactDOM.render(
    <App />, // first argument
    document.querySelector('#root')// second argument, a reference to a DOM element that exits in a HTML file
)



