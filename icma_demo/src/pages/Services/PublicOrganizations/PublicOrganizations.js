import style from './PublicOrganizations.module.css';
import PublicOrganizationsMap from "./components/PublicOrganizationsMap";


function PublicOrganizations() {
    return (
        <div className={style.publicOrganizations}>
            <div className={style.publicOrganizationsWrapper}>
                <h2>Public organizations</h2>
                <p className={style.publicOrganizationsDescription}>Launching events and work on the part of a public organization</p>
                <PublicOrganizationsMap/>
            </div>
        </div>
    );
}

export default PublicOrganizations;
