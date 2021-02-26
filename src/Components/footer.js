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
                        <Col md="4">
                            <br></br>
                            <h6 className="footerFont">Around The Web</h6>
                            <Row>
                                <Col md="1">
                                    
                                </Col>
                            </Row>

                        </Col>
                        <Col md="4">
                            <br></br>
                            <p className="footerFont">Our mission is to bring</p> 
                            <p className="footerFont">affordable technology education </p>
                            <p className="footerFont">to people everywhere </p>
                            <p className="footerFont">in order to help them </p>
                            <p className="footerFont">achieve their dreams</p> 
                            <p className="footerFont">and change the world.</p>

                        </Col>
                    </Row>
                </Container>

                </div>
        )
    }
}

export default footer;
