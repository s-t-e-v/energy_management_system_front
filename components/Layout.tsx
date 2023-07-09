import { Container } from "react-bootstrap";
import Link from "next/link";

interface Props {
    children: React.ReactNode;
    home?: boolean;
}

const Layout: React.FC<Props> = ({ children, home}) => {
    return (
        <div>
            <header>
                {home ? (
                    <>
                        <h1>EMS</h1>
                        <h3>Manage your energy consumption</h3>
                    </>
                ) : (
                    <>
                        <div>
                            <Link href="/">EMS</Link>
                        </div>

                        <div>
                            Burger menu
                        </div>

                        <div className='sidebar'>

                            <div>
                                Avatar
                            </div>
                            <div>
                                @username
                            </div>
                            <nav>
                                <ul>
                                    <li>
                                        Data
                                        <ul>
                                            <li>Import Data</li>
                                            <li>Sync Data</li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>

                            <Link href='/'>Log out</Link>
                        </div>
                    </>
                )}            
            </header>

            <main>
                <Container>
                    {children}
                </Container>
            </main>

            <footer>
                <Container>
                    <p>&copy; {new Date().getFullYear()} Energy Management System. All rights reserved.</p>
                </Container>
            </footer>
        </div>
    )
}

export default Layout;