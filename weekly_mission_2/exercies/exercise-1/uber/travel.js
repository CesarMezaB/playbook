const travel={
    usurio:"Cesar Meza",
    point:"Aqui estoy en...",
    destination:"Aqui tengo que llegar...",
    driver:"Juanito",
    vehicle:"jetta 2020",
    registrationNumber:"HU55DDG", 
    payment:50,
    cashPayment:false,
    qualify:"",

    infoTravel(){
        return `El usuario ${this.usurio} esta en ${this.point} y  ${this.destination}`
    }

}

console.log(travel.infoTravel())