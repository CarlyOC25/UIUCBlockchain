import React, {Component} from 'react';
import { Container, Form, Button, Row, Col} from 'react-bootstrap'
import "../contact.css"

export default class Contact extends Component {
    render() {
        return (
            <div className='background'>
                <Container fluid className='text-center overlay' >
                        <Container>
                        <Row>
                            <Col>
                                <h1 className='text'>
                                    Have any questions?
                                </h1>                       
                            </Col>
                            
                        </Row>
                        <Row>
                            <Col>
                                <Button className='btn-contact'>
                                    Contact Us
                                </Button>                        
                            </Col>
                        </Row>
                    </Container>
                </Container>
                
            </div>
        )
    }
}