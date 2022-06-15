import style from './Purpose.module.css';
import {PrimaryButton} from "../../../../components";

function Purpose() {
    return (<div id={'purpose'}>
            <div className={style.purposeWrapper}>
                <div className={style.purposeInfo}>
                    <p>
                        The purpose of the platform is to unite Azerbaijanis in one digital space to communicate,
                        coordinate diasporas, search for partners and clients, conduct and increase business, conduct
                        financial settlements, and implement social projects.
                    </p>
                    <a href={'https://icma-cabinet.grem.capital'}>
                        <PrimaryButton text={'Join Us'}/>
                    </a>
                </div>
            </div>
        </div>);
}

export default Purpose;
