import React, {Component} from 'react';
import { Container, Form, Button, Row, Col} from 'react-bootstrap'
import "../impactheadline.css"

export default class Impactheadline extends Component {
    render() {
        return ( 
            <div className='background-impact align-items-center d-flex'>
               <Container className='impactBox'>
                   <h1 className='impact-header'>
                        <p style={{display: 'inline', color: 'white', backgroundColor: '#FF552E', paddingLeft: 5, paddingRight: 5, marginRight: 15}}></p> Areas of Impact
                   </h1>
                   <Row >
                       <Col lg={6} sm={12}>
                            <h1 className='impact-title'>Healthcare</h1>
                            <p className='impact-text'>Working with OSF to transform the way data is used in medical research and in practice. </p>
                       </Col>
                       <Col lg={6} sm={12}> 
                            <h1 className='impact-title'>Finance</h1>
                            <p className='impact-text'>Advancing DeFi to promote access and equity to people everywhere. </p>
                       </Col>
                   </Row>
                   <Row>
                       <Col lg={6} sm={12}>
                            <h1 className='impact-title'>Accounting</h1>
                            <p className='impact-text'>Providing transparency and assurance to help businesses use digital money with confidence. </p>
                       </Col>
                       <Col lg={6} sm={12}>
                            <h1 className='impact-title'>Supply Chain</h1>
                            <p className='impact-text'>Provide consumers with transparency throughout the supply chain to ensure responsibly sourced goods. </p>
                       </Col>
                   </Row>
                   <Row>
                       <Col lg={6} sm={12}>
                            <h1 className='impact-title'>Social Innovation</h1>
                            <p className='impact-text'>Democratize access to capital and coordination of decentralized stakeholders around diversity, equity and inclusion. </p>
                       </Col>
                       <Col lg={6} sm={12}>
                            <h1 className='impact-title'>Education</h1>
                            <p className='impact-text'>Transforming access to education by aligning incentives of employers, employees, and educators. </p>
                       </Col>
                   </Row>
               </Container>
            </div>
        )
    }
}