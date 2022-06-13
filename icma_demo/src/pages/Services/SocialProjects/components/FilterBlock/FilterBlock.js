import style from './FilterBlock.module.css';
import {PrimaryButton} from "../../../../../components";



function FilterBlock() {
    return (
        <div className={style.newsFilter}>
            <input
                className={style.newsFilterSearch}
                type={'string'}
                placeholder={'Search params...'}
            />
            <PrimaryButton text={'Search'}/>
        </div>
    );
}

export default FilterBlock;
