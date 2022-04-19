import React, {Component} from 'react';
import { Col, Container, Row, Image} from 'react-bootstrap'
import '../fonts.css'
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
}