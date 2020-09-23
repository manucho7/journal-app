import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";

import { firebase } from '../../firebase/firebase-config';
import { useDispatch } from 'react-redux';

import { login } from '../../actions/auth';
import { JournalScreen } from '../journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const dispatch = useDispatch();
//Local state checks firebase status initialized in true
    const [ checking, setChecking ] = useState(true);
//Local state checks for user valid authentication
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

// Observable que va a estar pendientes en los cambios de autenticacion del usuario
    useEffect(() => {
        firebase.auth().onAuthStateChanged( ( user ) => {
            if ( user?.uid ) {
                dispatch( login( user.uid, user.displayName ) );
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        });

    }, [ dispatch, setChecking, setIsLoggedIn ])

    if ( checking ) {
        return (
            <h1>please wait...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>

                    <PublicRoute path="/auth" component={ AuthRouter } isAuthenticated={ isLoggedIn } />

                    <PrivateRoute exact path="/" component={ JournalScreen } isAuthenticated={ isLoggedIn }/>

                    <Redirect to="/auth/login" />
                    
                </Switch>
            </div>
        </Router>
    )
}
