const userFacebook = {
    name:"cesar",
    lastName:"Meza",
    email:"cesar_meza0154@hotmail.com",
    password:"****",
    dateOfBirth:"12/11/1998",
    gender: "hombre",
    phoneNumber: "55555555",

    greetUser(){
        return `Hola ${this.name} ${this.lastName} como te va?`
    }
}

console.log(userFacebook.greetUser());