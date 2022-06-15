import style from './PublicOrganizations.module.css';
import PublicOrganizationsMap from "./components/PublicOrganizationsMap";


function PublicOrganizations() {
    return (
        <div className={style.publicOrganizations}>
            <div className={style.publicOrganizationsWrapper}>
                <h2>Public organizations</h2>
                <p className={style.publicOrganizationsDescription}>Listing of Azerbaijani public organizations around the world</p>
                <PublicOrganizationsMap/>
            </div>
        </div>
    );
}

export default PublicOrganizations;
