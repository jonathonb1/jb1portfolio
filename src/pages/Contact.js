import React from "react";
import Form from "react-bootstrap/Form";
import "../styles/Contact.css";
import Button from "react-bootstrap/Button";

function Contact() {
  return (
    <div className="form">
      <div className="section1">
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
      </div>

      <div className="contactinfo">
        <span>Want to get into contact?</span>
        <address>
          Sacramento, CA
          <br />
          Phone: <a href="tel:408-802-4511">408-802-4511</a>
          <br />
          Email:{" "}
          <a href="mailto://jonathon.biala@gmail.com">
            jonathon.biala@gmail.com
          </a>
        </address>
        <span>
          <strong>I'd love to hear from you!</strong>
        </span>
      </div>
    </div>
  );
}

export default Contact;
