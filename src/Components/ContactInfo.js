import React, { Component } from 'react'
import { Container, Row, Card, Col} from 'react-bootstrap'

class ContactInfo extends Component {
    render() {
        return (
           
                <Container>
                    <h1>Get In Touch</h1>
                    <h6>Have a question? Need a tip?</h6>
                    <h6>We would be happy to point you in the right direction.</h6>
                    <Row>
                        <Col md="4">
                            <Card>
                                
                                <Card.Body>
                                    <Card.Title>Address</Card.Title>
                                    <Card.Text>
                                        No 23,
                                    </Card.Text>
                                    <Card.Text>
                                        Temple Road,
                                    </Card.Text>
                                    <Card.Text>
                                        Colombo 07.
                                    </Card.Text>
                                </Card.Body>
                                
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card>
                                
                                <Card.Body>
                                    <Card.Title>Phone</Card.Title>
                                    <Card.Text>
                                        General Inquiries:
                                    </Card.Text>
                                    <Card.Text>
                                        +94 114466778
                                    </Card.Text>
                                    <Card.Text>
                                        +94 119988554
                                    </Card.Text>
                                </Card.Body>
                                
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card>
                                
                                <Card.Body>
                                    <Card.Title>Email</Card.Title>
                                    <Card.Text>
                                    General Inquiries:
                                    </Card.Text>
                                    <Card.Text>
                                    Info@reedToLove.com
                                    </Card.Text>
                                    <Card.Text>
                                    support@reedToLove.com
                                    </Card.Text>
                                </Card.Body>
                               
                            </Card>
                        </Col>
                    </Row>
                </Container>
        )
    }
}
export default ContactInfo
