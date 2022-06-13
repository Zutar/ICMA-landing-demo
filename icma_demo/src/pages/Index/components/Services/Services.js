import style from './Services.module.css';


function Services(){
    return (
        <div id={'services'} className={style.services}>
            <h2>Our services</h2>
            <div className={style.servicesWrapper}>
                <div className={style.servicesItem}>
                    <h3>Community</h3>
                    <div className={style.servicesItemInfo}>Unites all members of the diaspora into a global social network. Provides referral and loyalty system</div>
                </div>
                <div className={style.servicesItem}>
                    <h3>Marketplace</h3>
                    <div className={style.servicesItemInfo}>A marketplace where you can create your own online store within the platform</div>
                </div>
                <div className={style.servicesItem}>
                    <h3>Business</h3>
                    <div className={style.servicesItemInfo}>Connect your own business to the platform to interact with its members!</div>
                </div>
                <div className={style.servicesItem}>
                    <h3>Online banking</h3>
                    <div className={style.servicesItemInfo}>Implementation of an online banking system with the issuance of your own card</div>
                </div>
                <div className={style.servicesItem}>
                    <h3>Public organizations</h3>
                    <div className={style.servicesItemInfo}>Launching events and work on the part of a public organization</div>
                </div>
                <div className={style.servicesItem}>
                    <h3>Diasporas</h3>
                    <div className={style.servicesItemInfo}>Uniting platform users into diasporas. View events and activities within the diaspora</div>
                </div>
                <div className={style.servicesItem}>
                    <h3>Social projects</h3>
                    <div className={style.servicesItemInfo}>Launch and coverage of social projects</div>
                </div>
                <div className={style.servicesItem}>
                    <h3>Crowdfunding</h3>
                    <div className={style.servicesItemInfo}>Listing of fundraising projects (support for interesting ideas, development of start-ups, helping people, reconstruction of destroyed territories)</div>
                </div>
                <div className={style.servicesItem}>
                    <h3>Events</h3>
                    <div className={style.servicesItemInfo}>Publication of news about the main events within the community with the ability to subscribe and view using the calendar</div>
                </div>
            </div>
        </div>
    );
}

export default Services;
