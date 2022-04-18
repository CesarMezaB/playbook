const trendingTopic ={
    userName:"Cesar Meza",
    interest:"educación",
    hastag:"#LaunchX",
    trend:1,
    tweets:5000,

    infoTrendingTopic(){
        return `Tendencia:${this.trend}, interes: ${this.interest}, hastag: ${this.hastag}, tweets: ${this.tweets}`
    }
}

console.log(trendingTopic.infoTrendingTopic())

