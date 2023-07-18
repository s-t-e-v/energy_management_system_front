import { Navbar, Nav, Container } from "react-bootstrap";

interface Props {}

const Navigation: React.FC<Props> = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="/">EMS</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href="?">Import Data</Nav.Link>
                        <Nav.Link href="?">Sync Data</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default Navigation;