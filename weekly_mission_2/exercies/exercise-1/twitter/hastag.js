const hastag = {
    userName:"CesarM",
    descripcion:"Hola viajero de ",
    hastagName: "#Launchx",
    date:"18/04/2022",
    likes:45,
    retwweets:100,
    tweetsCited:6,
    comments:80,

    infoTweet(){
        return `Usuario: ${this.userName}, descripcion de tweet ${this.descripcion} ${this.hastagName}`
    }
}

console.log(hastag.infoTweet())