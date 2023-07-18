import Link from "next/link";

interface Props {}

const LogoutButton: React.FC<Props> = () => {
    return (
        <>
            <Link href="/" className="btn btn-primary" >
                Log out    
            </Link>        
        </>
    )
}

export default LogoutButton;