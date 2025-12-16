const fs = require("fs")

fs.writeFileSync('./data/temp.log', 'this is a temp file')
console.log('temp file has been created');

if (fs.existsSync("./data/temp.log")) {
    {
        console.log('file exist');

        fs.unlinkSync('./data/temp.log')
        console.log("file has been delete");
    }
}

try {
    fs.unlinkSync('./data/temp.log')
} catch (err) {
    console.error("the error is :", err.message);
}

fs.writeFile('./data/temp2.text', 'another temp file', (err) => {
    if (err) return console.error(err.message);

    console.log('another temp file created');

    fs.unlink('./data/temp2.text', (err) => {
        if (err) {
            console.error('error:', err.message);
        } else {
            console.log('temp2 deleted');
        }
    })
})