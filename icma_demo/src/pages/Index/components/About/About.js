import style from './About.module.css';

function About() {
    return (
        <div id={'about'}>
            <div className={style.aboutWrapper}>
                <div className={style.aboutInfo}>
                    <p>
                        <strong>ICMA</strong> is an international platform that unites Azerbaijanis around the world.
                        For our users, we provide a set of social, business, banking and marketing solutions
                    </p>
                    <hr/>
                </div>
            </div>
        </div>
    );
}

export default About;
