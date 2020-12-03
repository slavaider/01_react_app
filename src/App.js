import './App.css';
import React, {Component} from "react";
// Components
import Car from './components/car/Car'


class App extends Component {
    state = {
        cars: [
            {
                name: 'Ford',
                year: 2015
            },
            {
                name: 'Audi',
                year: 2001
            },
            {
                name: 'Mazda',
                year: 2020
            }
        ],
        pageTitle: 'React components ',
        showCars: true
    }
    changeTitleHandler = (value) => {
        this.setState({
            pageTitle: value
        })
    }
    ChangeHandler = (event) => {
        this.setState({pageTitle: event.target.value})
    }
    show = () => {
        this.setState({showCars: !this.state.showCars})
    }
    onChangeName = (value, index) => {
        const cars = this.state.cars
        const car = cars[index]
        car.name = value
        this.setState({cars})
    }

    render() {
        const divStyle = {
            textAlign: "center",
        }
        return (
            <div className="App">
                <h1>{this.state.pageTitle}</h1>
                <input type="text" onChange={this.ChangeHandler}/>
                <button
                    onClick={this.changeTitleHandler.bind(this, 'App')}
                >
                    Change title
                </button>
                <button onClick={this.show}>Show cars</button>

                <p style={divStyle}>123</p>

                {/*Not recommended*/}
                {/*onChange={() => {this.changeTitleHandler('arg')}}*/}
                {/*Correct*/}
                {/*onChange={this.changeTitleHandler.bind(this, 'arg'}*/}

                {/*NgFor and v-for alternative*/}
                {
                    //ngIf and v-if alternative
                    this.state.showCars ?
                        this.state.cars.map((car, index) => {
                            return (
                                <Car
                                    key={index}
                                    obj={car}
                                    onChangeName={(event) => {
                                        this.onChangeName(event.target.value, index)
                                    }}
                                />
                            )
                        }) : null
                }

            </div>
        );
    }

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
