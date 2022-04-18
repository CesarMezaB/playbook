 const user ={
     name:"cesar Meza",
     tel:"555555555",
     email:"cesar_m12@hotmail.com",
     verified:false,
     accountCreation:"2014",
     country:"Mexico",
     language:"Español",
     gender:"Hombre",

     infoUserTwiter(){
         return `Nombre de usuario: ${this.name}, cuenta verificada: ${this.verified}, pais: ${this.country}`;
     }
 }

 console.log(user.infoUserTwiter());