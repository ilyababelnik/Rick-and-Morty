import { useState, useEffect } from "react";
import axios from "axios";
import ErrorMessage from "../../components/ErrorMessage";
import ListOfCharacters from '../../components/ListOfCharacters';
import UiInput from '../../components/UI/UiInput';
import { pageUp } from '../../utils/pageUp';
import logo from '../../image/logo.svg';
import s from './HomePage.module.css';


let HomePage = () => {

    let [characters, setCharacters] = useState([]);
    let [search, setSearch] = useState('');
    let [error, setError] = useState(false);

    useEffect( () => {
        pageUp();
        let data = async () => {
            try { 
                if (localStorage.getItem('search')) {
                    setSearch(localStorage.getItem('search'))
                }
                let {data} = await axios.get(`https://rickandmortyapi.com/api/character/?name=${search}`);
                setCharacters(data.results) 
                setError(false);
            }
            catch(e) {
                setError(true);
            }
        };
        data();
    }, [search, error]);

    let handleInput = (e) => {
        setSearch(e.target.value);
        localStorage.setItem('search', e.target.value)
    }

    return(

        <div className={s.wrapper}>
            <img 
                className={s.logo} 
                src={logo} 
                alt='Logo' 
            />
            
            <div className={s.person__list}>

                <UiInput 
                    type='text' 
                    placeholder='Filter by name...' 
                    value={search} 
                    onChange={handleInput} 
                />

            {error 
            ? <ErrorMessage />
            : <ListOfCharacters characters={characters} />
            }

            </div>
        </div>
    );
};

export default HomePage;