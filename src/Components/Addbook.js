import React, { Component } from 'react'
import { Button, Form, Container, Row,Col } from 'react-bootstrap';
import firebase from '../Configurations/FbConfig';

const db=firebase.firestore();

class Addbook extends Component {

    state = {
        BookName:'',
        Author:'',
        Price:'',
        ISBN:'',
        UserName:'',
        Password:'',
        BookNameError:'',
        AuthorError:'',
        PriceError:'',
        ISBNError:'',
        UserNameError:'',
        PasswordError:''
    }

    handlechange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value,
        })
    }

    validate = () =>{
        let BookNameError='';
        let AuthorError='';
        let PriceError='';
        let ISBNError='';
        let UserNameError='';
        let PasswordError='';

        if(!this.state.BookName){
            BookNameError="Book Name Cannot be blank."
        }

        if(!this.state.Author){
            AuthorError="Author Cannot be blank."
        }

        if(!this.state.Price){
            PriceError="Price Cannot be blank."
        }

        if(!this.state.ISBN){
            ISBNError="ISBN Cannot be blank."
        }

        if(!this.state.UserName){
            UserNameError="User name Cannot be blank."
        }

       // if(!this.state.Password){
      //      PasswordError="Password Cannot be blank."
      //  }

        if(BookNameError||AuthorError||PriceError||ISBNError||UserNameError||PasswordError){
            this.setState({BookNameError,AuthorError,PriceError,ISBNError,UserNameError,PasswordError});
            return false;
        }

        return true;
    }

    submitData = (e) => {
        e.preventDefault();
        const isValid =this.validate();
        if(isValid){
        db.collection('BookInfo').add({
            BookName:this.state.BookName,
            Author:this.state.Author,
            Price:this.state.Price,
            ISBN:this.state.ISBN
        })}
    }

    render() {
        return (
            <div>
                <Container className="form-container">
                    <Row>
                        
                        <Col md="3"></Col>
                        <Col md="6">
                        <h1>Add New Books</h1>
                            
                            <Form onSubmit={this.submitData}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Book Name</Form.Label>
                                    <Form.Control type="text" name="BookName" placeholder="Enter Book Name" onChange={this.handlechange}/>
                                    <p style={{color:"red", fontSize:"12"}}>
                                        {this.state.BookNameError}
                                    </p>
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Author</Form.Label>
                                    <Form.Control type="text" name="Author" placeholder="Enter Author" onChange={this.handlechange}/>
                                    <p style={{color:"red", fontSize:"12"}}>
                                        {this.state.AuthorError}
                                    </p>
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type="text" name="Price" placeholder="Enter Price" onChange={this.handlechange}/>
                                    <p style={{color:"red", fontSize:"12"}}>
                                        {this.state.PriceError}
                                    </p>
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>ISBN</Form.Label>
                                    <Form.Control type="text" name="ISBN" placeholder="Enter IBSN" onChange={this.handlechange}/>
                                    <p style={{color:"red", fontSize:"12"}}>
                                        {this.state.ISBNError}
                                    </p>
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control type="text" name="UserName" placeholder="Enter User Name" onChange={this.handlechange}/>
                                    <p style={{color:"red", fontSize:"12"}}>
                                        {this.state.UserNameError}
                                    </p>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" placeholder="Password" />
                                    <p style={{color:"red", fontSize:"12"}}>
                                        {this.state.PasswordError}
                                    </p>
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col md="3"> </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Addbook;
