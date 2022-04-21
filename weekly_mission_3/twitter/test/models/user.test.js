const User = require('./../../app/models/user')

describe("Esto es una suite de pruebas", () => {
    test('Create an User class', () => {
      const user = new User(1,"carlogilmar","Carlo","Bio") 
      
      expect(user.id).toBe(1);
      expect(user.userName).toBe("carlogilmar");
      expect(user.name).toBe("Carlo");
      expect(user.bio).toBe("Bio");
      expect(user.dateCreated).not.toBeUndefined();
      expect(user.lastUpdated).not.toBeUndefined();
    });

    test('Add getters', () => {
      const user = new User(1,"carlogilmar","Carlo","Bio") 
      
      expect(user.getUserName).toBe("carlogilmar")
      expect(user.getBio).toBe("Bio")
      expect(user.getDateCreated).not.toBeUndefined();
      expect(user.getLastUpdated).not.toBeUndefined();
    });
  })