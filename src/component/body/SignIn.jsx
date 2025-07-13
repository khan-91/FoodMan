import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SignIn = () => {
    document.title = "SignIn"
    return (
        <div>
            <h3 style={{ padding: 10 }}>Sign In</h3>
            <Form style={{ padding: 45 }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-start w-100">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-start w-100'>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        label="Remember Me"
                        style={{ textAlign: 'left' }}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default SignIn