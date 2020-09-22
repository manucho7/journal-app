import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { login } from '../../actions/auth';
import { firebase } from '../../firebase/firebase-config';
import { JournalScreen } from '../journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

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
            <h1>Espere...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>

                    <Route path="/auth" component={ AuthRouter } />

                    <Route exact path="/" component={ JournalScreen } />

                    <Redirect to="/auth/login" />
                    
                </Switch>
            </div>
        </Router>
    )
}
