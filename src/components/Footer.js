import React, {Component} from 'react';
import { Container, Image } from 'react-bootstrap'


export default class Footer extends Component {
    render() {
        return (
            <div>
                <Container fluid className='pt-5 mt-5' style={{backgroundColor: '#182849'}}>
                    <Container>
                        <Image 
                            src='/images/UIUCWatermark.png'
                        />
                        <h1 className='pt-3 pb-2' style={{color: 'white'}}>Blockchain</h1>
                        <p className='pt-3' style={{color: 'white'}}>
                            Magelli Office of Experiential Learning <br/>
                            2015 Business Instructional Facility <br/>
                            515 East Gregory Drive  <br/> 
                            Champaign, IL 61820
                        </p>
                        <p className='pt-5 pb-4' style={{color: 'white'}}>
                            Phone:217-300-2405
                        </p>
                    </Container>
                </Container>

            </div>
        )
    }
}