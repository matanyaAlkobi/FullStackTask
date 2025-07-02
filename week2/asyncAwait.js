// question numer 1
import fs from "fs"
import fsa from "fs/promises";

function readFilePromise(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, "utf-8", (err, data) => {
            if (err) { return reject(err); }
            return resolve(data)
        }
        )
    })
}

// const p = readFilePromise("file.txt")
// .then(data => console.log("File content:", data))
// .catch(err => console.error("Error reading file:", err))


// question  number 2
async function readFileAsync(path) {
    try {
        const data = await fsa.readFile(path, "utf-8")
        return  data;
    }
    catch(err){
        return(err.message);
    }
}
// readFileAsync("file.txt")
// .then(data=> console.log(data))
// .catch(err => console.log(err))


//  exercise 3

async  function getFileSize(path){
    try{
    const  stats = await fsa.stat(path);
    return stats.size;

    }
    catch(err){
        return (err.message)
    }
}

// getFileSize("file.txt")
// .then(size => console.log(size))
// .catch(err => console.log(err))


//exercise 4
async function listFiles(dir){
    try{
    const files = await fsa.readdir(dir)
    const onlyfiles = []
    
    for(let file of  files){
        const stats = await fsa.stat(dir + file);
        
        if (stats.isFile()){
            onlyfiles.push(file)
        }
    }

    return onlyfiles
    }
    catch(err){
        return err.message
    }
}

// listFiles("./")
// .then(files => console.log(files))
// .catch(err => console.log(err))


// exercise  5
async function readFileInOrder(files) {
    const results = [];
    for (const file of files) {
        const data = await readFileAsync(file);
        results.push(data);
    }
    return results;
}


// readFileInOrder(["./file.txt","./quotes.txt"])
// .then(filesData => console.log(filesData))
// .catch(err => console.log(err))


//  exercise 6
async function readFilesParallel(files){
        try{
    const filesData = await Promise.all(files.map(file => readFileAsync(file)))
    return filesData;
    }
    catch(err){
        return err.message;
    }
}

// readFilesParallel(["./file.txt","./quotes.txt"])
// .then(filesData => console.log(filesData))
// .catch(err => console.log(err))


// exerice 7
async function fileExists(path){
    try{
        await  fsa.access(path)
        return true
    }
    catch(err){
        return  false
    }
}

// fileExists("./file.tx")
// .then(bool => console.log(bool))
// .catch(bool =>  console.log(bool))



// exercise 8
async function  copyFile(src,dest){
    try{
    const fileContant = await fsa.readFile(src,"utf-8")
    await fsa.writeFile(dest,fileContant)
    return "succeeded";
    }
    catch(err){
        return  err.message
    }  
}

// copyFile("./file.txt","./file2.txt")
// .then(suc => console.log(suc))
// .catch(err => console.log(err));

