import style from './Footer.module.css';
import {Link} from 'react-router-dom';


function Footer(){
    return (
        <footer id={style.footer}>
            <div className={style.footerContacts}>
                <b>Contacts</b>
                <ul>
                    <li>
                        <Link to={'mailto:test@gmail.com'}>test@gmail.com</Link>
                    </li>
                    <li>
                        <Link to={'tel:+380000000000'}>+380000000000</Link>
                    </li>
                </ul>
            </div>
            <div className={style.footerNavigation}>
                <b>Navigation</b>
                <ul>
                    <li>
                        <Link to={'/'}>About Us</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Services</Link>
                    </li>
                    <li>
                        <Link to={'/'}>News</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Contacts</Link>
                    </li>
                    <li>
                        <Link to={'/'} className={style.headerJoinUs}>Join Us</Link>
                    </li>
                </ul>
            </div>
            <div className={style.footerCopyright}>
                Copyright © 2022 ICMA. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
