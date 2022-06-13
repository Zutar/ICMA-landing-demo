import style from './Partners.module.css';

import azImage from '../../../../assets/images/az-logo.png';
import gremImage from '../../../../assets/images/grem-logo.webp';


function Partners() {
    return (
        <div className={style.partners}>
            <h2>Our partners</h2>
            <ul>
               <li>
                   <a href={'https://nk.gov.az//en'} target={'_blank'}>
                       <img src={azImage}/>
                   </a>
               </li>
                <li>
                    <a href={'https://grem.capital'} target={'_blank'}>
                        <img src={gremImage}/>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Partners;
