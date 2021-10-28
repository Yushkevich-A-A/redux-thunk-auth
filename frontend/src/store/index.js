import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { fetchServiceProfileReducer } from '../reducers/fetchServiceProfileReducer/fetchServiceProfileReducer';
import { fetchServiceTokenReducer } from '../reducers/fetchServiceTokenReducer/fetchServiceTokenReducer';

const reducers = combineReducers({
    fetchServiceToken: fetchServiceTokenReducer,
    fetchServiceProfile: fetchServiceProfileReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;