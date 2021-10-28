import useStorage from "../../Hocs/useStorage/useStorage";
import React, { useState } from 'react';
import AuthContext from "../../Contexts/AuthContext/AuthContext";

function AuthProvider(props) {
    const initObj = {
        id: '',
        login: '',
        avatar: '',
        name: '',
    }
    const [ token, setUserToken ] = useStorage(localStorage, 'token');
    const [ profile, setProfile ] = useState({...initObj});
    const [ news, setNews ] = useState([]);
    const [ error, setError ] = useState(null);

    const handlerLogin = async  (form) => {
        setError(null)
        try {
            const respond = await fetch(`${process.env.REACT_APP_CURRENT_URL}/auth`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify(form)
                })
            if (respond.status === 400) {
                const  data = await respond.json();
                setError(data.message);
                throw data.message;
            }

            const  data = await respond.json();
            setUserToken(data.token);
            } catch(e) {
                console.log(e)
            }
        };

    const handlerLogout = () => {
        setUserToken(null);
        setProfile({...initObj});
        setNews([]);
    }

    const handlerSetProfile = (data) => {
        setProfile({...data})
    }

    const handlerSetNews = (data) => {
        setNews([...data])
    }

    const handlerDisableError = () => {
        setError(null);
    }

    return (
        <AuthContext.Provider value={{
                handlerLogin, 
                handlerLogout, 
                handlerDisableError,
                handlerSetProfile,
                handlerSetNews,
                token, 
                error, 
                profile, 
                news
            }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
