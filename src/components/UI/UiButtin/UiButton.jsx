import { useNavigate } from 'react-router-dom';
import icon from './img/arrow.svg';
import s from './UiButton.module.css';

let UiButton = ({children}) => {

    let navigate = useNavigate();

    let handleGoBack = (e) => {
        e.preventDefault();
        navigate(-1);
    }

    return(
        <div className={s.wrapper}>
        <button className={s.btn__back} onClick={handleGoBack}>
            <img src={icon} alt='Go back' />
            <span className={s.btn__name}>{children}</span>
        </button>
        </div>
    );
};

export default UiButton;