const http = require("http");
const fs = require("fs");
const args = require("minimist")(process.argv.slice(2));

let homecontent="";
let projectcontent="";
let registartionpage="";
fs.readFile("home.html",(err, home)=>{
    if (err){
        throw err;
    }
    homecontent = home;
});
fs.readFile("project.html",(err, project)=>{
    if (err){
        throw err;
    }
    projectcontent = project;
});
fs.readFile("registration.html",(err, registration)=>{
    if (err){
        throw err;
    }
    registartionpage = registration;
});
http
    .createServer((request, response)=>{
        let url = request.url;
        response.writeHeader(200, {"content-Type": "text/html"});
        switch (url){
            case "/project":
                response.write(projectcontent);
                response.end();
                break;
            case "/registration":
                response.write(registartionpage);
                response.end();
                break;
            default:
                response.write(homecontent);
                response.end();
                break;
        }
    })
    .listen(args["port"]);
    
