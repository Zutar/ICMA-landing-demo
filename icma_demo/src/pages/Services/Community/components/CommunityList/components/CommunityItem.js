import style from './CommunityItem.module.css';


function CommunityItem(props) {
    const {country, fname, lname, img, userId} = props.data;

    return (
        <a className={style.communityItem} href={`https://icma-cabinet.grem.capital/#/community/view/${userId}`}>
            <div className={style.communityItemPhotoWrapper}>
                <img src={img}/>
            </div>
            <div className={style.communityItemInfo}>
                <b>{`${fname} ${lname}`}</b>
                <div>Country: {country}</div>
            </div>
        </a>
    );
}

export default CommunityItem;
