import { Container } from "react-bootstrap";
import Link from "next/link";

import Navigation from "./Navigation";
import LogoutButton from "./LogoutButton";

import styles from './layout.module.css'

interface Props{
    home?: boolean;
}

const Header: React.FC<Props> = ({home}) => {
    return (
        
        <header className={styles.header}>
            {home ? (
                <div className="pt-5 pb-3">
                    <h1 className={`${styles.title} text-center`}> <Link href="/">EMS</Link> </h1>
                    <h3 className={`${styles.subtitle} text-center mx-5`}>Manage your energy consumption</h3>
                </div>
            ) : (
                <>

                    <Navigation/>

                    <div className='sidebar'>

                        <div>
                            Avatar
                        </div>
                        <div>
                            @username
                        </div>


                        <LogoutButton/>
                    </div>


                </>
            )}            
        </header>
    )
}

export default Header;