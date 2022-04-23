const UserView = require('./../../app/views/UserView')

describe("Tests for UserView", () => {

    test("Return an error object when try to create a new user with an nul payload", () =>{
        const payload = null
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/payload no existe/)
    })

    test("Return an error object when try to create a new user with a payloas with invalid properties", () =>{
        const payload = {username: null, name: 12, id:"id"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor valido/)

    })

    test("Return an error objeto when try to create a new user whit a payload with missing properties", () =>{
        const payload = {username:"Username"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor valido/)
    })

    test("Create a user by a given valid payload", () =>{
        const payload = {username: "username", id:1, name: "name"}
        const result = UserView.createUser(payload)
        expect(result.name).toBe("name")
        expect(result.username).toBe("username")
        expect(result.id).toBe(1)
    })
   
})