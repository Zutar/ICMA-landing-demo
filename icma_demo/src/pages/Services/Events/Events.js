import style from './Events.module.css';
import {EventsList, FilterBlock} from "./components";


function Events() {
    return (
        <div className={style.events}>
            <div className={style.eventsWrapper}>
                <h2>Recent events</h2>
                <p className={style.eventsDescription}>The main events within the community are displayed here. Platform
                    members have the ability to subscribe and view using the calendar</p>
                <FilterBlock/>
                <EventsList/>
            </div>
        </div>
    );
}

export default Events;
