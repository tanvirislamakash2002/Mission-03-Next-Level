const fs = require('fs')
const path = require('path')

const sourceDir = path.join(__dirname, 'output', 'messy-file');
const organizedDir = path.join(__dirname, 'output', 'organized')

const categories = {
    images: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg"],
    documents: [".pdf", ".doc", ".docx", ".txt", ".rtf"],
    videos: [".mpi", ".avi", ".mkv", ".mov", ".vmv"],
    audio: [".mp3", ".waV", ".flac", ".aac", ".ogg"],
    code: ["j5", ".py", ".java", ".cpp", ".html", ".css"],
    archives: [".zip", ".rar", ".tar", ".gz", ".7z"],
    spreadsheets: [".xls", ".xlsx", ".csV"],
    others: []
};
const testFiles = [
    "vacation.jpg",
    "report.pdf",
    "presentation.pptx",
    "music.mp3",
    "video.mp4",
    "script.js",
    "data.csv",
    "archive.zip",
    "photo.png",
    "notes.txt", 
    "app.py",
    "movie.avi",
    "song.wav",
    "backup.tar.gz",
    "random.xyz",
    "nodejs.zip"
];

function initializeDirectories(){
if(!fs.existsSync(sourceDir)){
    fs.mkdirSync(sourceDir, {recursive:true})

    testFiles.forEach((file)=>{
        fs.writeFileSync(path.join(sourceDir,file),`Content of ${file}`)
    })
}

console.log("messy directories files are created!!");

if(!fs.existsSync(organizedDir)){
    fs.mkdirSync(organizedDir, {recursive: true})
}
Object.keys(categories).forEach(category=>{
    const categoryPath=path.join(organizedDir, category);
    if(!fs.existsSync(categoryPath)){
        fs.mkdirSync(categoryPath)
    }
})
}

function getCategory(filename){
    const ext = path.extname(filename).toLowerCase()
    for(const [category, extension] of Object.entries(categories))
    {
        if(extensions.includes(ext)){
            return category
        }
        return "others"
    }
}
