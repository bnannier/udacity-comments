import React, { Component } from 'react'
import * as CategoriesAPI from './CatgoriesAPI'

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        this.loadAllCategories();
    }

    /**
     * @description Load all Categories.
     */
    loadAllCategories = () => {
        CategoriesAPI.getAll().then((categories) => {
            this.setState({categories});
        });
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

export default Categories;