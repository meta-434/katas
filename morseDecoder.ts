// 6 kyu
// Decode a given morse code string (specifically according to the provided dictionary!!!!)
// three spaces is a space, and a space separates in a morse code word.

const MORSE_CODE = {
    '-.-.--': '!',
    '.-..-.': '"',
    '...-..-': '$',
    '.-...': '&',
    '.----.': "'",
    '-.--.': '(',
    '-.--.-': ')',
    '.-.-.': '+',
    '--..--': ',',
    '-....-': '-',
    '.-.-.-': '.',
    '-..-.': '/',
    '-----': '0',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '---...': ':',
    '-.-.-.': ';',
    '-...-': '=',
    '..--..': '?',
    '.--.-.': '@',
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    '..--.-': '_',
    '...---...': 'SOS'
};

export function decodeMorse(morseCode: string): string {
    const hold: string[] = [];
    // console.log(`morseCode >${morseCode}<`);
    morseCode.split('   ').forEach((morseWord: string) => {
        // console.log('morseword: ', morseWord, ' len:',morseWord.length);
        hold.push(morseWord.split(' ').map((morseLetter: string) => {
            // console.log(`morseLetter @ ${idx}`, morseLetter, '=>', MORSE_CODE[morseLetter]);
            return MORSE_CODE[morseLetter]
        }).join(''));
    });

    return hold.join(' ').trim();
}

import { assert } from 'chai';

const Test = {
    expect: (...args: any[]) => (assert as any)(...args),
    assertEquals: (...args: any[]) => (assert as any).equal(...args),
};

describe("Example from description", function() {
    it('HEY JUDE', () => {
        Test.assertEquals(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE')
    });
});

describe("Your own tests", function() {
    it('Something', () => {
        // your tests
        Test.assertEquals(decodeMorse('    .   .  '), 'E E');
        Test.assertEquals(decodeMorse('      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-     '), 'SOS! THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.')
    });
});
