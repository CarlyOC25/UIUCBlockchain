import React, {Component} from 'react';
import { Col, Row, Container, Image} from 'react-bootstrap'
import "../info.css"

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
            // <div style={{display: 'inline'}}>
    
            //     <Container fluid>
            //         <Row>
            //             <Col>
            //                 <Image 
            //                     src = "images/studentsWorking.png"
            //                     width = {708}
            //                     height = {483.75}
            //                 />
            //             </Col>
                        
            //             <Col>
            //             <Container>
            //                 <h1 className = "mt-5 pt-2 header-text" style ={{textAlign: "left", wordSpacing: 7}}>
            //                         <p style={{display: 'inline', color: 'white', backgroundColor: '#FF552E', paddingLeft: 10, paddingRight: 10}}>Blockchain</p> at UIUC
            //                     </h1>
            //                     <br/>
            //                     <p  className = "body-text" style ={{textAlign: "left"}}>
            //                         As a top tier research institution with a student population of over 50k learners, the University of Illinois is well positioned to help meet the talent demand within the Blockchain industry while contributing to deep research, and translational work that leads to innovative new start-ups. Using our academic rigor as a top 10 University in both Business and Engineering, we supplement the student experience with hands-on projects at every level of instruction.
            //                     </p>
            //             </Container>
            //             </Col>
            //         </Row>
            //     </Container>
                
            // </div>
            
            <div >
                <div>
                    <Rule color = 'rgba(255,86,45, 1)' />
                </div>
                <div className='info-background'>

                
                <Container fluid className='info-image'>
                    <Container>
                        <Row>
                        <Col classN>
                        
                        </Col>
                        <Col lg={7} className='colInfo d-flex align-items-center justify-content-center'>
                            <h1  className='info-header' style ={{textAlign: "left", wordSpacing: 7}}>
                                     <p style={{display: 'inline', color: 'white', backgroundColor: '#FF552E', paddingLeft: 10, paddingRight: 10}}>Blockchain</p> at UIUC
                            
                                    <br></br>
                                    <br></br>
                                 <p className='info-body-text' style ={{textAlign: "left", marginBottom: 0}}>
                                     As a top tier research institution with a student population of over 50k learners, the University of Illinois is well positioned to help meet the talent demand within the Blockchain industry while contributing to deep research, and translational work that leads to innovative new start-ups. Using our academic rigor as a top 10 University in both Business and Engineering, we supplement the student experience with hands-on projects at every level of instruction.
                                 </p>     
                            </h1>     
                        </Col>
                        </Row>
                        
                    
                    </Container>
                </Container>
                </div>
            </div>
        )
    }
}