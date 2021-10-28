
const initToken = {
    token: null,
    loading: false,
    error: null,
}



export const fetchServiceTokenReducer = (state = initToken, action ) => {
    switch ( action.type ) {
        case 'FETCH_TOKEN_REQUEST':
            return {...state, loading: true};
        case 'FETCH_TOKEN_ERROR': 
            const { message } = action.payload;
            return {...state, loading: false, error: message};
        case 'FETCH_TOKEN_SUCCESS':
            const { token } = action.payload;
            // setToken( token );
            return {...state, token: token, loading: false, error: null}
        case 'TOKEN_LOGOUT':
            // setToken( null );
            return {...initToken};
        default:
            const tokenStore = localStorage.getItem('token');
            if (tokenStore) {
                return { ...state, token: tokenStore}
            }
            return { ...state };
    }
}