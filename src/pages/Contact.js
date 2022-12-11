import React from "react";
import Form from "react-bootstrap/Form";
import "../styles/Contact.css";
import Button from "react-bootstrap/Button";

function Contact() {
  return (
    <div className="form">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="textarea" placeholder="What is your name?" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message:</Form.Label>
          <Form.Control as="textarea" rows={10} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div className="thanks">
        I'd be happy to try and answer any quesitons you have for me. Thank you
        for visiting my portfolio!
      </div>
    </div>
  );
}

export default Contact;
