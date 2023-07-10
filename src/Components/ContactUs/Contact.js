import React from 'react';
import { Form, FormGroup, FormLabel } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div className='image-contain'>
                <img src="img/contact.jpg" alt="" />
            </div>
           <div className='d-flex justify-content-lg-around mt-5 mb-5'>
            <div>
                <h4>If you Are Interested</h4>
                <h1>THEN</h1>
                <h3>Get In Touch</h3>
            </div>
            <div className='w-50 mb-20'>
            <Form>
                <FormGroup className=''>
                    <FormLabel>Full Name</FormLabel>
                    <Form.Control type='Name' placeholder='Your Name '></Form.Control>
                </FormGroup>
                <Form.Group className="mb-10" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
            </div>
           </div>
        </div>
    );
};

export default Contact;