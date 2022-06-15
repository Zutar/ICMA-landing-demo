import style from './Diasporas.module.css';
import DiasporasMap from "./components/DiasporasMap";


function Diasporas() {
    return (
        <div className={style.diasporas}>
            <div className={style.diasporasWrapper}>
                <h2>Diasporas</h2>
                <p className={style.diasporasDescription}>Listing of Azerbaijani diasporas around the world</p>
                <div className={style.diasporasCountries}>
                    <p>Diasporas around the world:</p>
                    <ul>
                        <li>USA</li>
                        <li>France</li>
                        <li>Germany</li>
                        <li>Ukraine</li>
                        <li>Turkey</li>
                        <li>Turkmenistan</li>
                        <li>Kyrgyzstan</li>
                        <li>Uzbekistan</li>
                        <li>Georgia</li>
                        <li>Russia</li>
                        <li>Kazakhstan</li>
                        <li>Iran</li>
                        <li>Japan</li>
                        <li>Australia</li>
                    </ul>
                </div>
                <DiasporasMap/>
            </div>
        </div>
    );
}

export default Diasporas;
