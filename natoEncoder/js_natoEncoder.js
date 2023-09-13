var nato = (function() {
  var letters =  {
    "A": "Alpha",  "B": "Bravo",   "C": "Charlie",
    "D": "Delta",  "E": "Echo",    "F": "Foxtrot",
    "G": "Golf",   "H": "Hotel",   "I": "India",
    "J": "Juliett","K": "Kilo",    "L": "Lima",
    "M": "Mike",   "N": "November","O": "Oscar",
    "P": "Papa",   "Q": "Quebec",  "R": "Romeo",
    "S": "Sierra", "T": "Tango",   "U": "Uniform",
    "V": "Victor", "W": "Whiskey", "X": "X-ray",
    "Y": "Yankee", "Z": "Zulu"
  }

  return function(word) {
    let a = word.toUpperCase().split('').map((letter) => letters[letter]).join(' ');
    console.log('a', a);
    return a;
  }
})();



const chai = require("chai");
const assert = chai.assert;

// TODO these tests don't work because of the weird function declaration.

// describe("Solution", function() {
//   it("should test for something", function() {
//     assert.strictEqual(this.nato('hi'), 'Hotel India');
//   });
// });
