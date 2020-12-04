import React, {Component} from 'react';

export default class errorBoundary extends Component {
    state = {
        hasError: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true});
    }

    render() {
        return (
            <div>
                {this.state.hasError ? (<p>Error found</p>) : this.props.children}
            </div>
        );
    }
}
