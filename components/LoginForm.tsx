import { Form, Button} from "react-bootstrap";
import Link from "next/link";

interface Props {}

const LoginForm: React.FC<Props> = () => {
    return (
        <div>

            <form action="/dashboard" method="post">
                <div>
                    <label htmlFor="login">Email Address</label>
                    <input type="text" name="login" id="login" placeholder='Email adress or Username'/>
                </div>
                <div>
                    <label htmlFor="pswd">Password</label>
                    <input type="password" name="pswd" id="pswd" />
                </div>

                <button type="submit">Log In</button>
            </form>

            <hr />

            <p>No account yet? <Link href="/signup">Sign up</Link></p>

        </div>
    )
    
}

export default LoginForm;