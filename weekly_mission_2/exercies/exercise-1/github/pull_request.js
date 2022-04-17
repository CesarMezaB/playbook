const pullRequest =  {
title: "LaunchX",
branchName: "main",
status: "closed",
RepositoryNameAssociated: "Sponn-knife",
getStatus(){
    return `Pull Request status: ${this.status}`;
},
    
}

console.log("Tile Pull: " + pullRequest.title)
console.log("status " + pullRequest.getStatus())