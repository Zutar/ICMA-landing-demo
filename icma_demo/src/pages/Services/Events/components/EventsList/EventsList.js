import style from './EventsList.module.css';


function EventsList() {
    return (
        <div className={style.eventsList}>
            <p className={style.eventsListEmpty}>No events at the moment</p>
        </div>
    );
}

export default EventsList;
