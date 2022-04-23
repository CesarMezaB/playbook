const UserView = require('./../../app/views/UserView')

describe("Tests for UserView", () => {

    test("Return an error object when try to create a new user with an nul payload", () =>{
        const payload = null
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/payload no existe/)
    })

   
})