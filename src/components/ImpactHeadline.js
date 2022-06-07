import React, {Component} from 'react';
import { Container, Form, Button, Row, Col} from 'react-bootstrap'
import "../impactheadline.css"

export default class Impactheadline extends Component {
    render() {
        return ( 
            <div className='background-impact'>
               <Container className='background-impact justiffy-items-center'>
                    <h1 style={{display: 'inline', color: 'white', backgroundColor: '#FF552E', paddingLeft: 5, paddingRight: 5, marginRight: 15}}></h1> Impact Area Headline
                   <Row>
                       <Col>
                            <h1>Agriculture</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac metus est. Pellentesque eros urna, convallis non ullamcorper id, luctus a augue. Vivamus sit amet lectus id justo lacinia elementum. Integer vel mi porttitor, pulvinar erat nec, iaculis sapien. </p>
                       </Col>
                       <Col>
                            <h1>Education</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac metus est. Pellentesque eros urna, convallis non ullamcorper id, luctus a augue. Vivamus sit amet lectus id justo lacinia elementum. Integer vel mi porttitor, pulvinar erat nec, iaculis sapien. </p>
                       </Col>
                   </Row>
                   <Row>
                       <Col>
                            <h1>Finance</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac metus est. Pellentesque eros urna, convallis non ullamcorper id, luctus a augue. Vivamus sit amet lectus id justo lacinia elementum. Integer vel mi porttitor, pulvinar erat nec, iaculis sapien. </p>
                       </Col>
                       <Col>
                            <h1>Healthcare</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac metus est. Pellentesque eros urna, convallis non ullamcorper id, luctus a augue. Vivamus sit amet lectus id justo lacinia elementum. Integer vel mi porttitor, pulvinar erat nec, iaculis sapien. </p>
                       </Col>
                   </Row>
               </Container>
            </div>
        )
    }
}