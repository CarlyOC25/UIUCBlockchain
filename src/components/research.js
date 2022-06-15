import React, {Component} from 'react';
import { Container, Image, Tab, Tabs, Card, Row, Col } from 'react-bootstrap'
import { data } from '../../../data'
import "../tabs.css"

const CardComp = () => {
    
    const renderCard = (card, index) => {
        return (
            <div>
               
                <Col lg={3}key={data.id}>
                    <Card style={{}}>
                    <Card.Body>
                        <Card.Img variant='top' src={card.image}></Card.Img>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>{card.text}</Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
              
            {/* <Container fluid className='pb-5 pt-5 mt-5'style={{padding: 0}}>
                <Image
                    src='/images/divider.png'
                />
                </Container> */}
            </div>
        );
    };

    return <div>{researchInfo.map(renderCard)}</div>
    

};

export default CardComp;


