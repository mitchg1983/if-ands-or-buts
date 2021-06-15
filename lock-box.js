const pinCode = '1234';
const prompt = require('prompt-sync')();
const attempt = prompt('What is your PIN code?')

if (attempt === '1234') {
    console.log ('Success!')
}

else {
    console.log ('Failure')
}