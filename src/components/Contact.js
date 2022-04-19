import React, {Component} from 'react';
import { Container, Form, Button, Row, Col} from 'react-bootstrap'
import "../fonts.css"

export default class Contact extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Container style={{padding:0, margin:0, paddingTop: 50}}>
                        <h1 className = 'mb-5 pd-5 navbar-text'style={{textAlign: "left", padding: 0, margin: 0}}>
                            Contact Us
                        </h1>
                    </Container>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control style={{borderRadius: 10, height: 50}} type="password" placeholder="" />
                            <Form.Label className='form-text' >First Name</Form.Label>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control style={{borderRadius: 10, height: 50}} type="password" placeholder="" />
                            <Form.Label>Password</Form.Label>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control style={{borderRadius: 10, height: 50}} type="password" placeholder="" />
                        <Form.Label className='form-text'>Company</Form.Label>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control style={{borderRadius: 10, height: 50}} type="password" placeholder="" />
                        <Form.Label className='form-text'>Email Address</Form.Label>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control style={{borderRadius: 10, height: 150}} type="password" placeholder="" />
                        <Form.Label className='form-text'>Comment or Message</Form.Label>
                        </Form.Group>
                    </Row>
                    <Row>
                    <Form className='text-center'>
                    <Button  className='form-text' style={{color: 'white', backgroundColor: '#FF552E', borderColor: '#FF552E', borderRadius: 20, paddingLeft: 40, paddingRight: 40 }} type="submit">
                        Contact Us
                    </Button>
                    </Form>
                    </Row>
                </Container>
                
            </div>
        )
    }
}