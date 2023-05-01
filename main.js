const http = require('https');
const fs = require('fs');


//1
function downloadAndWrite(){
    const URL = 'https://raw.githubusercontent.com/4nth0nyl1MHC/UK-Scanning-Directory-2019/77136ccadea675af2345a40a0287f93ebe40e51f/UK%20Scanning%20Directory%20-%20January%202019/Various%20Misc%20Files/UK%20Airports%202019%20(VHF%20%26%20UHF)/London%20Swanwick%20Control%202017.txt'
    const write = fs.createWriteStream("./Update.txt");


http.get(URL, (res) => {
    if(res.statusCode !== 200){
        console.log('Помилка завантаження')
    }else
  res.pipe(write);
    console.log('Записано')
})
}
//2
function read(){
const read =fs.readFileSync('./Update.txt').toString()
console.log(`К-сть слів = ${read.split(' ').length} , К-сть строк = ${read.split('\n').length}`)
}

//1
downloadAndWrite()
//2
read()