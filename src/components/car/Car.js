import React from "react";
import Radium from "radium";
import './Car.css'

class Car extends React.Component {


    getSnapshotBeforeUpdate(prevProps, prevState) {
        return prevProps.obj.name.trim() !== this.props.obj.name;
    }

    render() {
        // if (Math.random()  >0.7){
        //     throw new Error('car render error')
        // }
        const InputClasses = ['input']
        const style = {
            boxShadow: "0 4px 5px 0 rgba(0, 0, 0, .14)",
            border: "1px solid #ccc",
            ':hover': {
                border: "1px solid #aaa",
                boxShadow: "0 4px 15px 0 rgba(0, 0, 0, .25)",
                cursor: "pointer",
            }
        }
        if (this.props.obj.name) {
            InputClasses.push('green')
        } else {
            InputClasses.push('red')
        }

        if (this.props.obj.name.length > 4) {
            InputClasses.push('bold')
        }
        return (
            <div className="Car" style={style}>
                <h1>Car component</h1>
                <p>Name:{this.props.obj.name}</p>
                <p>Year:{this.props.obj.year}</p>
                {/*<p>{1 + 1}</p>*/}
                {/*<p>Number: <strong>{Math.round(Math.random() * 100)}</strong></p>*/}
                <button
                    onClick={this.props.onChangeTitleName}>Change Title
                </button>
                <input
                    className={InputClasses.join(' ')}
                    onChange={this.props.onChangeName}
                    value={this.props.obj.name}
                    type="text"/>
                <button
                    onClick={this.props.onDelete}>Delete
                </button>
            </div>
        )
    }
}

export default Radium(Car);
