const User = require('./../models/user')

class UserService {
    static create(id,userName,name){
        return new User(id,userName,name,"Sin bio")
    }

   static getInfo(user){
        return Object.values(user)
   
    }

}

module.exports = UserService