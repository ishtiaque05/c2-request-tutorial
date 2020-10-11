const request = require('request');
// Documentation: https://github.com/request/request

/**
 * For this tutorial we are going to use https://api.mathjs.org/ API
 * and "request" package to send a request and evaluate math expressions
 * 
 * evaluateMathExpression(expression: string): this method take an expression
 * e.g., "1+1" and send a request using 'request' package
 * 
 */

export default class MathApi {
    constructor() {};

    /*
    *  makeRequestUrl returns the url to send request to for 
    *  evaluating a math expression 
    */
    public makeRequestUrl(mathExpression: string): string {
        return `http://api.mathjs.org/v4/?expr=${encodeURIComponent(mathExpression)}`;
    }

    /**
     * 
     * @param expressions: takes a string array containing expressions
     * i.e., ["1+1", "2*2"] and returns an array of result
     */
    public evaluateAllExpressions(expressions: string[]): Promise<number[]> {
        return Promise.reject("Not implemented");
    }

    /**
     *
     * @param expression: string e.g, "1+1"
     * Takes an expression and send a request using
     * 'request' package. This method rejects if an error occurs
     * or the response "statusCode" is not 200
     * 
     * On successfully response it resolves with the result of the
     * expression
     */
    public evaluateMathExpression(expression: string): Promise<number> {
        return Promise.reject("Not Implemented");
    }
}