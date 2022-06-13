import style from './ComingSoon.module.css';
import mainImage from "../../assets/images/main.png";


function ComingSoon(props){
    const text = props.text;

    return (
        <section className={style.comingSoon}
                 style={{
                     backgroundImage: `url(${mainImage})`
                 }}>
            <div className={style.comingSoonWrapper}>
                <h1>Coming Soon</h1>
                {text && (<p className={style.comingSoonDescription}>{text}</p>)}
            </div>
        </section>
    );
}

export default ComingSoon;
