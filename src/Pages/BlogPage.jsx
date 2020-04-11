import React from 'react'
import { Container, Media, Col, Row, Form, Button } from 'react-bootstrap'

const Blog = props => {
    return (
        <Container>
            <Row >
                <Col md='9'>
                    <Media className={'m-5'}>
                        <img src='https://sun9-56.userapi.com/c636422/v636422851/9ae7/SIhBbXarsc0.jpg' alt='' width={150} height={150} className='mr-3' />
                        <Media.Body>
                            <h5>Blog Post</h5>
                            <p>'post</p>
                        </Media.Body>
                    </Media>
                    <Media className={'m-5'}>
                        <img src='https://sun9-56.userapi.com/c636422/v636422851/9ae7/SIhBbXarsc0.jpg' alt='' width={150} height={150} className='mr-3' />
                        <Media.Body>
                            <h5>Blog Post</h5>
                            <p>'post</p>
                        </Media.Body>
                    </Media>
                </Col>
            </Row>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows="3" />
                <Button className='btn btn-secondary'>Add Post</Button>
            </Form.Group>
        </Container>
    )
}

export default Blog