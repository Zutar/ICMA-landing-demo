import style from './CommunityList.module.css';
import CommunityItem from '../CommunityList/components/CommunityItem';
import {PrimaryButton} from "../../../../../components";
import users from '../../../../../fakeApi/users';
import {useState} from "react";


function CommunityMap() {
    const [filteredUsers, setFilteredUsers] = useState(users);
    const previewUsers = filteredUsers.length > 15 ? filteredUsers.slice(0, 15) : filteredUsers;

    return (
        <div className={style.communityWrapper}>
            <h3>Our community</h3>
            <div className={style.communityFilter}>
                <input
                    className={style.communityFilterSearch}
                    type={'string'}
                    placeholder={'User name...'}
                    onChange={(e) => {
                        const name = e.target.value;
                        const newFilteredUsers = users.filter((user) => `${user.fname.toLowerCase()} ${user.lname.toLowerCase()}`.indexOf(name.toLowerCase()) !== -1);

                        setFilteredUsers(newFilteredUsers);
                    }}
                />
            </div>
            <div className={style.communityList}>
                {
                    previewUsers.map((user) => {
                        return <CommunityItem data={user}/>;
                    })
                }
            </div>
            <div className={style.communityFooter}>
                <p>And many other people...</p>
                <a href={'https://icma-cabinet.grem.capital'}>
                    <PrimaryButton text={'Join Us'}/>
                </a>
            </div>
        </div>
    );
}

export default CommunityMap;
