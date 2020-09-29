

export const fileUpload = async ( file ) => {

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dzf9r3vek/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {
        
        const respuesta = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });

        if ( respuesta.ok ) {
            const cloudResp = await respuesta.json();
            return cloudResp.secure_url;
        } else {
            return null
        }

    } catch (error) {
        throw error;
    }
}