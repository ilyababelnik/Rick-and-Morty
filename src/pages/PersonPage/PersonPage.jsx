import {useState, useEffect} from 'react';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import ErrorPage from '../ErrorPage';
import UiButton from '../../components/UI/UiButtin/UiButton';
import Loading from '../../components/Loading';
import Information from '../../components/Information';
import { pageUp } from '../../utils/pageUp';
import s from './PersonPage.module.css';

let PersonPage = () => {

    let [person, setPerson] = useState({});
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(false);

    let { pathname } = useLocation();

    useEffect( () => {
    pageUp();
    let Data = async () => {
        try { 
            let {data} = await axios.get(`https://rickandmortyapi.com/api/character${pathname}`);
            setPerson(data); 
            if (person) {
                setLoading(true)
            }
        } catch(e) {
            setError(true);
        }
    }
    Data();
    setPerson({});
    }, []);

    return(
        <div className={s.wrapper}>
        {error 
        ? <ErrorPage />
        : loading
            ? (<><UiButton>GO BACK</UiButton>
                <img className={s.person__img} src={person.image} alt={person.name} />
                <h2>{person.name}</h2>
                <p className={s.person__information}>Informations</p>
                <Information person={person} /></>)
            
            : <Loading />
        }
        </div>
    );
};

export default PersonPage;