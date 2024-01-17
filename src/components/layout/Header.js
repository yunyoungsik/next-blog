import Link from 'next/link'

export default function Header(){
    return(
        <header id="header">
            <div className="header__inner container">
                <h1 className="logo">
                    <Link href="/">
                        BLOG.<span>YS</span>
                    </Link>
                </h1>
                <nav className="nav">
                    <ul>
                        <li>
                            <Link className="active" href="/">HOME</Link>
                        </li>
                        <li>
                            <Link href="#">NOTICE</Link>
                        </li>
                        <li>
                            <Link href="#">ABOUT</Link>
                        </li>
                    </ul>
                </nav>
                <div className="header__btn">
                    <div className="profill"></div>
                    <div className="login">Login</div>
                </div>
            </div>
        </header>
        )
}