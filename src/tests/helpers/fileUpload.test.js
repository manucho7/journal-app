import '@testing-library/dom';
import '@testing-library/jest-dom';
import { fileUpload } from '../../helpers/fileUpload';
import cloudinary from 'cloudinary';

cloudinary.config({ 
    cloud_name: 'dzf9r3vek', 
    api_key: '358411452477347', 
    api_secret: 'KENErrk7X7LDMaLJw9masBZ8jOg' 
});

describe('Pruebas en fileUpload', () => {
    
    test('debe de cargar un archivo y retornar el URL', async ( done ) => {
        const resp = await fetch('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Color_icon_green.svg/220px-Color_icon_green.svg.png')
        const blob = await resp.blob();

        const file = new File([blob], 'foto.png');
        const url = await fileUpload( file );

        expect(typeof url ).toBe('string');

        const segments = url.split('/');
        const imageId = segments [ segments.length - 1 ].replace('.png', '')
        cloudinary.v2.api.delete_resources(imageId, {}, () => {
            done();
        });
    });
    
    test('debe de retornar un error', async () => {
        const file = new File([], 'foto.png');
        const url = await fileUpload( file );

        expect( url ).toBe( null );
    });
    

})
