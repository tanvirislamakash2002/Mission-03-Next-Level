const fs = require('fs')

const content1 = "this is a content \n nodejs is awesome 1"
const content2 = "this is a content \n nodejs is awesome 2"

try{
fs.writeFileSync('./data/diary.txt',content1)
console.log('file written sync');
}catch(err){
    console.error()
}

fs.writeFile('./data/diary2.txt', content2, (error)=>{
    if(error){
        console.error(error.message);
    }
    else{
        console.log('file written asynchronously')
    }
})