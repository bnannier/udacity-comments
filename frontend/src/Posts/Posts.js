import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Panel } from 'react-bootstrap'
import * as PostsAPI from './PostsAPI'
import './posts.css'

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.loadAllPosts();
  }

  /**
   * @description Load all Posts for a certain Category.
   */
  loadAllPosts = () => {
    PostsAPI.getAllPostsForCategory(this.props.categoryId).then((posts) => {
      this.setState({posts});
    });
  }

  render() {
    return (
        <Panel>
          <ListGroup fill>
            {
              this.state.posts.map((post, index) => (
                  <ListGroupItem key={index} href={post.id}>{post.title}</ListGroupItem>
              ))
            }
          </ListGroup>
        </Panel>
    );
  }
}

export default Posts;
