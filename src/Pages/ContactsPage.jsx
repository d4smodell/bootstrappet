import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'

const Contacts = props => {
    return (
        <Container style={{width: '500px'}}>
            <h1 className={'text-center'}>Contact Us</h1>
            <Form>
                <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' placeholder='Enter Email' />
                    <Form.Text>
                        We'll never give You up...
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control as='textarea' rows='3' />
                </Form.Group>
                <Form.Group controlId='formBasicCheckBox'>
                    <Form.Check type='checkbox' label='Take Me out'/>
                    <Button variant='primary' type='submit'>Submit</Button>
                </Form.Group>
            </Form>
        </Container>
    )
}

export default Contacts