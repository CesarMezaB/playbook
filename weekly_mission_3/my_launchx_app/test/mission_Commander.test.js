const MissionCommander = require('./../app/mission_Commander')


describe("Pruebas de unidad de Misssion Commander", () => {
    test('Caso de prueba 1: Cracion de objeto', () => {

     //Aqui va el codigo a utilizar
      const carlo = new MissionCommander("Woopa")
    
     // Validar el resultado esperado
      expect(carlo.name).toBe("Woopa");
    });
  })