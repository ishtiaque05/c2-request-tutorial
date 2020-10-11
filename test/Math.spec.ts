import {expect} from "chai";
import MathApi from "../src/MathApi";

describe("Math", function () {
    
    const expressions: {[id:string]:string} = {
        add: "1+1",
        multiply: "4*2"
    }
    let math: MathApi = new MathApi();

    // Perform an add operation "1+1"
    it("should be able to evaluate add expression", function () {
        const input = expressions["add"];
        return math.evaluateMathExpression(input).then((result) => {
            expect(Number(result)).to.deep.equal(2);
        }).catch((err) => {
            expect.fail("", "", err.message);
        });
    });

    it("should reject invalid expressions", function () {
        const input = "foo";
        return math.evaluateMathExpression(input).then((result) => {
            expect.fail("", "", `This should have rejected, how did we get ${result}`);
        }).catch((err) => {
            // We'll let this pass if it goes in the catch at all, no required error formats
        });
    });

    // Perform many math operations
    it("should evaluate all the math expressions in an array", function () {
        const input = [expressions["add"], expressions["multiply"]];
        const expected = [2, 8];
        return math.evaluateAllExpressions(input).then((result) => {
            expect(result).to.deep.equal(expected);
        }).catch((err) => {
            expect.fail("", "", err.message);
        });
    });


    it("should evaluate empty expression", function () {
        const input = [];
        const expected = [];
        return math.evaluateAllExpressions(input).then((result) => {
            expect(result).to.deep.equal(expected);
        }).catch((err) => {
            expect.fail("", "", err.message);
        });
    });
});