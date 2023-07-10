import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar className='navbar'>
                <Container>
                    <h3 className=''>Moon Yoga</h3>
                    <Nav className='menu-list'>
                        <NavLink to ="/home">Home</NavLink>
                        <NavLink to ="/contact">Contact Us</NavLink>
                        <NavLink to ="/about">About Us</NavLink>
                        <NavLink to ="/courses">Courses</NavLink>
                        <NavLink to ="/trainer">Trainers</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;