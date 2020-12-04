import './App.css';
import React, {Component} from "react";
// Components
import Car from './components/car/Car'
import Error from './components/errorBoundary/errorBoundary'
import Counter from './components/Counter/Counter'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [
                {name: 'Ford', year: 2015},
                {name: 'Audi', year: 2001},
                {name: 'Mazda', year: 2020}
            ],
            pageTitle: 'React components ',
            showCars: true
        }
    }

    changeTitleHandler = (value) => {
        this.setState({
            pageTitle: value
        })
    }
    ChangeHandler = (event) => {
        this.setState({pageTitle: event.target.value})
    }

    show() {
        this.setState({showCars: !this.state.showCars})
    }

    onChangeName(value, index) {
        const cars = [...this.state.cars]
        const car = cars[index]
        car.name = value
        this.setState({cars})
    }

    onDeleteHandler(index) {
        const cars = [...this.state.cars]
        cars.splice(index, 1)
        this.setState({cars})
    }

    render() {
        const divStyle = {
            textAlign: "center",
        }
        return (
            <div className="App">
                <h1>{this.state.pageTitle}</h1>
                <h1>{this.props.title}</h1>
                <Counter/>
                <hr/>
                <input style={{marginTop: 20}} type="text" onChange={this.ChangeHandler}/>
                <button
                    onClick={this.changeTitleHandler.bind(this, 'App')}
                >
                    Change title
                </button>
                <button onClick={this.show.bind(this)}>Show cars</button>

                <p style={divStyle}>123</p>

                {/*Not recommended*/}
                {/*onChange={() => {this.changeTitleHandler('arg')}}*/}
                {/*Correct*/}
                {/*onChange={this.changeTitleHandler.bind(this, 'arg'}*/}

                {/*NgFor and v-for alternative*/}
                <div style={{
                    width: 400,
                    margin: 'auto',
                    paddingTop: 20
                }}>
                    {
                        //ngIf and v-if alternative
                        this.state.showCars ?
                            this.state.cars.map((car, index) => {
                                return (
                                    <Error key={index}>
                                        <Car
                                            key={index}
                                            obj={car}
                                            onChangeTitleName={this.changeTitleHandler.bind(this, car.name)}
                                            onChangeName={(event) => this.onChangeName(event.target.value, index)}
                                            onDelete={this.onDeleteHandler.bind(this, index)}
                                        />
                                    </Error>
                                )
                            }) : null
                    }
                </div>

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
