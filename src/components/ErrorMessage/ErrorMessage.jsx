import icon from './img/warning.png';
import s from './ErrorMessage.module.css';

let ErrorMessage = () => {
    return (
        <div className={s.error__wrapper}>
            <img 
                className={s.error__img} 
                src={icon} 
                alt='Image non-correct request' 
            />
            <span className={s.error__text}>
                Your request is not correct. Try another.
            </span>
        </div>
    );
};

export default ErrorMessage;