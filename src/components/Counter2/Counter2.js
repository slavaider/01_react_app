import React from 'react';
import {ClickContext} from '../../App'
const Counter2 = () => {
    return (
        <div style={{border: '1px solid #ccc', width: 200, margin: 'auto'}}>
            <h2>Counter2</h2>
            <ClickContext.Consumer>
            {clicked => clicked ? <p>Clicked</p> : null}
            </ClickContext.Consumer>
        </div>
    )
};
export default Counter2
