import style from './Main.module.css';
import {HashLink as Link} from 'react-router-hash-link';
import ArrowDownward from '@mui/icons-material/ArrowDownward';

import mainImage from '../../../../assets/images/main.png';


function Main(){
    return (
        <section id={'main'} className={style.main}
                 style={{
            backgroundImage: `url(${mainImage})`
        }}>
            <div className={style.mainWrapper}>
                <div className={style.mainInfo}>
                    <h1>INTERNATIONAL COMMUNITY <br/><em>“MY AZERBAIJAN”</em></h1>
                    <div className={style.mainJoinWrapper}>
                        <a href={'https://icma-cabinet.grem.capital'} className={style.mainJoin}>
                            Join Us
                        </a>
                    </div>
                </div>
                <Link smooth to={'/#about'} className={style.mainToNext}>
                    <ArrowDownward style={{
                        fontSize: '3em'
                    }}/>
                </Link>
            </div>
        </section>
    );
}

export default Main;
