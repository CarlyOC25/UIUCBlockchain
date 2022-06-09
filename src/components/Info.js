import React, {Component} from 'react';
import { Col, Row, Container, Button} from 'react-bootstrap'
import "../info.css"
import "../missionStatement.css"
export default class Info extends Component {
    render() {
        const Rule = ({ color }) => (
            <div
              style={{
                borderColor: color,
                backgroundColor: color,
                height: 12,
                padding: 0,
                margin: 0,
                zIndex: 1
              }}
            />
          );
        // const colored  
        return (    
            <div className='background-info cased'>
                <div>
                    <Rule color = 'rgba(255,86,45, 1)' />
                </div>
                <div className='studentImageBg'>
                    <Container>
                        <Row>
                            <Col>
                            
                            </Col>
                            <Col lg={7} className='colInfo d-flex align-items-center justify-content-center'>
                            <h1  className='info-header' style ={{textAlign: "left", wordSpacing: 7}}>
                                     <p style={{display: 'inline', color: 'white', backgroundColor: '#FF552E', paddingLeft: 5, paddingRight: 5, marginRight: 15}}></p> Leaders in Blockchain
                            
                                    <br></br>
                                    <br></br>
                                 <p className='info-body-text' style ={{textAlign: "left", marginBottom: 0}}>
                                     As a top tier research institution with a student population of over 50k learners, the University of Illinois is well positioned to help meet the talent demand within the Blockchain industry while contributing to deep research, and translational work that leads to innovative new start-ups. Using our academic rigor as a top 10 University in both Business and Engineering, we supplement the student experience with hands-on projects at every level of instruction.
                                 </p>     
                            </h1>     
                        </Col>
                        </Row>
                    </Container>

                    
                </div>
                <Container>
                    <Row className='d-flex justify-content-center'>
                        <Col>
                            <h1>Sharing Knowledge</h1>
                            <h4>The University of Illinois has a land-grant mission. This means that we are passionate about democratizing education. As Blockchain continues to gain relevance, our mission is to equip this generation of Web3 workers with the skills and experiences necessary to meet the industry demand.</h4>
                        </Col>
                        <Col className='text-center'>
                            <h1>Connect with us!</h1>
                            <Button className='button-txt'>leave your Contact</Button>
                        </Col>
                    </Row>    
                    </Container>
                
                
             

                
                
                
                
            </div>
        )
    }
}