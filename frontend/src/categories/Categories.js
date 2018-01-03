import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Panel } from 'react-bootstrap'
import * as CategoriesAPI from './CatgoriesAPI'
import './categories.css'

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
            <Panel header="Categories">
                <ListGroup fill>
                    {this.state.categories.map((category, index) => (
                        <ListGroupItem key={index} href={category.path}>{category.name}</ListGroupItem>
                    ))}
                </ListGroup>
            </Panel>
        );
    }
}

export default Categories;