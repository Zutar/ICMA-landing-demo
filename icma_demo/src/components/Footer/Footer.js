import style from './Footer.module.css';
import {HashLink as Link} from 'react-router-hash-link';
import {PrimaryButton} from "../index";


function Footer(){
    return (
        <footer id={style.footer}>
            <div className={style.footerWrapper}>
                <div className={style.footerButtons}>
                    <a href={'https://icma_cabinet.grem.capital'}>
                        <PrimaryButton text={'Join Us'}/>
                    </a>
                </div>
                <div className={style.footerContacts}>
                    <b>Contacts</b>
                    <ul>
                        <li>
                            <a href={'mailto:icma@grem.capital'}>icma@grem.capital</a>
                        </li>
                        <li>
                            <a href={'tel:+380 67 489 9222'}>+380 67 489 9222</a>
                        </li>
                    </ul>
                </div>
                <div className={style.footerNavigation}>
                    <b>Navigation</b>
                    <ul>
                        <li>
                            <Link smooth to={'/#about'}>About Us</Link>
                        </li>
                        <li>
                            <Link smooth to={'/#services'}>Services</Link>
                        </li>
                        <li>
                            <Link to={'/news'}>News</Link>
                        </li>
                        <li>
                            <Link to={'/contacts'}>Contacts</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.footerCopyright}>
                    Copyright © 2022 ICMA. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
