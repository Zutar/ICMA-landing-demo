import style from './About.module.css';

function About() {
    return (
        <div id={'about'}>
            <div className={style.aboutWrapper}>
                <h2>ICMA is...</h2>
                <div className={style.aboutInfo}>
                    <p>
                        <strong>ICMA</strong> is an international platform whose participants will be Azerbaijani communities from all over the
                        world. The ICMA platform is a set of social, business, banking and marketing solutions.
                    </p>
                    <hr/>
                </div>
            </div>
        </div>
    );
}

export default About;
