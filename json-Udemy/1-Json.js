 //json : 'used to convert object to string , 
 //parse is udes to convert string to obj


const book= {
    title : 'SECRETE',
    author : 'Byrne'
}
const bookJSON = JSON.stringify(book);
console.log(bookJSON);

const bufferData = JSON.parse(bookJSON);
console.log(bufferData.title);
//<<<<<<==============================================>>>>>>>>>
//write file in the json........
const fs = require('fs');

const book1= {
    title : 'SECRETE',
    author : 'Byrne'
}
const bookJSON1 = JSON.stringify(book1);
fs.writeFileSync('1-Json.json',bookJSON1)

//<<<<<<===================>>>>>>>>>>>>

//readfile
const dataBuffer =fs.readFileSync('1-Json.json')
console.log(dataBuffer.toString());


//read from 2-json
const data =fs.readFileSync("2-Json.json")
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON);

user.name= "krishna"
user.palnet="earth"
user.age=23

const userJSON = JSON.stringify(user)
const readName = fs.writeFileSync('2-Json.json',userJSON);
 console.log(readName);
 