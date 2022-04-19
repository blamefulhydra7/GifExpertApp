import { getGifs } from "../../helpers/getGifs";

describe('Pruebas en GetGifs Fetch', () => {
    test('Debe de contener 10 elementos', async () => {
        const gifs = await getGifs('Goku');
        expect(gifs.length).toBe(10);
    });

    test('Debe de regresar arreglo vacío sin argumentos', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
});