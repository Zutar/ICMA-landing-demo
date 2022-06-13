import style from './News.module.css';
import {FilterBlock, NewsList} from "./components";


function News(){
    return (
        <div className={style.news}>
            <div className={style.newsWrapper}>
                <h2>Recent news</h2>
                <FilterBlock/>
                <NewsList/>
            </div>
        </div>
    );
}

export default News;
