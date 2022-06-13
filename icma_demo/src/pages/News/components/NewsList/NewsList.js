import style from './NewsList.module.css';


function NewsList() {
    return (
        <div className={style.newsList}>
            <p className={style.newsListEmpty}>No news at the moment</p>
        </div>
    );
}

export default NewsList;
