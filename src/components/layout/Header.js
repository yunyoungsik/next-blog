'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [show, setShow] = useState(false);
  const toogleMenu = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <header id="header" role="banner">
      <div className="header__inner container">
        <h1 className="logo">
          <Link href="/">
            BLOG.<span>YS</span>
          </Link>
        </h1>
        <nav className={`nav ${show ? "show" : "desktop"}`} role="navigation" aria-label="메인 메뉴">
          <ul>
            <li>
              <Link className="active" href="/">
                HOME
              </Link>
            </li>
            <li>
              <Link href="#">NOTICE</Link>
            </li>
            <li>
              <Link href="#">ABOUT</Link>
            </li>
          </ul>
        </nav>
        <div
          className="nav__mobile"
          id="headerToggle"
          role="button"
          aria-controls="primary-menu"
          aria-expanded={show ? 'true' : 'false'}
          onClick={toogleMenu}
        >
          <span></span>
        </div>
        <div className="header__btn">
          <div className="profill">
            <div className="img">
              <img src="https://images.unsplash.com/photo-1488161628813-04466f872be2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="profill" />
            </div>
          </div>
          <div className="login">
            <Link href="/login">Login</Link>
          </div>
          <div className="join">
            <Link href="/join">Join</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
