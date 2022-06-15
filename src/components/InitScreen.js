import React, {Component} from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'
import '../background.css'

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  

export default class InitScreen extends Component {
    render() {
        return (
            <div className='backdrop justify-content-center d-flex'>
                <div className='swiggle'>
                <Container>
                    <Row>
                        <Col lg={8}>
                            <h1 className='hero-header'>Blockchain at Illinois</h1>
                            <h1 className='hero-desc'>In 1993, researchers from the University of Illinois helped transform the internet by designing the first graphical web browser. Come join us to help build the next evolution of the internet in Web3.</h1>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Container>
                <Container className='bottomTxt'>
                    <Row className=''>
                        <Col lg={4} sm={12}>
                            <h1 className='stats'>#5</h1>
                            <h1 className='statsDesc'>Top Universities for <br></br>Blockchain in U.S</h1>
                        </Col>
                        <Col lg={4} sm = {12}>
                            <h1 className='stats'>16k +</h1>
                            <h1 className='statsDesc'>Engineerning and Business <br></br>students</h1>
                        </Col>
                        <Col lg={4} sm = {12}>
                            <h1 className='stats'>$625 M</h1>
                            <h1 className='statsDesc'>Spending in R&D Annually</h1>
                        </Col>
                    </Row>
                </Container>
                </div>

            </div>
        )
    }
}