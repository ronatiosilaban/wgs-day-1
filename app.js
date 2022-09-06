//core module
//file system

// const fs = require('fs');
//menuliskan string ke file (synchrounous)

// fs.readFile('test.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('what is your name?', (name) => {
    rl.question('what your number ?', (number) => {
        rl.question('what your email ?', (email) => {
            rl.question(`what your email ${name} ?`, (yes) => {
                if (yes == 'yes') {

                    console.log(`Thank you ${name}, Number ${number}, Email ${email}`);

                }
                rl.close()

            })
        })
    })
})

