import React from 'react'
import CarouselBox from './../Components/CarouselBox'
import { CardDeck, Container, Button, Card } from 'react-bootstrap'

const Home = props => {
    return (
        <>
        <CarouselBox />
        <Container>
            <h2 className={'text-center'}>Us</h2>
            <CardDeck>
                <Card className='text-light bg-dark'>
                    <Card.Img variant='top' src='https://sun9-64.userapi.com/EGK90nn6H2rX6oGPh304zSOxxrJsXNRLmW7S6w/rFfkgSo_bMA.jpg'/>
                    <Card.Body>
                        <Card.Title>Parov Stelar</Card.Title>
                        <Card.Text>
                            Shine
                        </Card.Text>
                        <Button className='btn btn-secondary'>Never</Button>
                    </Card.Body>
                </Card>
                <Card className='text-light bg-dark'>
                    <Card.Img width={400} height={350} variant='top' src='https://sun9-47.userapi.com/c206620/v206620219/1f24d/DG3RZ56tDdo.jpg'/>
                    <Card.Body>
                        <Card.Title>Coffe and Sigarettes</Card.Title>
                        <Card.Text>
                            Goin out the West
                        </Card.Text>
                        <Button className='btn btn-secondary'>Smoke harm</Button>
                    </Card.Body>
                </Card>
                <Card className='text-light bg-dark'>
                    <Card.Img width={400} height={300} variant='top' src='https://sun9-33.userapi.com/c624729/v624729422/2943f/egVuvosTmXM.jpg'/>
                    <Card.Body>
                        <Card.Title>Tyler</Card.Title>
                        <Card.Text>
                        Fight Club
                        </Card.Text>
                        <Button className='btn btn-secondary'>Us</Button>
                    </Card.Body>
                </Card>
            </CardDeck>
        </Container>
        </>
    )
}

export default Home