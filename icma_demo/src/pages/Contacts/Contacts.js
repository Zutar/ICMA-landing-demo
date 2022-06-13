import style from './Contacts.module.css';
import mainImage from "../../assets/images/main.png";
import {Link} from "react-router-dom";


function Contacts(){
    return (
        <section className={style.contacts}
                 style={{
                     backgroundImage: `url(${mainImage})`
                 }}>
            <div className={style.contactsWrapper}>
                <div className={style.contactsInfo}>
                    <h1>Contacts</h1>
                    <ul>
                        <li>
                            <a href={'mailto:icma@grem.capital'}>icma@grem.capital</a>
                        </li>
                        <li>
                            <a href={'tel:+380 67 489 9222'}>+380 67 489 9222</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Contacts;
