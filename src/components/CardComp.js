import React, {Component} from 'react';
import { Container, Image, Tab, Tabs, Card, Button } from 'react-bootstrap'
import "../tabs.css"
export default class CardComp extends Component {
    render() {
        return (
            <div>
                {/* Use JSON and map the text */}
                <Container>
                    {/* <Tabs
                    defaultActiveKey="Research"
                    
                    id="uncontrolled-tab-example"
                    className="mb-3 tabs-edit"
                    >
                        <Tab eventKey="Research" title="Research">
                            <div class="container">
                                <div class="tabs row">
                                    <Card className='text-center shadow' style={{ width: '18rem', marginRight: 60, paddingLeft: 0, paddingRight: 0, marginBottom: 10, marginLeft: 10, borderColor: 'white'}}>
                                    <Card.Img style={{padding:0, height: 125}}variant="top" src="/images/cardImages/BDI411.png" />
                                    <Card.Body>
                                        <Card.Title style={{height: 80, justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
                                            BDI 411:  <br/>
                                            Blockchain, Tokens, and their Business Applications 
                                        </Card.Title>
                                        <Card.Text>
                                        This course explores the development of blockchain technology and its application in business including via new constructs such as digital currencies, distributed ledgers, smart contracts, tokens, and decentralized autonomous organizations. 
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                    </Card>
                                    <Card className='text-center shadow' style={{ width: '18rem', marginRight: 60, paddingLeft: 0, paddingRight: 0, marginBottom: 10, marginLeft: 10, borderColor: 'white'}}>
                                    <Card.Img style={{padding:0}}variant="top" src="/images/cardImages/CS598.png" />
                                    <Card.Body>
                                        <Card.Title style={{height: 80, justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
                                        CS 598: <br/> Fault-Tolerant Distributed <br/> Algorithms
                                        </Card.Title>
                                        <Card.Text>
                                        This course was designed to teach blockchains in a manner consistent with the classic foundation of distributed computing. By contrasting Nakamoto's blockchain with classic consensus protocols, this course helps students understand the key innovations of blockchains. 
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                    </Card>
                                    <Card className='text-center shadow' style={{ width: '18rem', marginRight: 60, paddingLeft: 0, paddingRight: 0, marginBottom: 10, marginLeft: 10, borderColor: 'white'}}>
                                    <Card.Img style={{padding:0}}variant="top" src="/images/cardImages/Blockchain2023.png" />
                                    <Card.Body>
                                        <Card.Title style={{height: 80, justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
                                            Blockchain  <br/>
                                            Spring 2023
                                        </Card.Title>
                                        <Card.Text>
                                        This undergraduate-level course will debut in Spring 2023 and will focus on the concepts of Web 3, understanding how a blockchain works, the basics of crypto currencies and their use cases, Tokenomics, smart contracts, and more.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                    </Card>
                                    <Card className='text-center shadow' style={{ width: '18rem', marginRight: 60, paddingLeft: 0, paddingRight: 0, marginBottom: 10, marginLeft: 10, borderColor: 'white'}}>
                                    <Card.Img style={{padding:0}}variant="top" src="/images/cardImages/BlockchainAnalytics.png" />
                                    <Card.Body>
                                        <Card.Title style={{height: 80, justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
                                            Blockchain Analytics  <br/>
                                            Summer 2022
                                        </Card.Title>
                                        <Card.Text>
                                        The first four weeks of this course explores the context of blockchain analytics. After that, we move on to understanding the data that underlies the most popular chain, Ethereum, and understanding the data generated from smart contracts and then asking relevant questions, which students will answer using SQL and tools.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                    </Card>
                                    <Card className='text-center shadow' style={{ width: '18rem', marginRight: 60, paddingLeft: 0, paddingRight: 0, marginBottom: 10, marginLeft: 10, borderColor: 'white'}}>
                                    <Card.Img style={{padding:0}}variant="top" src="/images/cardImages/BADM350.png" />
                                    <Card.Body>
                                        <Card.Title style={{height: 80, justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
                                            BADM 350 
                                        </Card.Title>
                                        <Card.Text>
                                        In this course, students are introduced to concepts such as asymmetric cryptography, consensus mechanisms, Blockchain network scaling, smart contract, decentralized finance applications (DeFi) and organizations (DAO), Web3, NFTs, and Metaverse.                                         </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                    </Card>
                                </div>
                            </div>                           
                        </Tab>
                        <Tab eventKey="Projects" title="Projects">
                            
                        </Tab>
                        <Tab eventKey="Courses" title="Courses">
                            
                        </Tab> */}
                    {/* </Tabs> */}
                    <Tabs defaultActiveKey="profile" id='uncontrolled-tab-example'>
                            <Tab eventKey="home" title="Home">

                            </Tab>
                    </Tabs>
                </Container>
                {/* <Container fluid className='pb-5 pt-5 mt-5'style={{padding: 0}}>
                    <Image
                        src='/images/divider.png'
                    />
                </Container> */}
            </div>
        )
    }
}