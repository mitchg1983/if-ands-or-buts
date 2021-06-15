const prompt = require('prompt-sync')();

const bill1 = Number(prompt('How much did Person One pay?'));
const bill2 = Number(prompt('How much did Person Two pay?'));

const billTotal = (bill1 + bill2);

if (bill1 > bill2) {
    
    console.log (
        
        'Person Two should pay Person One:',((bill1 - bill2) / 2),'$'
        
        )
}

if (bill2 > bill1) {
    
    console.log (
        
        'Person One should pay Person Two:',((bill2 - bill1) / 2),'$'
        
        )
}