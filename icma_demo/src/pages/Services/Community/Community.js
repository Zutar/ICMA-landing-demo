import style from './Community.module.css';
import CommunityMap from "./components/CommunityMap/CommunityMap";
import CommunityList from './components/CommunityList/CommunityList';


function Community() {
    return (
        <div className={style.community}>
            <div className={style.communityWrapper}>
                <h2>Community</h2>
                <p className={style.communityDescription}>Unites all members into a global social network. Provides referral and loyalty system. Provides referral and loyalty system</p>
                <p className={style.communityDescription}>The system of personal profiles of platform participants and
                    the assignment of certain roles to them, which give access to various functionality on the
                    platform</p>
                <CommunityMap/>
                <CommunityList/>
                <div className={style.communityReferral}>
                    <h3>Referral system</h3>
                    <p>A system for attracting referrals, for which the system issues certain bonuses. At first in the
                        form of a rating and possible discounts on the trading platform</p>
                </div>
                <div className={style.communityRating}>
                    <h3>Rating system</h3>
                    <p>The formation of social rating for each account on the site. A complex value that comes out as a
                        result of processing a lot of data about the main actions of a person on the platform</p>
                </div>
            </div>
        </div>
    );
}

export default Community;
