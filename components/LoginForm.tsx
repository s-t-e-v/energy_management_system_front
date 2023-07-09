import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Link from "next/link";

interface Props {}

const LoginForm: React.FC<Props> = () => {
    return (
        <div className='mt-5 mx-5 mx-sm-0 '>

            <h2 className='mb-4'>Log In</h2>

            <Form>
                <Form.Group className='mb-3' controlId='Email'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type='email' placeholder='Placeholder'/>
                </Form.Group>
                <Form.Group className='mb-3' controlId='Password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Placeholder'/>
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Log In
                </Button>
            </Form>

            <hr className='my-4'/>

            <p>No account yet? <Link href="/signup">Sign up</Link></p>

        </div>
    )
    
}

export default LoginForm;