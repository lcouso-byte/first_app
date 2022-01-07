import React from 'react';
import ReactDOM from 'react-dom';

// this is a component
const App = function() {
    const good = {backgroundColor:'blue', color: 'white'};   

    return(
        // returns some jsx code
        <body>
            <div>
                <label>enter name</label>
                <input/>
                <button style={{backgroundColor:'purple', color: 'white'}}>Submit</button>
            </div>

            <br></br>

            <div>
                <label>enter e-email</label>
                <input/>
                <button style={good}>Submit</button>
            </div>
            
        </body>
    )
}

ReactDOM.render(
    <App />, // first argument
    document.querySelector('#root')// second argument, a reference to a DOM element that exits in a HTML file
)



