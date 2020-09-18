import { createStore, combineReducers } from 'redux'
import { authReducer } from '../reducers/authReducer';

//STORE QUE CONCENTRA LOS REDUCERS 
const reducers = combineReducers({
    auth: authReducer
});

export const store = createStore( reducers );