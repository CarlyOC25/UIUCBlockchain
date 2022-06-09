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
                                    Support blockchain innovation at Illinois 
                                </h1>   
                                <p className='text2'>Your contribution will help Illinois build the next evolution of the internet and equip future leaders in blockchain through innovative programming and curriculum, research, technology, and new start-up ventures. Make a gift to the Innovation Fund by donating below.</p>
                                <Button className='btn-contact'>
                                    Donate
                                </Button>                    
                            </Col>
                            <Col>
                                <h1 className='text'>
                                    Call to action 1
                                </h1>   
                                <p className='text2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac metus est. Pellentesque eros urna, convallis non ullamcorper id, luctus a augue. Vivamus sit amet lectus id justo lacinia elementum. Integer vel mi porttitor, pulvinar erat nec, iaculis sapien. </p>
                                <Button className='btn-contact'>
                                    Donate
                                </Button>                              
                            </Col>
                            
                        </Row>
                        <Row>
                            
                        </Row>
                    </Container>
                </Container>
                
            </div>
        )
    }
}