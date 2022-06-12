import style from './Header.module.css';
import {Link} from 'react-router-dom';


function Header(){
    return (
        <header className={style.header}>
            <nav className={style.headerNav}>
                <ul className={style.headerBrand}>
                    <li>
                        <Link to={'/'}>
                            <em>ICMA</em>
                        </Link>
                    </li>
                </ul>

                <ul className={style.headerMenu}>
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
            </nav>
        </header>
    );
}

export default Header;
