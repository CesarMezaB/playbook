const issue = {
    title:"LaunchX",
    repositoryNameAssociated:"Sponn-knife",
    status :"open",
    numberOfComments :3,
    labels :2,
    author :"CesarM",
    dateCreated :"15-4-2022",
    lastUpdated :"16-4-2022",

    getTitleAndAuthor(){
        return `Issue Title: ${this.title} Author: ${this.author}`
    },
    getGeneralInfo(){
        return `Repository name associated ${this.repositoryNameAssociated}, number of comments ${this.numberOfComments}` 

    }

}
    
   console.log("state issue: " + issue.status)
   console.log(issue.getTitleAndAuthor())
   console.log(issue.getGeneralInfo())