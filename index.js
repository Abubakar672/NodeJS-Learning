// /*  
// As when we have to read something from any other file
// so we use the require thing. and in that file that should 
// be exported properly by moduele.export{} and here we
// can call it by using the require and giving the path filename.
// */
// const app = require('./testFile');


// var arr= [10,20,5,3];
// // console.log(arr);
// // console.log(app.x);
// // console.log(app.z.call());

// /* 
// Filter is only applicable for the array and it will automatically 
// traverse the complete Array and print it out even though in its 
// return statement you can apply any condition and print out the 
// result you want.  
//  */
// let testing= arr.filter((item)=>{
// // console.log(item)
// return item%2===0
// })

// console.log(testing);


// /*
// Global Modueles =>
// Core Modueles => Predefined methods to use e.g, can be to used API to integrate the Database, File system(fs) 
// Global Modueles => Are the modueles that are not needed to be import e.g. Console.log()
// and Non Global Moduele are the moduele for which we have to import the modueles like fs.wrtieFileSync("Hello.txt", Hello text file data)
// now as to use fs we need to import it first
// */



// //Creating a basic server on Node JS

// const server = require('http');
// /*
// As here i am creating a server and then after the function calling of createServer we will be also telling
// the port on which it has to listen i have defined the 4500 port.
// */

// /* 
// As the create server commands take two parameters one is request and second is reponse and in a arrow function.
// */


// /*
// As the resp is the keyword that i have used to send the response so functions of response will be triggered as resp.(Function name)
// and the respond will be send.
// */

// function serv1 (req,resp){

//      resp.write("Hello");
//      resp.end();


// };

// // server.createServer(serv1).listen(4500);

// // server.createServer((req, resp)=>{
// // resp.write("Hello Its AbuBakar here");
// // resp.end();
// // }).listen(4500);

// var a =2;
// var b =2;

// function sum(a,b){
//     return a+b;
// }



// function sum1(req, resp){
//     resp.write("sum");
//     resp.end();
// }


// const ts = require("http");



// ts.createServer((req,resp)=>{

// resp.write("Hi Abubakar");
// resp.end()

// }).listen();


// // server.createServer(sum1).listen(4200);

// //Package uasge

// const color = import('chalk');


// console.log("Hello".red)  ;

// console.log("Hello")


// const data = require('./data');

// ts.createServer((req,resp)=>{

//     resp.writeHead(200,{'Content-Type':'Application\json'});
//     resp.write(data);
//     resp.end();

// }).listen(4000);



// /*
// Writing data into a file using process.argv and the file system 
// moduele is already in node js as named fs. 
// */

// const fS = require('fs')

// /*
// As this process.argv is been used to take input
// and write it into the file
// */

// // const input = process.argv;

// // const test = 20;


// // console.log('Input here ------->',input)

// // if(test%2!=0){
// //     fS.writeFileSync(input[2],input[3]);
// // }
// // else{
// // fS.writeFileSync(input[2],input[4]);
// // }




// const SS = require('http');

// const fields = JSON.stringify([
//     {name:'Usman', Age:'22'},
//     {location:'Johar Town', Country:'PAK'}

// ]);

// SS.createServer((req,resp)=>{
//     resp.writeHead('200',{'Content-Type':'Application\JSON'});
//     resp.write(fields);
//     resp.end();
// }).listen(4500);




// const FS = require('fs');
// var inputtt = process.argv;

// if(inputtt[2]=='add'){

//     FS.readFileSync(inputtt[3], [4]);
// }
// else if(inputtt[2]=='remove'){

//     FS.unlinkSync(inputtt[3]);

// }else{
//     FS.readFileSync(inputtt[3],inputtt[4]);
// }



// const test_Server= require('http');
// const data = require ('./t')

// test_Server.createServer((req,rep)=>{

//     rep.writeHead('200',{'Content-Type':'Application\JSON'});
//     rep.write(data);
//     rep.end();

// }).listen(6200);



// const tfs = require('fs');
// const { dir } = require('console');

// const input = process.argv;
// const f= 20;


// if(f%2==0){
//     tfs.writeFileSync(input[2],input[3]);
// }
// else{
//     tfs.unlinkSync(input[2])
// }
// console.log(input);
// // fS.readFileSync()

const dire = require('path');
const fs = require('fs');

/* 
this dire.join will give us the path name of the current directory and the if we enter the 
name of the particular folder so it will give us the path of that folder like the way i have 
entered files over there. 
*/

const directory = dire.join(__dirname,'files');
console.log("helloooo ------>",directory);
const input = process.argv;

// fs.writeFileSync(input[2],input[3]);
// fs.unlinkSync(input[2]);

for(i=0;i <5 ; i++){
    fs.writeFileSync(directory+`/Hello${i}.txt`,"Sample here");
}

/*
As this the redddir function is us ed to read out 
all the data of a particular directory.
*/
fs.readdir(directory,(error,data)=>{
    data.forEach((item)=>{
        console.log(`The Item is ${i} here------>`,item);
    })
console.log("The files data is ->",data);
});

// fs.readFileSync(directory,(error,data)=>{
// console.log("The data of file is here ---->",data);
// })