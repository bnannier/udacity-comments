import React, { Component } from 'react'
import { Button, Glyphicon, ListGroup, ListGroupItem, Panel } from 'react-bootstrap'
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
        <Panel header={this.renderCategoriesAdd()}>
          <ListGroup fill>
            {this.state.categories.map((category, index) => (
                <ListGroupItem key={index} href={"/" + category.path + "/posts"}>{category.name}</ListGroupItem>
            ))}
          </ListGroup>
        </Panel>
    );
  }

  renderCategoriesAdd() {
    return (
        <div className="categories-header">
          <div className="categories-header-left">{"Categories"}</div>
          <div className="categories-header-right">
            <Button>
              <Glyphicon glyph="glyphicon glyphicon-plus"/>
            </Button>
          </div>
        </div>
    )
  }
}

export default Categories;
