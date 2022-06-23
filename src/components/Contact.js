import React, {Component} from 'react';
import { Container, Button, Row, Col} from 'react-bootstrap'
import "../contact.css"

export default class Contact extends Component {
    render() {
        return (
            <div className='background'>
                <Container fluid className='text-center overlay ContactBox' >
                        <Container>
                        <Row>
                            <Col>
                                <h1 className='text'>
                                    Support blockchain innovation at Illinois 
                                </h1>   
                                <p className='text2'>Your contribution will help Illinois build the next evolution of the internet and equip future leaders in blockchain through innovative programming and curriculum, research, technology, and new start-up ventures. Make a gift to the Innovation Fund by donating below.</p>
                                <Button className='btn-contact' style={{marginRight:'2.5rem'}}>
                                    Donate USD
                                </Button>          
                                <Button className='btn-contact'>
                                    Donate Crypto
                                </Button>            
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>
        )
    }
}