 class Pokemon{
    constructor(name){
       this.name=name
    }
    
    sayHello(){
        console.log(`Mi pokemon ${this.name} te saluda!!!`)
    }
    sayMessage(frase){
        console.log(` Mi pokemon ${this.name} dice: ${frase}`)
       
    }
}

module.exports={
    Pokemon
}