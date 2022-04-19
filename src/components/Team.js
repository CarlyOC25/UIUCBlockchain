import React, {Component} from 'react';
import { Card, Button, Row, Col, Container, Image} from 'react-bootstrap'
// import Image from 'react-bootstrap/Image'
import '../fonts.css'
export default class Team extends Component {
    render() {
        const orangeFont = {
            color: "#E45E39"
        }
        return (
            <div>
                <Container >
                    
                    <h1 className = "mt-5 pt-2 header-text mb-5" style ={{textAlign: "left"}}>
                       Meet the <p style={{display: 'inline', color: 'white', backgroundColor: '#FF552E', paddingLeft: 6, paddingRight: 6}}>People</p> 
                    </h1>
                    <Row className=''>
                        <Col >
                            <Card className='text-center align-items-center' style={{ width: '18rem', borderColor: 'white'}}>
                            <Image style={{height: 220, width: 220}} roundedCircle
                                src="/images/ErinNelson.png"
                            />
                            <Card.Body >
                                <Card.Title style={orangeFont}>Erin Nelson</Card.Title>
                                <Card.Text style={{height: 50}}>
                                    <b>
                                        Senior Director for International Advancement    
                                    </b>
                                </Card.Text>
                                <Card.Text style={{height: 120}}>
                                    Reach out to Mrs. Nelson if you are interested in donating time or money to the University to help with move forward the blockchain work
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer style={{backgroundColor: 'white', borderColor: 'white'}}>
                                <Button variant="outline-primary">Contact</Button>
                            </Card.Footer>
                            </Card>
                        </Col>
                        <Col >
                            <Card className='text-center align-items-center' style={{ width: '18rem', borderColor: 'white'}}>
                            <Image style={{height: 220, width: 220}} roundedCircle
                                src="/images/AndrewMiller.png"
                            />
                            <Card.Body>
                                <Card.Title style={orangeFont}>Andrew Miller</Card.Title>
                                <Card.Text style={{height: 50}}>
                                    <b>
                                        Director of Decentralized Systems Lab at UIUC  
                                    </b>
                                </Card.Text>
                                <Card.Text style={{height: 120}}>
                                    Reach out to Professor Miller to partner in building resilient public infrastructure for the world’s data
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer style={{backgroundColor: 'white', borderColor: 'white'}}>
                                <Button variant="outline-primary">Contact</Button>
                            </Card.Footer>
                            </Card>
                        </Col>
                        <Col >
                            
                            <Card className='text-center align-items-center' style={{ width: '18rem', borderColor: 'white' }}>
                            <Image  style={{height: 220, width: 220}} roundedCircle
                                src="/images/harleyJohnson.png"
                            />
                            <Card.Body>
                                <Card.Title style={orangeFont} >Harley T Johnson</Card.Title>
                                <Card.Text style={{height: 50}}>
                                    <b>
                                        Associate Dean for Research in the Grainger of College of Engineering  
                                    </b>
                                </Card.Text>
                                <Card.Text style={{height: 120}}>
                                    Reach out to Professor Johnson to discuss blockchain research in both technology and multi-disciplinary problems
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer style={{backgroundColor: 'white', borderColor: 'white'}}>
                                <Button variant="outline-primary">Contact</Button>
                            </Card.Footer>
                            </Card>
                        </Col>
                        <Col >
                            <Card className='text-center align-items-center' style={{ width: '18rem', borderColor: 'white' }}>
                            <Image style={{height: 220, width: 220}} roundedCircle
                                src="/images/robertBrunner.png"
                            />
                            <Card.Body>
                                <Card.Title style={orangeFont} >Robert Brunner</Card.Title>
                                <Card.Text style={{height: 50}}>
                                    <b>
                                        Chief Disruption Officer Gies College of Business    
                                    </b>
                                </Card.Text>
                                <Card.Text style={{height: 120}}>
                                    Reach out to Mrs. Nelson if you are interested in donating time or money to the University to help with move forward the blockchain work
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer style={{backgroundColor: 'white', borderColor: 'white'}}>
                                <Button variant="outline-primary">Contact</Button>
                            </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        
                    </Row>
                </Container>
                
                
                    
            </div>
        )
    }
}