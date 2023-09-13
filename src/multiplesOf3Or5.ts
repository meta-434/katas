// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23. Finish the solution so that it returns the sum of all the
// multiples of 3 or 5 below the number passed in. Additionally, if the number is negative,
// return 0 (for languages that do have them). Note: If the number is a multiple of both 3 and 5, only count it once.
//
// Courtesy of projecteuler.net (Problem 1)


export class Challenge {
    static solution(number: number) {
        let soln:number = 0;
        for (let i:number = number-1; i >= 3; i--) {
            const mult3: boolean = (i % 3 === 0);
            const mult5: boolean = (i % 5 === 0);
            if (
                (!mult3 && mult5) || (mult3 && !mult5)
                || (mult3 && mult5)
            ) {
                soln += i;
            }
        }
        return soln;
    }
}






import {assert} from "chai";

function test(num: number, expected: number) {
    assert.strictEqual(Challenge.solution(num), expected)
}

describe("solution", function(){
    it("should handle basic tests", function() {
        // 3 + 5 + 6 + 9 = 23
        test(10, 23);
        // 3 + 5 + 6 + 9 + 10 + 12
        test(15, 45);
        // 3 + 5 + 6 + 9 + 10 + 12 + 15
        test(16, 60);
    });
});
