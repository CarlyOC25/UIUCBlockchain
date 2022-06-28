import React, {Component} from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'
import '../background.css'

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  

export default class InitScreen extends Component {
    render() {
        return (
            //<div className='backdrop justify-content-center d-flex'>
            <div className='backdrop'>
                <div className='hero-content'>
                    <div className='topTxt'>
                        <h1 className='hero-header'>Blockchain at Illinois</h1>
                        <h1 className='hero-desc'>In 1993, researchers from the University of Illinois helped transform the internet by designing the first graphical web browser. We continue that heritage as a top blockchain university backed by our strong business and engineering research.</h1>
                    </div>
                    <div className='bottomTxt'>
                        <div>
                            <h1 className='stats'>#5</h1>
                            <h1 className='statsDesc'>cTop Universities for <br></br>Blockchain in U.S</h1>
                        </div>
                        <div className='divider' />
                        <div>
                            <h1 className='stats'>22k +</h1>
                            <h1 className='statsDesc'>Engineerning and Business <br></br>students</h1>
                        </div>
                        <div className='divider' />
                        <div>
                            <h1 className='stats'>$625 M</h1>
                            <h1 className='statsDesc'>Spending in R&D Annually</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}