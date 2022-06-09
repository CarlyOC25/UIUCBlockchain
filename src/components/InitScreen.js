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
            <div className='backdrop'>
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
                </div>

            </div>
        )
    }
}