

function listPosition(word) {
  //Return the anagram list position of the word
  const charSet = new Set();

  word.forEach((letter) => {

  })
  return 1;
}




describe('Anagram', function() {
  var testValues = {'A' : 1, 'ABAB' : 2, 'AAAB' : 1, 'BAAA' : 4, 'QUESTION' : 24572, 'BOOKKEEPER' : 10743};
  it ("Must return appropriate values for known inputs", function() {
    for (var word in testValues) {
      if (testValues.hasOwnProperty(word)) {
        Test.assertEquals(listPosition(word), testValues[word], 'Incorrect list position for: ' + word);
      }
    }
  });
});
