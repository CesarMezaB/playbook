const UserService = require('./../../app/services/UserService')
describe("Tests for UserService",() =>{
    
    test("1.Create a new user using the UserService",() =>{
        const user = UserService.create(1,"carlogilmar","Carlo")
        expect(user.id).toBe(1)
        expect(user.userName).toBe("carlogilmar")
        expect(user.name).toBe("Carlo")
        expect(user.bio).not.toBeUndefined()
    })

    test("2. Get all user data in a list",() =>{
        const user = UserService.create(1,"carlogilmar","Carlo")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("carlogilmar")
        expect(userInfoInList[2]).toBe("Carlo")
        expect(userInfoInList[3]).toBe("Sin bio")
       
    })

    test("3. Update userName", () =>{
        const user = UserService.create(1,"carlogilmar","Carlo")
        UserService.updateUserUserName(user,"carlog")
        expect(user.userName).toBe("carlog")
    })

    test("4. Given a list of users give me the list of UserNames", () =>{
        const user1 = UserService.create(1, "carlogilmar1","Carlo")
        const user2 = UserService.create(1, "carlogilmar2","Carlo")
        const user3 = UserService.create(1, "carlogilmar3","Carlo")
        const userNames = UserService.getAllUserNames([user1,user2,user3])
        expect(userNames).toContain("carlogilmar1")
        expect(userNames).toContain("carlogilmar2")
        expect(userNames).toContain("carlogilmar3")
    })

})