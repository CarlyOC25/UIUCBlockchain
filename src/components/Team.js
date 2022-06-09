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
                        <Col md={1} className='col-lg-15'>
                            <Card className='text-center align-items-center' style={{ width: '18rem', borderColor: 'white'}}>
                            <Image style={{height: 220, width: 220}} roundedCircle
                                src="/images/teamImages/bigdog.png"
                            />
                            <Card.Body >
                                <Card.Title className='title-txt' style={orangeFont}>Robert Brunner</Card.Title>
                                <Card.Text className='position-txt'>
                                    Chief Disruption Officer <br></br>Gies College of Business
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer style={{backgroundColor: 'white', borderColor: 'white'}}>
                                <Button href='' className='contact-btn'>Contact</Button>
                            </Card.Footer>
                            </Card>
                        </Col>
                        <Col className='col-lg-15'>
                            <Card className='text-center align-items-center' style={{ width: '18rem', borderColor: 'white'}}>
                            <Image style={{height: 220, width: 220}} roundedCircle
                                src="/images/teamImages/samchen.png"
                            />
                            <Card.Body >
                                <Card.Title className='title-txt' style={orangeFont}>Samuel Chen</Card.Title>
                                <Card.Text className='position-txt'>
                                    Director of iData
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer style={{backgroundColor: 'white', borderColor: 'white'}}>
                                <Button href='https://ischool.illinois.edu/people/anita-nikolich' className='contact-btn'>Contact</Button>
                            </Card.Footer>
                            </Card>
                        </Col>
                        <Col className='col-lg-15'>
                            <Card className='text-center align-items-center' style={{ width: '18rem', borderColor: 'white'}}>
                            <Image style={{height: 220, width: 220}} roundedCircle
                                src="/images/teamImages/wenhan.png"
                            />
                            <Card.Body >
                                <Card.Title className='title-txt' style={orangeFont}>Wencui Han</Card.Title>
                                <Card.Text className='position-txt'>
                                    Asistant Professor of <br></br> Business Administration
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer style={{backgroundColor: 'white', borderColor: 'white'}}>
                                <Button href='' className='contact-btn'>Contact</Button>
                            </Card.Footer>
                            </Card>
                        </Col>
                        <Col className='col-lg-15'>
                            <Card className='text-center align-items-center' style={{ width: '18rem', borderColor: 'white'}}>
                            <Image style={{height: 220, width: 220}} roundedCircle
                                src="/images/teamImages/Kinsey.png"
                            />
                            <Card.Body >
                                <Card.Title className='title-txt' style={orangeFont}>Jacob Kinsey</Card.Title>
                                <Card.Text className='position-txt'>
                                    Director Gies Consulting
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer style={{backgroundColor: 'white', borderColor: 'white'}}>
                                <Button href='' className='contact-btn'>Contact</Button>
                            </Card.Footer>
                            </Card>
                        </Col>
                        <Col className='col-lg-15'>
                            <Card className='text-center align-items-center' style={{ width: '18rem', borderColor: 'white'}}>
                            <Image style={{height: 220, width: 220}} roundedCircle
                                src="/images/teamImages/andrewMiller.png"
                            />
                            <Card.Body >
                                <Card.Title className='title-txt' style={orangeFont}>Andrew Miller</Card.Title>
                                <Card.Text className='position-txt'>
                                    Director of Decentralized Lab at UIUC
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer style={{backgroundColor: 'white', borderColor: 'white'}}>
                                <Button href='' className='contact-btn'>Contact</Button>
                            </Card.Footer>
                            </Card>
                        </Col>
                    </Row>

                    <Row style={{paddingTop: 50}}>
                        <Col className='col-lg-15'>
                            <Card className='text-center align-items-center' style={{ width: '18rem', borderColor: 'white'}}>
                            <Image style={{height: 220, width: 220}} roundedCircle
                                src="/images/teamImages/erinNelson.png"
                            />
                            <Card.Body >
                                <Card.Title className='title-txt' style={orangeFont}>Erin Nelson</Card.Title>
                                <Card.Text className='position-txt'>
                                    Senior Director for International Advancement
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer style={{backgroundColor: 'white', borderColor: 'white'}}>
                                <Button href='' className='contact-btn'>Contact</Button>
                            </Card.Footer>
                            </Card>
                        </Col>
                        <Col className='col-lg-15'>
                            <Card className='text-center align-items-center' style={{ width: '18rem', borderColor: 'white'}}>
                            <Image style={{height: 220, width: 220}} roundedCircle
                                src="/images/teamImages/Anita-Nikolich.png"
                            />
                            <Card.Body >
                                <Card.Title className='title-txt' style={orangeFont}>Anita Nikolich</Card.Title>
                                <Card.Text className='position-txt'>
                                    Director of Research and Technology Innovation school of Information Sciences
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer style={{backgroundColor: 'white', borderColor: 'white'}}>
                                <Button href='' className='contact-btn'>Contact</Button>
                            </Card.Footer>
                            </Card>
                        </Col>
                        <Col className='col-lg-15'>
                            <Card className='text-center align-items-center' style={{ width: '18rem', borderColor: 'white'}}>
                            <Image style={{height: 220, width: 220}} roundedCircle
                                src="/images/teamImages/madhusudan.png"
                            />
                            <Card.Body >
                                <Card.Title className='title-txt' style={orangeFont}>Madhusudan Parthasarathy</Card.Title>
                                <Card.Text className='position-txt'>
                                    Professor of Computer Science
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer style={{backgroundColor: 'white', borderColor: 'white'}}>
                                <Button href='' className='contact-btn'>Contact</Button>
                            </Card.Footer>
                            </Card>
                        </Col>
                        <Col className='col-lg-15'>
                            <Card className='text-center align-items-center' style={{ width: '18rem', borderColor: 'white'}}>
                            <Image style={{height: 220, width: 220}} roundedCircle
                                src="/images/teamImages/Ling Ren.png"
                            />
                            <Card.Body >
                                <Card.Title className='title-txt' style={orangeFont}>Ling Ren</Card.Title>
                                <Card.Text className='position-txt'>
                                    Asistant Professor
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer style={{backgroundColor: 'white', borderColor: 'white'}}>
                                <Button href='' className='contact-btn'>Contact</Button>
                            </Card.Footer>
                            </Card>
                        </Col>
                        <Col className='col-lg-15'>
                            <Card className='text-center align-items-center' style={{ width: '18rem', borderColor: 'white'}}>
                            <Image style={{height: 220, width: 220}} roundedCircle
                                src="/images/teamImages/Grigore.png"
                            />
                            <Card.Body >
                                <Card.Title className='title-txt' style={orangeFont}>Grigore Rosu</Card.Title>
                                <Card.Text className='position-txt'>
                                    Professor of Computer Science
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer style={{backgroundColor: 'white', borderColor: 'white'}}>
                                <Button href='' className='contact-btn'>Contact</Button>
                            </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{paddingTop: 50}}>
                        <Col className='col-lg-15'>
                            <Card className='text-center align-items-center' style={{ width: '18rem', borderColor: 'white'}}>
                            <Image style={{height: 220, width: 220}} roundedCircle
                                src="/images/teamImages/Vishal.png"
                            />
                            <Card.Body >
                                <Card.Title className='title-txt' style={orangeFont}>Vishal Sachdev</Card.Title>
                                <Card.Text className='position-txt'>
                                    Clinical Associate Professor of Business Administration aand RC Evans Data Analytics Fellow
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer style={{backgroundColor: 'white', borderColor: 'white'}}>
                                <Button href='' className='contact-btn'>Contact</Button>
                            </Card.Footer>
                            </Card>
                        </Col>
                        <Col className='col-lg-15'>
                            <Card className='text-center align-items-center' style={{ width: '18rem', borderColor: 'white'}}>
                            <Image style={{height: 220, width: 220}} roundedCircle
                                src="/images/teamImages/sridhar.png"
                            />
                            <Card.Body >
                                <Card.Title className='title-txt' style={orangeFont}>Sridhar Seshadri</Card.Title>
                                <Card.Text className='position-txt'>
                                    Alan J. and Joyce D. Baltz Enfowed Professor and Area Chair
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer style={{backgroundColor: 'white', borderColor: 'white'}}>
                                <Button href='' className='contact-btn'>Contact</Button>
                            </Card.Footer>
                            </Card>
                        </Col>
                        <Col className='col-lg-15'>
                            <Card className='text-center align-items-center' style={{ width: '18rem', borderColor: 'white'}}>
                            <Image style={{height: 220, width: 220}} roundedCircle
                                src="/images/teamImages/Lav.png"
                            />
                            <Card.Body >
                                <Card.Title className='title-txt' style={orangeFont}>Lav R. Varshney</Card.Title>
                                <Card.Text className='position-txt'>
                                    Associate Professor
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer style={{backgroundColor: 'white', borderColor: 'white'}}>
                                <Button href='' className='contact-btn'>Contact</Button>
                            </Card.Footer>
                            </Card>
                        </Col>
                        <Col className='col-lg-15'>
                            <Card className='text-center align-items-center' style={{ width: '18rem', borderColor: 'white'}}>
                            <Image style={{height: 220, width: 220}} roundedCircle
                                src="/images/teamImages/PV.png"
                            />
                            <Card.Body >
                                <Card.Title className='title-txt' style={orangeFont}>Pramod Viswanath</Card.Title>
                                <Card.Text className='position-txt'>
                                    Director of Decentralized Systems Lab at UIUC
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer style={{backgroundColor: 'white', borderColor: 'white'}}>
                                <Button href='' className='contact-btn'>Contact</Button>
                            </Card.Footer>
                            </Card>
                        </Col>
                        <Col className='col-lg-15'>
                            <Card className='text-center align-items-center' style={{ width: '18rem', borderColor: 'white'}}>
                            <Image style={{height: 220, width: 220}} roundedCircle
                                src="/images/teamImages/Yang.png"
                            />
                            <Card.Body >
                                <Card.Title className='title-txt' style={orangeFont}>Yang Wang</Card.Title>
                                <Card.Text className='position-txt'>
                                    Asistant Professor
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer style={{backgroundColor: 'white', borderColor: 'white'}}>
                                <Button href='' className='contact-btn'>Contact</Button>
                            </Card.Footer>
                            </Card>
                        </Col>
                        
                    </Row>

                    
                </Container>
                
                
                    
            </div>
        )
    }
}