import React from 'react';
import AuthForm from '../../Components/AuthForm/AuthForm';
import { Redirect } from 'react-router';
import Header from '../../Components/Header/Header';
import SocialLogo from '../../Components/SocialLogo/SocialLogo';
import { useDispatch, useSelector } from 'react-redux';

import './AuthPage.css';
import { fetchToken } from '../../actions/actions';

function AuthPage(props) {
    const { token, error } = useSelector(state => state.fetchServiceToken);
    const dispatch = useDispatch();

    const handlerLogin = (formData) => {
        dispatch(fetchToken(formData));
    }

    return (
            <div className='auth-page'>
                <Header>
                    <AuthForm handlerLogin={handlerLogin}>
                    { error && <div className="error">{error}</div>}
                    </AuthForm>
                </Header>
                <SocialLogo /> 
                {token && <Redirect to='/news' />}
            </div>
    )
}

export default AuthPage;

