import './App.css';
import React from "react";
// Components
import Car from './components/car/Car'

function App() {
    const divStyle = {
        textAlign: "end",
    }
    const cars = [
        {
            name: 'Ford',
            year: 2015
        },
        {
            name: 'Audi',
            year: 2000
        },
    ]
    return (
        <div className="App">
            <h1>LOL</h1>
            <p style={divStyle}>123</p>
            <Car obj={cars[0]}>
                <p style={{color: 'blue'}}>COLOR</p>
            </Car>
            <Car obj={cars[1]}>
                <p style={{color: 'red'}}>COLOR</p>
            </Car>
        </div>
    );

    // Same
    // return React.createElement(
    //     'div',
    //     {className: 'App'},
    //     React.createElement(
    //         'h1',
    //         null,
    //         'LOL')
    // )
}

export default App;
