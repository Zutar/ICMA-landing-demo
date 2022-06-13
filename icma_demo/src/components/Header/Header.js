import style from './Header.module.css';
import {HashLink as Link} from 'react-router-hash-link';
import {useState} from "react";


function Header() {
    let docWidth = window.innerWidth;
    const [showMenu, setShowMenu] = useState(docWidth > 980 ? true : false);
    const body = document.getElementsByTagName('body');
    if (body.length > 0 && showMenu && docWidth <= 980) {
        body[0].style.overflow = 'hidden'
    } else if (body.length > 0) {
        body[0].style.overflow = 'auto';
    }

    window.onresize = () => {
        docWidth = window.innerWidth;
        if (docWidth > 980) setShowMenu(true);
        else setShowMenu(false);
    }

    return (
        <header className={style.header}>
            <nav className={style.headerNav}>
                <input type={'checkbox'} id={style.menuToggle}/>

                <ul
                    className={[style.headerMenu]}
                    style={{
                        display: showMenu ? 'flex' : 'none'
                    }}
                    onClick={(e) => {
                        const tag = e.target.tagName;
                        const isSub = e.target.href ? e.target.href.indexOf('/#services') !== -1 : false;

                        if (isSub) return;
                        if (docWidth > 980) return;
                        if (tag === 'A' || tag === 'EM') setShowMenu(false);
                    }}>
                    <li className={style.logo}>
                        <Link smooth to={'/#main'}>
                            <em>ICMA</em>
                        </Link>
                    </li>
                    <li>
                        <Link smooth to={'/#about'}>About Us</Link>
                    </li>
                    <li>
                        <Link smooth to={'/#services'}>Services</Link>
                        <ul className={style.headerSubMenu}>
                            <li>
                                <Link to={'/services/community'}>Community</Link>
                                <Link to={'/services/marketplace'}>Marketplace</Link>
                                <Link to={'/services/business'}>Business</Link>
                                <Link to={'/services/banking'}>Online banking</Link>
                                <Link to={'/services/publicOrg'}>Public organizations</Link>
                                <Link to={'/services/diasporas'}>Diasporas</Link>
                                <Link to={'/services/realestate'}>Real estate</Link>
                                <Link to={'/services/projects'}>Social projects</Link>
                                <Link to={'/services/crowdfunding'}>Crowdfunding</Link>
                                <Link to={'/services/events'}>Events</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link smooth to={'/news'}>News</Link>
                    </li>
                    <li>
                        <Link smooth to={'/contacts'}>Contacts</Link>
                    </li>
                    <li>
                        <a href={'https://icma_cabinet.grem.capital'} className={style.headerJoinUs}>Join Us</a>
                    </li>
                </ul>

                <label
                    className={style.menuToggleButton}
                    for={style.menuToggle}
                    onClick={() => setShowMenu((oldState) => !oldState)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </nav>
        </header>
    );
}

export default Header;
