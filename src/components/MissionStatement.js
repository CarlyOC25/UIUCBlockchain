import React, {Component} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import "../missionStatement.css"

export default class MissionStatement extends Component {
    render() {
        return (
            <div className='mission-bg'>
                <Container>
                    <Row className='d-flex justify-content-center'>
                        <Col>
                            <h1 className='mission-header'>Mission Statement</h1>
                            <h1 className='mission-desc'>The University of Illinois has a land-grant mission. This means that we are passionate about democratizing education. As Blockchain continues to gain relevance, our mission is to equip this generation of Web3 workers with the skills and experiences necessary to meet the industry demand.</h1>
                        </Col>
                        <Col className='text-center' style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                            
                            <p className='button-header'>Stay in Touch!
                                <br/>
                            <Button className='button-txt'>leave your Contact</Button>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}