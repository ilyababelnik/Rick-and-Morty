import UiButton from '../../components/UI/UiButtin';
import icon from './img/errorpage.png';
import s from './ErrorPage.module.css';

let ErrorPage = () => {
    return(
        <div className={s.error__wrapper}>
        <img className={s.error__icon} src={icon} alt='Some error' />
        <p className={s.error__text}>Sorry, something went wrong...</p>
        <div className={s.error__button}><UiButton>GO BACK</UiButton></div>
        </div>
    );
};

export default ErrorPage;