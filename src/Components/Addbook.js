import React, { Component } from 'react'
import { Button, Form, Container, Row,Col } from 'react-bootstrap';
import firebase from '../Configurations/FbConfig';

const db=firebase.firestore();

class Addbook extends Component {

    state = {
        BookName:'',
        Author:'',
        Price:'',
        ISBN:''
    }

    handlechange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value,
        })
    }

    submitData = (e) => {
        e.preventDefault();
        db.collection('BookInfo').add({
            BookName:this.state.BookName,
            Author:this.state.Author,
            Price:this.state.Price,
            ISBN:this.state.ISBN
        })
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md="3"></Col>
                        <Col md="6">
                            <Form onSubmit={this.submitData}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Book Name</Form.Label>
                                    <Form.Control type="text" name="BookName" placeholder="Enter Book Name" onChange={this.handlechange}/>
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Author</Form.Label>
                                    <Form.Control type="text" name="Author" placeholder="Enter Author" onChange={this.handlechange}/>
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type="text" name="Price" placeholder="Enter Price" onChange={this.handlechange}/>
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>ISBN</Form.Label>
                                    <Form.Control type="text" name="ISBN" placeholder="Enter IBSN" onChange={this.handlechange}/>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col md="3"></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Addbook;
