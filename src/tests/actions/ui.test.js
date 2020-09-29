import '@testing-library/jest-dom';
import '@testing-library/dom';
import { finishLoading, removeError, setError, startLoading } from '../../actions/ui';
import { types } from '../../types/types';

describe('Pruebas en actions - ui', () => {

    test('Todas las acciones deben de funcionar', () => {
        
        const action = setError('help!!!');

        expect( action ).toEqual({
            type: types.uiSetError,
            payload: 'help!!!'
        });

        const removeErrorAction = removeError();
        const startLoadingAction = startLoading();
        const finishLoadingAction = finishLoading();

        expect(removeErrorAction).toEqual({
            type: types.uiRemoveError
        });

        expect(startLoadingAction).toEqual({
            type: types.uiStartLoading
        });

        expect(finishLoadingAction).toEqual({
            type: types.uiFinishLoading
        });
    });
    
})
