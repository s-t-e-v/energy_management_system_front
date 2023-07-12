import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';

import Link from "next/link";

import styles from "../styles/Home.module.css"

interface Props {}

const SignupForm: React.FC<Props> = () => {
    return (
        <div className={`${styles.main_content} mx-5 mx-sm-0`}>

            <h2 className='mb-4'>Sign Up</h2>

            <Form>
                <Row>
                    <Col sm={6}>
                        <Form.Group className='mb-3' controlId='Firstname'>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type='text' placeholder='Placeholder'/>
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group className='mb-3' controlId='Lastname'>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type='text' placeholder='Placeholder'/>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className='mb-3' controlId='Username'>
                    <Form.Label>Userame</Form.Label>
                    <Form.Control type='text' placeholder='Placeholder'/>
                </Form.Group>
                <Form.Group className='mb-3' controlId='Email'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type='email' placeholder='Placeholder'/>
                </Form.Group>
                <Form.Group className='mb-3' controlId='Password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Placeholder'/>
                    <Form.Text className="text-muted">
                        It must be a combination of minimun 8 letters, numbers, and symbols.
                    </Form.Text>
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Sign up
                </Button>
            </Form>

            <hr className='my-4'/>

            <p><Link href="/">Already have an account?</Link></p>


        </div>
    )
    
}

export default SignupForm;