const post = {
    userName: "cesar Meza",
    texto: "Este es la mejor publicación del día",
    sharedSite: "https://www.hola-a-todos/",
    img:"imagen de mi post",
    date:"18/04//2022 13:00 hrs",
    reactions:{
        likes:45,
        hearts:62,
        itMattersTome:49,
        funny:8,
        Surprised:0,
        sad:0,
        anger:0
    },
    comments:300,
    shared: 455,

    infoPost(){
        return `Este el contenido de la siguiente publicación: ${this.texto}`
    }
}

console.log(post.infoPost())