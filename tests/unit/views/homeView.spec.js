import { shallowMount } from "@vue/test-utils";
import HomeView from '@/views/HomeView';

describe('Pruebas en el Home View', () => {
    test('debe renderizar el componente correctamente', () => {
        const wrapper = shallowMount( HomeView )
        expect( wrapper.html() ).toMatchSnapshot()
    });

    test('Hacer click en un botón debe redireccionar a no-entry', () => {
        const mockRouter = {
            push: jest.fn() //Simulamos el método push del router
        }

        const wrapper = shallowMount( HomeView, {
            global: {
                mocks: {
                    $router: mockRouter
                }
            }
        })

        wrapper.find('button').trigger('click')
        expect( mockRouter.push ).toHaveBeenCalled
        expect( mockRouter.push ).toHaveBeenCalledWith({ name: 'no-entry' })
    });
});