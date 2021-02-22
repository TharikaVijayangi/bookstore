import React, { Component } from 'react'
import { Button, Jumbotron, Container } from 'react-bootstrap';

class Landing extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Jumbotron className="jumbo">
                        <h1>Hello, Reader!</h1>
                        <p>
                            <b>This is an independent book store,</b><br>
                            </br>
                        We strive to offer the same variety and richness of experence<br></br>
                        as thebook of our shelves.<br></br>
                        </p>
                        <p>
                            Oppertunity to purches books, and oppertunity to add books to our store...
                    </p>
                        <p>This is the place to promoting diverse perspectives,<br></br>
                    And uploading the free exchange of ideas.
                    </p>

                    </Jumbotron>
                </Container>
            </div>
        )
    }
}

export default Landing;