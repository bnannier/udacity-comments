import React, { Component } from 'react'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        // const url = `${process.env.REACT_APP_BACKEND}/categories`;
        const url = `http://localhost:3001/categories`;
        console.log('fetching from url', url);
        fetch(url, {
            headers: {'Authorization': 'whatever-you-want'},
            // credentials: 'include'
        })
            .then((res) => res.json())
            .then((data) => {
                this.setState({categories: data.categories})
            })
            .then(console.log('this.state.categories', this.state.categories))
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