import style from './SocialProjectsList.module.css';


function SocialProjectsList() {
    return (
        <div className={style.socialProjectsList}>
            <p className={style.socialProjectsListEmpty}>No social projects at the moment</p>
        </div>
    );
}

export default SocialProjectsList;
