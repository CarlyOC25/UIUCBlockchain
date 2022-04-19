import React, {Component} from 'react';
import { Container, Image } from 'react-bootstrap'
import './background.css'

export default class InitScreen extends Component {
    render() {
        return (
            <div>
                <Container fluid className='backdrop'>
                    <Container>
                        <h1>Leading the web3</h1>
                        <Image style={{position: 'relative', left: 500}}
                            src="/images/Group 31.png"
                            width={550}
                        />
                    </Container>
                </Container>
            </div>
        )
    }
}