// given a square matrix (NxN) find the determinant using laplace expansion
// | a b |               | a b c |
// | c d | = (a*b)-(c*b) | d e f |
//                       | g h i | = a(e*i - h*f) - b(d*i - g*f) + c(d*h - g*e)

export function determinant(m: number[][]) {
    // return the determinant of the matrix passed in
    let termSignIsPos: boolean = true;

    return minor(m, undefined)
}

function minor(n: number[][], factor: number = 1, carryOver: number = 0) {
    console.log('carried over ', carryOver);
    let holdCarryover;
    if (!n || n.length === 0) {
        return factor * carryOver;
    }

    const size: number = n.length;
    if (size < 2) return n[0][0];
    else if (size === 2) {
        const det: number = ((n[0][0] * n[1][1]) - (n[0][1] * n[1][0]));
        console.log('2x2 received, returning ', factor, '* ', (n[0][0] * n[1][1]) - (n[0][1] * n[1][0]));
        return factor * (carryOver + det);
    } else {
        let holdArr: number[][] = [];
        let holdFactor: number = 1;
        for (let i: number = 0; i < size; i++) {
            holdArr = n;
            holdFactor = ((i % 2 === 0) ? 1 : -1) * n[0][i];
            // remove 1 element (row) from array at pos. 0, i.e., first row
            holdArr = holdArr.filter((_: number[], idx: number) => idx != 0);
            for (let j: number = 0; j < size - 1; j++) { // size -1 because top row was cut off
                holdArr[j] = holdArr[j].filter((_: number, idx: number) => idx !== i); // remove 1 element from row at pos. 1, i.e., column i
            }
            console.log('re-calling with ', holdArr, factor * holdFactor, carryOver)
            return minor(holdArr, factor * holdFactor, carryOver);
        }


    }


}


import {expect} from 'chai';

describe("determinant", function () {
    const m1 = [[1, 3], [2, 5]];
    const m2 = [[2, 5, 3], [1, -2, -1], [1, 3, 4]];

    it("of a 1 x 1 matrix should yield the value of the one element", () => {
        expect(determinant([[1]])).to.equal(1);
    });

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
