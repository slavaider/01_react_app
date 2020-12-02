import React from "react";

// Same as Car 2,3
// function Car1(props) {
//     return (
//         <div>
//             <h2>Car {props.obj.name}</h2>
//             <h2>Year {props.obj.year}</h2>
//         </div>
//     )
// }

// Same as Car 1,3
// const Car2 = () => {
//     return (
//         <h1>Lol</h1>
//     )
// }

// Same as Car 1,2
const Car3 = (props) => (
    <div>
        <h1>Car component</h1>
        <p>Name:{props.obj.name}</p>
        <p>Year:{props.obj.year}</p>
        <p>{1 + 1}</p>
        <p>Number: <strong>{Math.round(Math.random() * 100)}</strong></p>
        {props.children}
    </div>
)

export default Car3;
