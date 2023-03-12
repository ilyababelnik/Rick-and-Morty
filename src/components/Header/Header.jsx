import { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import icon from './img/google.png';
import s from './Header.module.css';

let Header = () => {

    let [ user, setUser ] = useState('');
    let [ profile, setProfile ] = useState('');

    let login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(() => {
        if (user) {
            axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`)
                .then((res) => {
                    console.log(res);
                    setProfile(res.data);
                })
                .catch((err) => console.log(err));
        }
    }, [user]);

    let logOut = () => {
        googleLogout();
        setProfile('');
    };

    return(
        <div className={s.wrapper}>
            {profile
            ? (<div className={s.container}>
                    <span>
                        <img className={s.user__image} src={profile.picture} alt="User image" />
                        <span className={s.user__name}>Welcome, {profile.name}!</span>
                    </span>
                    <button className={s.btn} onClick={logOut}>Log out</button>
            </div>) 
            : (<div className={s.container}>
                <p>Welcome, Guest!</p>
                <button className={s.btn} onClick={() => login()}>
                    <img className={s.icon} src={icon} alt='Sign in' title='Sign in' />
                    <span className={s.text}>Sign in</span>
                </button>
            </div>)
            }
       </div>
    );
};

export default Header;