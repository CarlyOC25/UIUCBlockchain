import React, {Component} from 'react';
import { Col, Row, Container, Image} from 'react-bootstrap'


export default class Info extends Component {
    render() {
        // const colored  
        return (
            <div style={{display: 'inline'}}>
    
                <Container fluid>
                    <Row>
                        <Col>
                            <Image 
                                src = "images/studentsWorking.png"
                                width = {708}
                                height = {483.75}
                            />
                        </Col>
                        
                        <Col>
                        <Container>
                            <h1 className = "mt-5 pt-2 header-text" style ={{textAlign: "left", wordSpacing: 7}}>
                                    <p style={{display: 'inline', color: 'white', backgroundColor: '#FF552E', paddingLeft: 10, paddingRight: 10}}>Blockchain</p> at UIUC
                                </h1>
                                <br/>
                                <p  className = "body-text" style ={{textAlign: "left"}}>
                                    As a top tier research institution with a student population of over 50k learners, the University of Illinois is well positioned to help meet the talent demand within the Blockchain industry while contributing to deep research, and translational work that leads to innovative new start-ups. Using our academic rigor as a top 10 University in both Business and Engineering, we supplement the student experience with hands-on projects at every level of instruction.
                                </p>
                        </Container>
                        </Col>
                    </Row>
                </Container>
                
            </div>
        )
    }
}