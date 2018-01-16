import React, { Component } from 'react'
import { Col, Grid, Row } from 'react-bootstrap'
import { Categories } from './Categories'
import { Posts } from './Posts'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryId: this.props.match.params.categoryId,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      categoryId: nextProps.match.params.categoryId,
    })
  }

  render() {
    return (
        <Grid bsClass="grid-margin">
          <Row className="show-grid">
            <Col xs={3} md={3}>
              <Categories/>
            </Col>
            <Col xs={9} md={9}>
              <Posts categoryId={this.state.categoryId}/>
            </Col>
          </Row>
        </Grid>
    );
  }
}

export default App;
