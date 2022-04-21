import React, {Component} from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap'
import "../footer.css"

export default class Footer extends Component {
    render() {
        return (
            <div>
                <Container fluid className='pt-5 FooterContainers' style={{backgroundColor: '#182849'}}>
                    <Container>
                        <Image id='uiuc'
                            src='/images/UIUCWatermark.png'
                        />
                        <h1 className='pt-3 pb-2 footer1' style={{color: 'white'}}>Blockchain</h1>
                        
                        <Row>
                            <Col>
                                <p className='pt-3 footer2' style={{color: 'white'}}>
                                Gies College of Business <br></br>
                                515 East Gregory Drive <br></br>
                                Champaign, IL 61820
                                <br/>
                                <br></br>
                                Phone: 217-300-7327
                                </p>                         
                            </Col>
                            <Col>
                                <p className='pt-3 footer2' style={{color: 'white'}}>
                                The Grainger College of Engineering
                                306 Engineering Hall MC 266
                                1308 West Green Street
                                Urbana, IL 61801
                                </p>
                            </Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                        </Row>
                       
                           
                    </Container>
                </Container>

            </div>
        )
    }
}