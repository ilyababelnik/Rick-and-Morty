import icon from './img/Loading.svg';
import s from './Loading.module.css';

let Loading = () => {
    return(
        <div className={s.wrapper}>
            <div className={s.block}>
                <h2>Loading...</h2>
                <img src={icon} alt='Loading' />
            </div>
        </div>
    );
};

export default Loading;