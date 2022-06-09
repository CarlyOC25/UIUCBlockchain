import React, {Component} from 'react';
import { Container, Form, Button, Row, Col} from 'react-bootstrap'
import "../impactheadline.css"

export default class Impactheadline extends Component {
    render() {
        return ( 
            <div className='background-impact align-items-center d-flex'>
               <Container className='impactBox'>
                   <h1 className='impact-header'>
                        <p style={{display: 'inline', color: 'white', backgroundColor: '#FF552E', paddingLeft: 5, paddingRight: 5, marginRight: 15}}></p> Impact Area Headline
                   </h1>
                   <Row >
                       <Col lg={6} sm={12}>
                            <h1 className='impact-title'>Agriculture</h1>
                            <p className='impact-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac metus est. Pellentesque eros urna, convallis non ullamcorper id, luctus a augue. Vivamus sit amet lectus id justo lacinia elementum. Integer vel mi porttitor, pulvinar erat nec, iaculis sapien. </p>
                       </Col>
                       <Col lg={6} sm={12}> 
                            <h1 className='impact-title'>Education</h1>
                            <p className='impact-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac metus est. Pellentesque eros urna, convallis non ullamcorper id, luctus a augue. Vivamus sit amet lectus id justo lacinia elementum. Integer vel mi porttitor, pulvinar erat nec, iaculis sapien. </p>
                       </Col>
                   </Row>
                   <Row>
                       <Col lg={6} sm={12}>
                            <h1 className='impact-title'>Finance</h1>
                            <p className='impact-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac metus est. Pellentesque eros urna, convallis non ullamcorper id, luctus a augue. Vivamus sit amet lectus id justo lacinia elementum. Integer vel mi porttitor, pulvinar erat nec, iaculis sapien. </p>
                       </Col>
                       <Col lg={6} sm={12}>
                            <h1 className='impact-title'>Healthcare</h1>
                            <p className='impact-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac metus est. Pellentesque eros urna, convallis non ullamcorper id, luctus a augue. Vivamus sit amet lectus id justo lacinia elementum. Integer vel mi porttitor, pulvinar erat nec, iaculis sapien. </p>
                       </Col>
                   </Row>
               </Container>
            </div>
        )
    }
}