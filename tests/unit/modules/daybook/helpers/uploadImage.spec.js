import 'setimmediate'
import cloudinary from 'cloudinary';
import uploadImage from '@/modules/daybook/helpers/uploadImage';
import axios from 'axios';

cloudinary.config({
    cloud_name: 'dbxgdg4f9',
    api_key: '837362859131169',
    api_secret: 'vo4G52NleaiqXoEsfdmtgnbgR90'
})

describe('Pruebas en el uploadImage', () => {
    
    test('debe cargar un archivo y retornar el url', async() => {
        const { data } = await axios.get('https://res.cloudinary.com/dbxgdg4f9/image/upload/v1666857830/cld-sample-2.jpg', {
            responseType: 'arraybuffer'
        })

        const file = new File([data], 'foto.jpg')
        const url = await uploadImage( file )

        expect( typeof url ).toBe('string')

        const segments = url.split('/')
        const imageId = segments[ segments.length - 1 ].replace('.jpg','')
        const {deleted} = await cloudinary.v2.api.delete_resources( imageId )

        expect(deleted[imageId]).toBe('deleted')
    });
});