import '@testing-library/dom';
import '@testing-library/jest-dom';
import { authReducer } from '../../reducers/authReducer';
import { types } from '../../types/types';

describe('Pruebas en authReducer', () => {
    
    test('debe de realizar el login', () => {
        
        const initState = {};
        
        const action = {
            type: types.login,
            payload : {
                uid: 'abc',
                displayName: 'Manuel'
            }
        };
        const state = authReducer( initState, action );

        expect( state ).toEqual({
            uid: 'abc',
            name: 'Manuel'
        });
        
    })

    test('debe de realizar el logout', () => {
        const initState = {
            uid: 'jfkdkefhg',
            name: 'Manuel'
        };
        
        const action = {
            type: types.logout
        }

        const state = authReducer( initState, action );

        expect( state ).toEqual({});
    })
    
    test('no debe de hacer cambios en el state', () => {
        const initState = {
            uid: 'jfkdkefhg',
            name: 'Manuel'
        };
        
        const action = {
            type: 'jdfjfj'
        }

        const state = authReducer( initState, action );

        expect( state ).toEqual( initState );
    })

})
