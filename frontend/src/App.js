import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Col, Grid, Row } from 'react-bootstrap'
import Categories from './Categories'

class App extends Component {
    render() {
        return (
            <div className="app">
                <Route path='/' render={({history}) => (
                    <Grid bsClass="grid-margin">
                        <Row className="show-grid">
                            <Col xs={3} md={3}>
                                <Categories />
                            </Col>
                            <Col xs={9} md={9}>
                                wow
                            </Col>
                        </Row>
                    </Grid>
                )}/>
            </div>
        );
    }
}

export default App;