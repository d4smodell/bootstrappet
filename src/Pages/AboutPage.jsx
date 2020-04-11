import React from 'react'
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap'

const About = props => {
    return (
        <Container>
            <Tab.Container id='ledt-tabs-example' defaultActiveKey='first'>
                <Row>
                    <Col sm={3}>
                        <Nav variant='pills' className='flex-column mt-2'>
                            <Nav.Item>
                                <Nav.Link eventKey='first'>Clerks</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='second'>Depeche</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='third'>Rammstein</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='fourth'>Jay and Silent Bob</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='fifth'>Mode</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content className={'mt-3'}>
                            <Tab.Pane eventKey='first'>
                                <img src='https://sun9-3.userapi.com/c852236/v852236317/17ae30/9OBVyZxJMFw.jpg' alt=''/>
                                <p>Clerks is a 1994 American independent black-and-white buddy comedy film written, directed, and co-produced by Kevin Smith. Starring Brian O'Halloran and Jeff Anderson, it presents a day in the lives of titular store clerks Dante Hicks (O'Halloran) and Randal Graves (Anderson), along with their acquaintances. Clerks is the first of Smith's View Askewniverse films, and introduces several recurring characters, notably Jay and Silent Bob (Jason Mewes and Smith).</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey='second'>
                                <img src='https://sun9-24.userapi.com/c840431/v840431587/8b70d/tHHhQsLcYJo.jpg' alt=''/>
                                <p>Clerks is a 1994 American independent black-and-white buddy comedy film written, directed, and co-produced by Kevin Smith. Starring Brian O'Halloran and Jeff Anderson, it presents a day in the lives of titular store clerks Dante Hicks (O'Halloran) and Randal Graves (Anderson), along with their acquaintances. Clerks is the first of Smith's View Askewniverse films, and introduces several recurring characters, notably Jay and Silent Bob (Jason Mewes and Smith).</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey='third'>
                                <img src='https://sun9-39.userapi.com/c857320/v857320477/10a101/vWjRQ0x5o7Y.jpg' alt=''/>
                                <p>Clerks is a 1994 American independent black-and-white buddy comedy film written, directed, and co-produced by Kevin Smith. Starring Brian O'Halloran and Jeff Anderson, it presents a day in the lives of titular store clerks Dante Hicks (O'Halloran) and Randal Graves (Anderson), along with their acquaintances. Clerks is the first of Smith's View Askewniverse films, and introduces several recurring characters, notably Jay and Silent Bob (Jason Mewes and Smith).</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey='fourth'>
                                <img src='https://sun9-40.userapi.com/c626225/v626225676/3a708/fXN6e_vXhy4.jpg' alt=''/>
                                <p>Clerks is a 1994 American independent black-and-white buddy comedy film written, directed, and co-produced by Kevin Smith. Starring Brian O'Halloran and Jeff Anderson, it presents a day in the lives of titular store clerks Dante Hicks (O'Halloran) and Randal Graves (Anderson), along with their acquaintances. Clerks is the first of Smith's View Askewniverse films, and introduces several recurring characters, notably Jay and Silent Bob (Jason Mewes and Smith).</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey='fifth'>
                                <img src='https://sun9-14.userapi.com/K-SBWq0yshGj95flwKmXV1G3XOxezRj0xxyhOw/qMItRSxjYsk.jpg' alt=''/>
                                <p>Clerks is a 1994 American independent black-and-white buddy comedy film written, directed, and co-produced by Kevin Smith. Starring Brian O'Halloran and Jeff Anderson, it presents a day in the lives of titular store clerks Dante Hicks (O'Halloran) and Randal Graves (Anderson), along with their acquaintances. Clerks is the first of Smith's View Askewniverse films, and introduces several recurring characters, notably Jay and Silent Bob (Jason Mewes and Smith).</p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    )
}

export default About