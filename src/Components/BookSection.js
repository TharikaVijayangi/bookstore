import React, { Component } from 'react';
import firebase from '../Configurations/FbConfig';
import { Button, Card, Container, Row,Col } from 'react-bootstrap';

const db = firebase.firestore();

class BookSection extends Component {
    state = {
        bookData: []
    }

    componentDidMount() {
        db.collection('BookInfo').get().then(data => {
            data.docs.forEach(doc => {
                this.setState({
                    bookData: [...this.state.bookData, doc.data()]
                })
            })
        })
    }
    render() {
        return (
            <div>
                <Container>
                <Row>
                {this.state.bookData.length ? (
                    this.state.bookData.map(item => {
                        return (
                                
                                    <Col md="3">
                                        <Card style={{ width: '12rem' }}>
                                            <Card.Img variant="top" src="http://lightbourne.com/lb_live/wp-content/uploads/2012/10/LB_Cover_Template_74.jpg" />
                                            <Card.Body>
                                                <Card.Title>{item.BookName}</Card.Title>
                                                <Card.Text>{item.Author}</Card.Text>
                                                <Card.Text>AUD {item.Price}</Card.Text>
                                                <Card.Text>{item.ISBN}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                        )
                    })
                ) : (
                        <p>Loading...</p>
                    )}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default BookSection;
