const initProfile = {
    profile: {
        id: '',
        login: '',
        name: '',
        password: '',
        avatar: ''
      },
    loading: false,
    error: null,
}



export const fetchServiceProfileReducer = (state = initProfile, action ) => {
    switch ( action.type ) {
        case 'FETCH_PROFILE_REQUEST':
            return {...state, loading: true};
        case 'FETCH_PROFILE_ERROR': 
            const { message } = action.payload;
            return {...state, loading: false, error: message};
        case 'FETCH_PROFILE_SUCCESS':
            const { profile } = action.payload;
            return {...state, profile, loading: false, error: null}
        case 'PROFILE_LOGOUT':
            return {...initProfile};
        default:
            const profileStore = localStorage.getItem('profile');
            if (profileStore) {
                return { ...state, profile: JSON.parse(profileStore)}
            }
            return { ...state };
    }
}