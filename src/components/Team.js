import React, {Component} from 'react';
import { Card, Button, Row, Col, Container, Image} from 'react-bootstrap'
// import Image from 'react-bootstrap/Image'
import '../team.css'
export default class Team extends Component {
    render() {
        const orangeFont = {
            color: "#E45E39"
        }
        return (
            <div>   
                <Container className='body-meet'>
                    <h1  className='meet-header' style ={{textAlign: "left", wordSpacing: 7}}>
                        <p style={{display: 'inline', color: 'white', backgroundColor: '#FF552E', paddingLeft: 5, paddingRight: 5, marginRight: 15}}></p> Blockchain
                                
                    </h1>     
                    <Row>
                        <Col className='col-lg-15'>
                            <Card className='text-center align-items-center' style={{ width: '18rem', borderColor: 'white'}}>
                            <Image style={{height: 220, width: 220}} roundedCircle
                                src="/images/ErinNelson.png"
                            />
                            <Card.Body >
                                <Card.Title className='title-txt' style={orangeFont}>Erin Nelson</Card.Title>
                                <Card.Text className='position-txt' style={{height: 80}}>
                                    <b>
                                        Senior Director for International Advancement    
                                    </b>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer style={{backgroundColor: 'white', borderColor: 'white'}}>
                                <Button className='contact-btn'>Contact</Button>
                            </Card.Footer>
                            </Card>
                        </Col>
                        <Col className='col-lg-15'>
                            <Card className='text-center align-items-center' style={{ width: '18rem', borderColor: 'white'}}>
                            <Image style={{height: 220, width: 220}} roundedCircle
                                src="/images/AndrewMiller.png"
                            />
                            <Card.Body>
                                <Card.Title className='title-txt' style={orangeFont}>Andrew Miller</Card.Title>
                                <Card.Text className='position-txt' style={{height: 80}}>
                                    <b>
                                        Director of Decentralized Systems Lab at UIUC  
                                    </b>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer style={{backgroundColor: 'white', borderColor: 'white'}}>
                                <Button className='contact-btn'>Contact</Button>
                            </Card.Footer>
                            </Card>
                        </Col>
                        <Col className='col-lg-15'>
                            
                            <Card className='text-center align-items-center' style={{ width: '18rem', borderColor: 'white' }}>
                            <Image  style={{height: 220, width: 220}} roundedCircle
                                src="/images/harleyJohnson.png"
                            />
                            <Card.Body>
                                <Card.Title className='title-txt' style={orangeFont} >Harley T Johnson</Card.Title>
                                <Card.Text className='position-txt' style={{height: 80}}>
                                    <b>
                                        Associate Dean for Research in the Grainger of College of Engineering  
                                    </b>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer style={{backgroundColor: 'white', borderColor: 'white'}}>
                                <Button className='contact-btn'>Contact</Button>
                            </Card.Footer>
                            </Card>
                        </Col>
                        <Col className='col-lg-15'>
                            <Card className='text-center align-items-center' style={{ width: '18rem', borderColor: 'white' }}>
                            <Image style={{height: 220, width: 220}} roundedCircle
                                src="/images/robertBrunner.png"
                            />
                            <Card.Body>
                                <Card.Title className='title-txt' style={orangeFont} >Robert Brunner</Card.Title>
                                <Card.Text className='position-txt' style={{height: 80}}>
                                    <b>
                                        Chief Disruption Officer Gies College of Business    
                                    </b>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer style={{backgroundColor: 'white', borderColor: 'white'}}>
                                <Button className='contact-btn'>Contact</Button>
                            </Card.Footer>
                            </Card>
                            
                        </Col>
                        <Col className='col-lg-15'>
                            <Card className='text-center align-items-center' style={{ width: '18rem', borderColor: 'white' }}>
                            <Image style={{height: 220, width: 220}} roundedCircle
                                src="/images/robertBrunner.png"
                            />
                            <Card.Body>
                                <Card.Title className='title-txt' style={orangeFont} >Robert Brunner</Card.Title>
                                <Card.Text className='position-txt' style={{height: 80}}>
                                    <b>
                                        Chief Disruption Officer Gies College of Business    
                                    </b>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer style={{backgroundColor: 'white', borderColor: 'white'}}>
                                <Button className='contact-btn'>Contact</Button>
                            </Card.Footer>
                            </Card>
                            
                        </Col>
                    </Row>
                    
                </Container>
                
                
                    
            </div>
        )
    }
}