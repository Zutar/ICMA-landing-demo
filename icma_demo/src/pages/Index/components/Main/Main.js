import style from './Main.module.css';
import {Link} from 'react-router-dom';

import mainImage from '../../../../assets/images/main.png';


function Main(){
    return (
        <section id={style.main} style={{
            backgroundImage: `url(${mainImage})`
        }}>
            <div className={style.mainWrapper}>
                <div className={style.mainInfo}>
                    <h1>INTERNATIONAL COMMUNITY <br/><em>“MY AZERBAIJAN”</em></h1>
                    <div className={style.mainJoinWrapper}>
                        <Link to={'/'} className={style.mainJoin}>
                            Join Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Main;
