import React, {Component} from 'react';
import { Card, Button, Container, Image} from 'react-bootstrap'
import TeamMembers from './TeamMembers.js'
import '../team.css'
export default class Team extends Component {
    render() {
        const orangeFont = {
            color: "#E45E39"
        }
        return (
            <div id='people'>   
                <Container className='body-meet'>
                    <h1  className='meet-header' style ={{textAlign: "left", wordSpacing: 7}}>
                        <p style={{display: 'inline', color: 'white', backgroundColor: '#FF552E', paddingLeft: 5, paddingRight: 5, marginRight: 15}}></p> Blockchain Team
                                
                    </h1> 
                    <div className='team-container'>
                        {TeamMembers.map(({ ID, Name, Title, College, Email, Website, ProfilePic}) => (
                            <Card id={ID} className='text-center align-items-center' style={{ width: '20rem', height: '100%', borderColor: 'white'}}>
                                <Image style={{height: 220, width: 220}} roundedCircle
                                    src={ProfilePic}
                                />
                                <Card.Body >
                                    <Card.Title className='title-txt' style={orangeFont}>{Name}</Card.Title>
                                    <Card.Text className='position-txt'>
                                        {Title} <br></br>{College}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer style={{backgroundColor: 'white', borderColor: 'white'}}>
                                    <Button href={Website} className='contact-btn'>Contact</Button>
                                </Card.Footer>
                            </Card> 
                        ))}
                    </div>
                                       
                </Container>
                
                
                    
            </div>
        )
    }
}