import React, {Component} from 'react';
import { Button} from 'react-bootstrap'
import "../info.css"
import "../missionStatement.css"
export default class Info extends Component {
    render() {
        return (     
            <div id='about' className='background-info'>
                <div className='general-info'>
                    <div className='info-image' />
                    <div  className='info-body'>
                        <div className='info-header'>
                            <div className='orangeBar' />
                            <p>Leaders in Blockchain</p>
                        </div>
                        <div className='info-text'>
                            As a top tier research institution with a student population of over 50k learners, the University of Illinois is well positioned to help meet the talent demand within the Blockchain industry while contributing to deep research, and translational work that leads to innovative new start-ups. Using our academic rigor as a top 10 University in both Business and Engineering, we supplement the student experience with hands-on projects at every level of instruction.
                        </div>     
                    </div>     
                </div>
                <div className='connect-info'>
                    <div className='sharingKnowledge'>
                        <h1 className='mission-header'>Sharing Knowledge</h1>
                        <h4 className='mission-desc'>The University of Illinois has a land-grant mission. This means that we are passionate about democratizing education. As Blockchain continues to gain relevance, our mission is to equip this generation of Web3 workers with the skills and experiences necessary to meet the industry demand.</h4>
                    </div>
                    <div className='callToAction'>
                        <h1 className='button-header'>Connect with us!</h1> 
                        <Button className='button-txt'>leave your Contact</Button>
                    </div>
                </div>
            </div>
        )
    }
}