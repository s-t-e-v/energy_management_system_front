import { Container } from "react-bootstrap";

import Header from "./Header";

import styles from './layout.module.css';

interface Props {
    children: React.ReactNode;
    home?: boolean;
}

const Layout: React.FC<Props> = ({ children, home}) => {
    return (
        <div className={styles.wrapper}>
            <Header home={home} />

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