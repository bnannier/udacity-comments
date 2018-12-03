import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Panel } from 'react-bootstrap'
import * as PostsAPI from './PostsAPI'
import './posts.css'

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: '',
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
        if(this.state.category === undefined) {
            PostsAPI.getAllPostsForCategory(this.state.category).then((posts) => {
                this.setState({posts});
            });
        }
    }

    render() {
        return (
            <Panel header={"Posts in " + this.state.category}>
                <ListGroup fill>
                    {this.state.posts.map((post, index) => (
                        <ListGroupItem key={index} href={post.path}>{post.name}</ListGroupItem>
                    ))}
                </ListGroup>
            </Panel>
        );
    }
}

export default Posts;