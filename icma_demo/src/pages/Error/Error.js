import styles from './Error.module.css';
import {Link} from 'react-router-dom';
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import SearchIcon from '@mui/icons-material/Search';
function Error({code}){
    return (
        <div className={styles.error}>
            <SearchIcon className={styles.errorIcon} style={{
                fontSize: 256
            }}/>
            <h2>Can't find page. Error {code}</h2>
            <Link to={'/'}>
                <PrimaryButton text={'Go to main'}/>
            </Link>
        </div>
    );
}

export default Error;
