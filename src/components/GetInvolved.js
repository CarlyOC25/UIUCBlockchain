import React, {Component} from 'react';
import { Col, Container, Row, Image} from 'react-bootstrap'
import '../getInvolved.css'
export default class GetInvolved extends Component {
    render() {
        return (
            <div>
                <Container>
                    <h1 className = "mt-5 pt-2 header-text" style ={{textAlign: "left"}}>
                       <p style={{display: 'inline', color: 'white', backgroundColor: '#FF552E', paddingLeft: 6, paddingRight: 6}}>Get Involved</p> in Blockchain @ UIUC 
                    </h1>
                </Container>
                <Container>

                
                <Row className='align-items-center'>
                    <Col>
                        <Image 
                            src='/images/blockchain.png'
                            width={419.98}
                            height={311.6}
                        />
                    </Col>
                    <Col>
                        <Container>
                            <ul>
                                <li className='body-text'>Help us raise early-stage funding, give students the financial stability to create freely.</li>
                                <li className='body-text'>Help us set more deeply integrate selected projects into the blockchain community and inspire sustainable connections.</li>
                                <li className='body-text'>Become one of the starting members in the UIUC blockchain community. We want the most promising and innovative ideas to be brought forth, benefiting the blockchain community.</li>
                            </ul>
                        </Container>
                    </Col>
           
                    
                </Row>
                </Container>
                
            </div>
        )
    }
}<Container fluid className='info-image'>
<Container>
    <Row>
    <Col>
    
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