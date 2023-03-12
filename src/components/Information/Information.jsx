import s from './Information.module.css';

let Information = ({person}) => {

    let title = ['Gender', 'Status', 'Specie', 'Origin', 'Type'];
    let description = [person.gender, person.status, person.species, person.origin.name, person.type];

    return(
        <ul className={s.information__list}>
            {description.map((item, index) => (
                <li className={s.information__item} key={index}>
                    <p className={s.information__title}>{title[index]}</p>
                    <p className={s.information__description}>
                        {item
                            ? item
                            : 'Unknown'}
                    </p>
                </li>
            ))}
        </ul>
    );
};

export default Information;