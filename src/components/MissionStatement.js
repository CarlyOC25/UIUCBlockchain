import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap'


export default class MissionStatement extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <p>The University of Illinois has a land-grant mission. This means that we are passionate about democratizing education. As Blockchain continues to gain relevance, our mission is to equip this generation of Web3 workers with the skills and experiences necessary to meet the industry demand.</p>
                        </Col>
                        <Col>
                            <h1>Subscribe to our newsletter</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}