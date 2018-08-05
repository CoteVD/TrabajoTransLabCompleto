const assert = require('chai').assert;
global.window = global;
require('../src/js/transLabValidate');
describe('Validar emails', ()=>{ 
  describe('Debería verificar si existe el arroba', ()=>{
      it('Debería el correo tener solo un arroba', ()=>{
          assert.equal(validateEmail("asdf@asdf.com"), true); 
          assert.equal(validateEmail("asdf@@asdf.com"), false);
          assert.equal(validateEmail("asdf.com"), false);
      });
      it('Debería el correo tener un arroba antes del dominio', ()=>{
          assert.equal(validateEmail(".com@asdf"), false);
          assert.equal(validateEmail("fabian@laboratoria.la"), true);
      });
  });(
  describe('Debería verificar si tiene un dominio', ()=>{
      it('Tiene un punto y luego solo caracteres del alfabeto', ()=>{
          assert.equal(validateEmail('asdf@asdf'), false);
          assert.equal(validateEmail('asdf@asdf.'), false);
      });
  }));
  describe('Debería verificar que no tenga carácteres raros', ()=>{

  });(
  describe('Debería verificar que tenga al menos 1 caracter antes del arroba', ()=>{

  }));
});
