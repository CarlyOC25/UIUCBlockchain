import React, {Component} from 'react';
import { Container} from 'react-bootstrap'
import './background.css'

export default class InitScreen extends Component {
    render() {
        return (
            <div className='body'>
                <Container fluid style={{padding:0}}>
                    <div className='ocean'>
                        <div className='wave'>
                        
                        </div>
                    </div>
                </Container>
                
            </div>
        )
    }
}