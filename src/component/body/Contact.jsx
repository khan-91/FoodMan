import { Component } from 'react'
import { Form, Button, Container, Row, Col, FormGroup } from 'react-bootstrap';
export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
      agree: false,
      contactType: 'Tel.',
      message: ""

    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = event => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    console.log(this.state);
    event.preventDefault();

  }

  render() {
    return (
      <Container className="mt-5" style={{ maxWidth: '600px' }}>
        <h2>Send Us Your Feedback</h2>
        <Form className='mt-5' style={{ textAlign: 'left' }} onSubmit={this.handleSubmit}>
          <Form.Group controlId="formName" className="mb-3">
            <Row>
              <Col xs={6}>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstname"
                  value={this.state.firstname}
                  placeholder="Enter your first name"
                  onChange={this.handleInputChange} />
              </Col>
              <Col xs={6}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastname"
                  value={this.state.lastname}
                  placeholder="Enter your last name"
                  onChange={this.handleInputChange} />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group controlId="formTel" className="mb-3">
            <Form.Label>Telephone Number</Form.Label>
            <Form.Control
              type="tel"
              name="telnum"
              value={this.state.telnum}
              placeholder="Enter your telephone number"
              onChange={this.handleInputChange} />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={this.state.email}
              placeholder="Enter your email address"
              onChange={this.handleInputChange} />
          </Form.Group>

          <Form.Group controlId="formAgree" className="mb-3">
            <Form.Check
              type="checkbox"
              label="May we contact you?"
              name="agree"
              checked={this.state.agree}
              onChange={this.handleInputChange} />
          </Form.Group>

          {this.state.agree && (
            <FormGroup controlId='fromContactType' className='mb-3'>
              <Form.Label>Preferred Contact</Form.Label>
              <Form.Select
                name='contactType'
                value={this.state.contactType}
                onChange={this.handleInputChange}
              >
                <option value="Tel.">Telephone</option>
                <option value="Email">Email</option>

              </Form.Select>

            </FormGroup>
          )}

          <Form.Group controlId="formMessage" className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              name='message'
              value={this.state.message}
              rows={4}
              placeholder="Write your message here..."
              onChange={this.handleInputChange} />
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