const assert = require('chai').assert;
global.window = global;
require('../src/js/transLabValidate');
//Testing para validar el email
describe('Validar emails', () => {
    describe('Debería verificar si existe el arroba', () => {
        it('Debería el correo tener solo un arroba', () => {
            assert.equal(validateEmail("asdf@asdf.com"), true);
            assert.equal(validateEmail("asdf@@asdf.com"), false);
            assert.equal(validateEmail("asdf.com"), false);
        });
        it('Debería el correo tener un arroba antes del dominio', () => {
            assert.equal(validateEmail(".com@asdf"), false);
            assert.equal(validateEmail("fabian@laboratoria.la"), true);
        });
    }); (
        describe('Debería verificar si tiene un dominio', () => {
            it('Tiene un punto y luego solo caracteres del alfabeto', () => {
                assert.equal(validateEmail('asdf@asdf'), false);
                assert.equal(validateEmail('asdf@asdf.'), false);
            });
        }));
});

//Testing para validar la password
describe('Validar clave', () => {
    describe('verificar que contenga entre 6 y 8 caracteres, que sean solo numeros y que no tenga espacios en blanco', () => {
        it('verificar que contenga un maximo de 8 caracteres y minimo 6', () => {
            assert.equal(validatePassword('12345678'), true);
            assert.equal(validatePassword('123456'), true);
            assert.equal(validatePassword('123456789'), false);
            assert.equal(validatePassword('12345'), false);
        });
        it('verificar que contenga solo numeros', () => {
            assert.equal(validatePassword('12345678'), true);
            assert.equal(validatePassword('12a4g6'), false);

        });
        it('verificar que no contenga espacios en blanco', () => {
            assert.equal(validatePassword('12345678'), true);
            assert.equal(validatePassword('12 34'), false);
        });
    });
});
