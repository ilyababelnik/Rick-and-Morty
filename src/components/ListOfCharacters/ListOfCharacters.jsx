import { Link } from 'react-router-dom';
import s from './ListOfCharacters.module.css';

let ListOfCharacters = ({characters}) => {
    return (
        <>{characters
            .sort((a, b) => {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
            })
            .slice(0,8)
            .map(item => (
                <Link to={`/${item.id}`} key={item.id}>
                    <div className={s.person__item}>
                        <img src={item.image} />
                        <div className={s.person__info}>
                            <h6>
                                {(item.name).length > 20
                                    ? (item.name).slice(0, 19) + '...'
                                    : item.name}
                            </h6>
                            <p>{item.species}</p>
                        </div>
                    </div>
                </Link>
            ))
        }</>
    );
};

export default ListOfCharacters;