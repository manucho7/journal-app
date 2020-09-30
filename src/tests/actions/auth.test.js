import '@testing-library/dom';
import '@testing-library/jest-dom';
import { login, logout } from '../../actions/auth';
import { types } from '../../types/types';

describe('Pruebas con las acciones de auth', () => {
    
    test('login y logout deben de crear la accion respectiva', () => {
        
        const uid = 'ABC123';

        const displayName = 'Manuel';

        const loginAction = login( uid, displayName );

        const logoutAction = logout();

        expect( loginAction ).toEqual({
            type: types.login,
            payload: {
                uid,
                displayName
            }
        });

        expect( logoutAction ).toEqual({
            type: types.logout
        });

    });

    test('debe de realizar el logout', () => {
        
    });
    

})
