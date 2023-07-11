import { Container } from "react-bootstrap";
import Link from "next/link";

import styles from './layout.module.css';

interface Props {
    children: React.ReactNode;
    home?: boolean;
}

const Layout: React.FC<Props> = ({ children, home}) => {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                {home ? (
                    <div className="pt-5 pb-3">
                        <h1 className={`${styles.title} text-center`}>EMS</h1>
                        <h3 className={`${styles.subtitle} text-center mx-5`}>Manage your energy consumption</h3>
                    </div>
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

            <main className={`${styles.main} d-flex align-items-sm-center`}>
                <Container className={styles.main_container}>
                    {children}
                </Container>
            </main>

            <footer className={styles.footer}>
                <Container>
                    <p className="text-center p-4">&copy; {new Date().getFullYear()} Energy Management System. All rights reserved.</p>
                </Container>
            </footer>
        </div>
    )
}

export default Layout;