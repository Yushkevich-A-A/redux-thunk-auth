import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import Header from '../../Components/Header/Header';
import Profile from '../../Components/Profile/Profile';
import './Page404.css';
import AdmitButton from '../../Components/AdmitButton/AdmitButton';
import { useDispatch, useSelector } from 'react-redux';
import { serviceLogout } from '../../actions/actions';


function Page404(props) {
    const { token } = useSelector(state => state.fetchServiceToken);
    const { profile } = useSelector(state => state.fetchServiceProfile);
    const dispatch = useDispatch();

    const handlerLogout = () => {
        dispatch(serviceLogout())
    }

return (
        <div className='page-404'>
            <Header>
                <Profile profile={profile} handlerLogout={handlerLogout}/>  
            </Header>
            <div className="body-404">
                <div className="block-404">
                    <h3 className='not-found-h3'>404</h3>
                    <p className='not-found'>Нет такой страницы</p>
                </div>
                
                <Link to='/news'>
                    <AdmitButton name='вернуться на главную' />
                </Link>
            </div>
            

            {!token && <Redirect to='/'/>}
        </div>
)
}

Page404.propTypes = {

}

export default Page404

