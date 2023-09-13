// given a square matrix (NxN) find the determinant using laplace expansion
// | a b |               | a b c |
// | c d | = (a*b)-(c*b) | d e f |
//                       | g h i | = a(e*i - h*f) - b(d*i - g*f) + c(d*h - g*e)

export function determinant(m: number[][]) {
    const size: number = m.length;
    if (size === 1) { // 1x1 base case returns number
        return m[0][0];
    }
    else {
        let total: number = 0;
        for (let i:number = 0; i < size; i++) {
            let holdArr: number[][] = m;
            let factor: number = ((i % 2 === 0) ? 1 : -1); // starting at term 0 = positive, terms alternate sign
            let element = holdArr[0][i]; //

            // remove first row
            holdArr = holdArr.slice(1).map((row) => {
                // for each row, remove element in column i
                return row.slice(0,i).concat(row.slice(i+1,size+1))
            })
            total += element * factor * determinant(holdArr);
        }
        return total;
    }
}


import {expect} from 'chai';

describe("determinant", function () {
    const m1 = [[1, 3], [2, 5]];
    const m2 = [[2, 5, 3], [1, -2, -1], [1, 3, 4]];

    it("of a 1 x 1 matrix should yield the value of the one element", () => {
        expect(determinant([[1]])).to.equal(1);
    });

    // | 1 3 |
    // | 2 5 |
    it("should work correctly for 2 x 2 matrix", () => {
        expect(determinant(m1)).to.equal(-1);
    });

    // | 2  5  3 |
    // | 1 -2 -1 |
    // | 1  3  4 | = (2 * ((-2*4) - (-1*3))) - (5 * ((1*4)-(-1*1))) + (3 * ((1*3)-(1 * -2))) = (2 * -5) -
    it("should work correctly for 3 x 3 matrix", () => {
        expect(determinant(m2)).to.equal(-20);
    });
});
