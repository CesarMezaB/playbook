const User = require('./../models/user')

class UserService {
    static create(id,userName,name){
        return new User(id,userName,name,"Sin bio")
    }

   static getInfo(user){
        return Object.values(user)
    }

    static updateUserUserName(user,name){
      
        return user.userName = name
    }

    static getAllUserNames(...users){
        let name1 = users[0][0].userName;
        let name2 = users[0][1].userName;
        let name3 = users[0][2].userName;
         let arr =[name1,name2,name3]
             
        return arr
    }

}

module.exports = UserService