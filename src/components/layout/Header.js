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
                    <div className="profill">
                        <div className='img'>
                            <img src="https://images.unsplash.com/photo-1488161628813-04466f872be2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt='profill' />
                        </div>
                    </div>
                    <div className="login">Login</div>
                    <div className="join">Join</div>
                </div>
            </div>
        </header>
        )
}