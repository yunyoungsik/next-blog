import Link from 'next/link'

import { link } from '@/utils/link'

export default function Footer(){
    return(
        <footer id="footer">
            <div className="footer__inner container">
               <nav className="f_nav">
                   <ul>
                        {link.map((link) => (
                            <li key={link.title}>
                                <Link href={link.href}>
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                   </ul>
               </nav>
               <h2 className="f_logo">
                   <Link href="/">
                       BLOG.<span>YS</span>
                   </Link>
               </h2>
               <div className="f_copyright">
                   <p>ⓒ 2023.0-Sik All right reserverd</p>
               </div>
           </div>
        </footer>
    )
}