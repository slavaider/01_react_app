import React from "react";
import './Car.css'
import withClass from '../hoc/withClass'
import PropTypes from 'prop-types';

class Car extends React.Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    componentDidMount() {
        if (this.props.index === 1) {
            this.inputRef.current.focus()
        }

    }

    render() {
        // if (Math.random()  >0.7){
        //     throw new Error('car render error')
        // }
        const InputClasses = ['input']
        if (this.props.obj.name) {
            InputClasses.push('green')
        } else {
            InputClasses.push('red')
        }

        if (this.props.obj.name.length > 4) {
            InputClasses.push('bold')
        }
        return (
            <React.Fragment>
                <h1>Car component</h1>
                <p>Name:{this.props.obj.name}</p>
                <p>Year:{this.props.obj.year}</p>
                {/*<p>{1 + 1}</p>*/}
                {/*<p>Number: <strong>{Math.round(Math.random() * 100)}</strong></p>*/}
                <button
                    onClick={this.props.onChangeTitleName}>Change Title
                </button>
                <input
                    ref={this.inputRef}
                    className={InputClasses.join(' ')}
                    onChange={this.props.onChangeName}
                    value={this.props.obj.name}
                    type="text"/>
                <button
                    onClick={this.props.onDelete}>Delete
                </button>
            </React.Fragment>
        )
    }
}

Car.propTypes = {
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func
}
export default withClass(Car, 'Car');
