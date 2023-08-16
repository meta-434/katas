// 6 kyu
// given a string, encode it such that unique characters are represented as "(",
// and characters that are repeated are represented as ")"

function duplicateEncode(word: string){
    const charSet = new Set(word.toLowerCase().split(''));
    const result: string[] = [];
    const splitWord = word.toLowerCase().split('');

    splitWord.forEach((val:string, index: number) => {
        console.log('index, ', index, 'val', val);
        if (charSet.has(val)) {
            // works for all dupes AFTER 1 occurrence
            if (splitWord.indexOf(val) === splitWord.lastIndexOf(val)) {
                result.push("(");
            } else {
                // if charSet has the char, but it will be removed after first occurrence, replace with ) instead
                result.push(")");
            }
            charSet.delete(val);
        } else {
            result.push(")");
        }
    });
    return result.join('');
}

// See https://www.chaijs.com for how to use Chai.
import { assert } from "chai";

// TODO Add your tests here
describe("example", function() {
    it("test", function() {
        assert.strictEqual(duplicateEncode("din"),"(((");
        assert.strictEqual(duplicateEncode("recede"),"()()()");
        assert.strictEqual(duplicateEncode("Success"),")())())","should ignore case");
        assert.strictEqual(duplicateEncode("(( @"),"))((");
    });
});


