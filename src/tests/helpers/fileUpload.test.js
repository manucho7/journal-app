import '@testing-library/dom';
import '@testing-library/jest-dom';
import { fileUpload } from '../../helpers/fileUpload';

describe('Pruebas en fileUpload', () => {
    
    test('debe de cargar un archivo y retornar el URL', async () => {
        const resp = await fetch('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Color_icon_green.svg/220px-Color_icon_green.svg.png')
        const blob = await resp.blob();

        const file = new File([blob], 'foto.png');
        const url = await fileUpload( file );

        expect(typeof url ).toBe('string');
    });
    
    test('debe de retornar un error', async () => {
        const file = new File([], 'foto.png');
        const url = await fileUpload( file );

        expect( url ).toBe( null );
    });
    

})
