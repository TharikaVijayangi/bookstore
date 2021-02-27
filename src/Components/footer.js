import React, { Component } from 'react'
import {  Row,Col,Container } from 'react-bootstrap';

class footer extends Component {
    render() {
        return (
           <div className="footer">
                <Container>
                    <Row>
                        <Col md="4">
                            <br></br>
                            <p className="footerFont">Thank you </p>
                               <p className="footerFont"> for supporting</p>
                               <p className="footerFont"> these lofty doals.</p>
                            <p className="footerFont">Stay conneccted.</p>
                        </Col>
                        
                        <Col md="8">
                            <br></br>
                            <p className="footerFont">Our mission is to bring affordable technology education</p> 
                            <p className="footerFont">to people everywhere in order to help them </p>
                            <p className="footerFont">achieve their dreams and change the world.</p> 

                        </Col>
                    </Row>
                </Container>

                </div>
        )
    }
}

export default footer;
