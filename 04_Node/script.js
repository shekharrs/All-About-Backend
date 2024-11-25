/* Module👇 */
// writeFile - to create the file
// appendFile - to update the file
// rename - to rename the file
// copyFile - to copy the another file
// unlink - to delete the file
// rm - to delete the folder
// readFile - to read the file data
// mkdir - to create the folder
// http - to create and manage web servers and handle HTTP requests and responses.


const fs = require('fs');
const http = require('http');

const server = http.createServer(function(req, res){
    res.end("Hello Dosto");
})

server.listen(3000);

/* writeFile - to create cpthe file */
// fs.writeFile("writeFile.txt", "writeFile - creating a file", function(err){
//     if(err) console.log(err);
//     else console.log("The file is successfully created.");
// })

/* appendFile - to update the file */
// fs.appendFile("appendFile.txt", "through append file we can update the file", function(err){
//     if(err) console.log(err);
//     else console.log("successfully the file is updated");
// })

/* rename - rename the file */
// fs.rename("writeFile.txt", "writefile.txt", function(err){
//     if(err) console.log(err);
//     else console.log("Successfully the name of the file is change");
// })

/* copyFile - copy the another file */
// fs.copyFile("appendFile.txt", "./copy/copyFile.txt", function(err){
//     if(err) console.log(err);
//     else console.log("Successfully the file is copied");
// })

/* unlink - to delete the file */
// fs.unlink("hello.txt", function(err){
//     if(err) console.log(err);
//     else console.log("Successfully the file is deleted");
// })

/* rm - to delete the folder */
// fs.rm("./Folder", {recursive: true}, function(err){
//     if(err) console.log(err.message);
//     else console.log("Successfully removed the folder");
// })

/* readFile - using readFile you can read the data (content inside the file) */
// fs.readFile("writeFile.txt", "utf8", function(err, data){
//     if(err) console.log(err);
//     else console.log(data);
// })

/* mkdir - to create a folder */
// fs.mkdir("./Folder/index.html", {recursive: true}, function(err){
//     if(err) console.log(err);
//     else console.log("created the folder");
// })