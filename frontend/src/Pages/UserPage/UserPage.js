import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { fetchProfile, serviceLogout } from '../../actions/actions';
import Header from '../../Components/Header/Header';
import NewsList from '../../Components/NewsList/NewsList';
import Profile from '../../Components/Profile/Profile';

function UserPage(props) {
    const { token } = useSelector( state => state.fetchServiceToken);
    const { profile } = useSelector( state => state.fetchServiceProfile);
    const dispatch = useDispatch();
    const [ news, setState ] = useState([])

    useEffect(() => {
        dispatch(fetchProfile(token));
        try {
            fetch(`${process.env.REACT_APP_CURRENT_URL}/private/news`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }).then( response => response.json() )
            .then( data => setState(data));
        } catch(e) {
            console.log(e.message);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    
    const handlerLogout = () => {
        dispatch(serviceLogout());
    }

    
    return (
            <div className='auth-page'>
                <Header>
                    <Profile profile={profile} handlerLogout={handlerLogout}/>  
                </Header>
                <NewsList list={news}/>
                {!token && <Redirect to='/'/>}
            </div>
    )
}

export default UserPage

