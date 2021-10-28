// Token request

export const fetchTokenRequest = () => {
    return { type: 'FETCH_TOKEN_REQUEST' };
} 

export const fetchTokenError = ( message ) => {
    return { type: 'FETCH_TOKEN_ERROR', payload: { message } };
} 

export const fetchTokenSuccess = ( token ) => {
    return { type: 'FETCH_TOKEN_SUCCESS', payload: { token } };
} 

export const fetchTokenLogout = () => {
    localStorage.removeItem('token');
    return { type: 'TOKEN_LOGOUT' };
} 

export const fetchToken = (formData) => async (dispatch, getState) => {
    dispatch(fetchTokenRequest());
    try {
        const response = await fetch(`${process.env.REACT_APP_CURRENT_URL}/auth`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        });

        if (response.status < 200 || response.status >= 300) {
            const { message } = await response.json();
            throw new Error(message);
        }
        const { token } = await response.json();
        localStorage.setItem('token', token);
        dispatch(fetchTokenSuccess(token));
        dispatch(fetchProfile(token));
    } catch (e) {
        dispatch(fetchTokenError(e.message));
    }
}

// Profile request

export const fetchProfileRequest = () => {
    return { type: 'FETCH_PROFILE_REQUEST' };
} 

export const fetchProfileError = ( message ) => {
    return { type: 'FETCH_PROFILE_ERROR', payload: { message } };
} 

export const fetchProfileSuccess = ( profile ) => {
    return { type: 'FETCH_PROFILE_SUCCESS', payload: { profile: profile } };
} 

export const fetchProfileLogout = () => {
    localStorage.removeItem('profile');
    return { type: 'PROFILE_LOGOUT' };
} 

export const fetchProfile = (token) => async (dispatch, getState) => {
    dispatch(fetchProfileRequest());
    try {
        const response = await fetch(`${process.env.REACT_APP_CURRENT_URL}/private/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        if (response.status === 401) {
            dispatch(serviceLogout())
            throw new Error('пользователь не авторизован')
        }

        if (response.status < 200 || response.status >= 300) {
            const { message } = await response.json();
            throw new Error(message);
        }

        const data = await response.json();
        localStorage.setItem('profile', JSON.stringify(data));
        dispatch(fetchProfileSuccess(data))
    } catch (e) {
        dispatch(fetchProfileError(e.message));
    }
}

export const serviceLogout = () => ( dispatch, getState ) => {
    dispatch(fetchTokenLogout());
    dispatch(fetchProfileLogout());
}