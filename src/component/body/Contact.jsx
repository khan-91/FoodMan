import React, { Component } from 'react'
import { Form, Button, Container, Row, Col, FormGroup } from 'react-bootstrap';
export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      telnum: "",
      emaill: "",
      agree: false,
      contactType: 'Tel.',
      message: ""

    }
  }
  render() {
    return (
      <Container className="mt-5" style={{ maxWidth: '600px' }}>
        <h2>Contact Us</h2>
        <Form className='mt-5' style={{ textAlign: 'left' }}>
          <Form.Group controlId="formName" className="mb-3">
            <Row>
              <Col xs={6}>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="firstname" value={this.state.firstname} placeholder="Enter your first name" />
              </Col>
              <Col xs={6}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name="lastname" value={this.state.lastname} placeholder="Enter your last name" />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group controlId="formTel" className="mb-3">
            <Form.Label>Telephone Number</Form.Label>
            <Form.Control type="tel" name="telnum" value={this.state.telnum} placeholder="Enter your telephone number" />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" value={this.state.emaill} placeholder="Enter your email address" />
          </Form.Group>

          <Form.Group controlId="formAgree" className="mb-3">
            <Form.Check
              type="checkbox"
              label="May we contact you?"
              name="agree"
              checked={this.state.agree}
            />
          </Form.Group>

          {this.state.agree && (
            <FormGroup controlId='fromContactType' className='mb-3'>
              <Form.Label>Preferred Contact</Form.Label>
              <Form.Select
                name='contactType'
                value={this.state.contactType}
              >
                <option value="Tel.">Telephone</option>
                <option value="Email">Emaill</option>

              </Form.Select>

            </FormGroup>
          )}

          <Form.Group controlId="formMessage" className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Write your message here..." />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    )
  }
}

export default Contact