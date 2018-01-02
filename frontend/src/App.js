import React, { Component } from 'react'
import Config from './Config'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        // const url = `${process.env.REACT_APP_BACKEND}/categories`;
        const url = Config.settings.url + `/categories`;
        fetch(url, {
            headers: {'Authorization': 'whatever-you-want'},
            // credentials: 'include'
        })
            .then((res) => res.json())
            .then((data) => {
                this.setState({categories: data.categories})
            })
    }

    render() {
        return (
            <div>
                {this.state.categories.map(category => (
                    <div>{category.name}</div>
                ))}
            </div>
        );
    }
}

export default App;