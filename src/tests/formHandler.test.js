import { handSubmit } from '../client/js/formHandler'


describe('Test, the function "handSubmit()" should exist' , () => {
    test('It should return true', async () => {
        expect(handSubmit).toBeDefined();
    });
});
describe('Test, the function "handSubmit()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof handSubmit).toBe("function");
    });
});
