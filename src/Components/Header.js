import React from 'react'
import { Navbar, Nav, FormControl, Button, Container, Form } from 'react-bootstrap'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from '../Pages/HomePage'
import About from './../Pages/AboutPage'
import Contacts from './../Pages/ContactsPage'
import Blog from './../Pages/BlogPage'

const Header = props => {
        return (
            <>
            <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand  href='/'>
                        <img
                            src={'https://i3.cpcache.com/image/81049195_225x225.png'}
                            height={'50'}
                            width={'50'}
                            className={'d-inline-block align-top'}
                            alt=''/>
                    </Navbar.Brand >
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className={'mr-auto'}>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/about'>About Us</Nav.Link>
                            <Nav.Link href='/contacts'>Contacts</Nav.Link>
                            <Nav.Link href='/blog'>Blog</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type='text' placeholder='Search' className='mr-sm-2' />
                            <Button className='btn btn-secondary'>Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contacts' component={Contacts} />
                    <Route exact path='/blog' component={ Blog} />
                </Switch>
            </Router>
            </>
        )
}

export default Header