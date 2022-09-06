// core module
// file system

const fs = require('fs');
// menuliskan string ke file(synchrounous)

fs.readFile('test.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
})