import style from './SocialProjects.module.css';
import {SocialProjectsList, FilterBlock} from "./components";


function SocialProjects() {
    return (
        <div className={style.socialProjects}>
            <div className={style.socialProjectsWrapper}>
                <h2>Recent social projects</h2>
                <p className={style.socialProjectsDescription}>Launch and coverage of social projects</p>
                <FilterBlock/>
                <SocialProjectsList/>
            </div>
        </div>
    );
}

export default SocialProjects;
