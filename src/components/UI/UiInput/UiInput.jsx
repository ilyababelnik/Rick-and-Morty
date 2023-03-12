import icon from './img/filter.svg';
import s from './UiInput.module.css';

let UiInput = ({type, placeholder, value, onChange}) => {
    return(
        <div className={s.wrapper}>
            <img src={icon} alt='search icon' />
            <input 
                type={type} 
                placeholder={placeholder}
                value={value}
                onChange={onChange} 
            />
        </div>
    );
};

export default UiInput;