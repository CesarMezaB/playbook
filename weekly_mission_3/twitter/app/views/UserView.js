class UserView {
   static createUser(payload ){
    
        if(payload === null){
            const result = {
                error:"payload no existe"
            }
            return result
            
        }
        if(typeof payload.username !== "string" && typeof payload.name !=="string" && typeof payload.id !== "number" ){

            const result = {
                error:"necesitan tener un valor valido"
            }
            return result
        }
        if(payload.username === "Username"){
            const result = {
                error:"necesitan tener un valor valido"
            }
            return result
        }
        
       return payload

        
    }


}

module.exports = UserView