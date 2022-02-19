

function decode(expr) {
    const MORSE_TABLE = {
        '.-':     'a',
        '-...':   'b',
        '-.-.':   'c',
        '-..':    'd',
        '.':      'e',
        '..-.':   'f',
        '--.':    'g',
        '....':   'h',
        '..':     'i',
        '.---':   'j',
        '-.-':    'k',
        '.-..':   'l',
        '--':     'm',
        '-.':     'n',
        '---':    'o',
        '.--.':   'p',
        '--.-':   'q',
        '.-.':    'r',
        '...':    's',
        '-':      't',
        '..-':    'u',
        '...-':   'v',
        '.--':    'w',
        '-..-':   'x',
        '-.--':   'y',
        '--..':   'z',
        '.----':  '1',
        '..---':  '2',
        '...--':  '3',
        '....-':  '4',
        '.....':  '5',
        '-....':  '6',
        '--...':  '7',
        '---..':  '8',
        '----.':  '9',
        '-----':  '0',
        ' ':      ' '
    };
    
let arrMz = [];
let arrDotDash = [];
let OneSimbol = []
let arrAlphabet = []


function trueMorze(MORSE_TABLE, arrDotDash) {
   for (let meaning of arrDotDash) {
      for( let key in MORSE_TABLE ){
        if(key === meaning ) {           
            arrAlphabet.push(MORSE_TABLE[key]);
          }
        }  
   }  
} 
function signals (arrNumber) {
    for (let element of arrNumber) {    
        for (var i = 0; i < 10; i+=2) {      
            let dozen = (element.slice(i, i + 2));      
                switch (dozen) {
            case "10":
            OneSimbol.push('.');
            break;
            case "11":
            OneSimbol.push('-');
            break;
            case "**":
            OneSimbol.push(' ');
                i = 11    
            break;      
            }      
        }    
arrDotDash.push(OneSimbol.join(""))
OneSimbol = []
    }   
}
  
for (var i = 0; i < expr.length; i+=10) {
    arrMz.push(expr.slice(i, i + 10));
}
    
  signals(arrMz)  
  trueMorze(MORSE_TABLE, arrDotDash)     
  return(arrAlphabet.join(""))
}



module.exports = {
    decode
}