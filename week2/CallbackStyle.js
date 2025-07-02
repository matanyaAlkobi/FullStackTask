// exercise  1

import fs from "fs"
import  path  from "node:path";
import  readline from "readline"

new Promise((resolve,reject) => {
    fs.readFile("./week2/file.txt","utf-8",(err,data)=>{
        data? resolve(data) : reject(err)
       })

    
}).then(data => {console.log("file data" +": "+ data)
    return new Promise((resolve, reject) => {
    fs.stat("./week2/file.txt",(err,stats) =>{
        if (err) return reject(err);
    resolve(stats);
        })
    })
})
.then((stats) =>{
    console.log(`size ${stats.size} bytes`);
    console.log(`created at: ${stats.birthtime.toISOString()}`);
})
.catch((err) => console.log(err));



// exercise 2
fs.readdir(path.resolve("./week2"),"utf-8",(err, files) => {
    if  (err) {
        console.error("Failed to read directory:", err);
        return;
    }
    files.forEach((file) => {
        fs.stat(path.resolve("./week2/" + file), (err,  stats) =>{
            if (err){
                console.log("Failed to stat file:", err);
                return;
            }
            if (stats.isFile){
                console.log(file)
            }
        })
    })
})



// exercise 3
function fn(num){
    if(num === 0) return;
    setTimeout(() => {
        console.log(num)
        fn(num -1)
    }, 1000);
}

fn(5)


// exercise 4


