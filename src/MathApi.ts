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
        const resultArray: Array<Promise<number>> = [];
        for (const expression of expressions) {
            resultArray.push(this.evaluateMathExpression(expression));
        }
        return Promise.all(resultArray)
    }

    /**
     * 
     * Takes an expression e.g., '1+1' and send a request using
     * 'request' package. This method rejects if an error occurs
     * or the response "statusCode" is not 200
     * 
     * On successfully response it resolves with the result of the
     * expression
     */
    public evaluateMathExpression(expression: string): Promise<number> {
        return new Promise ((resolve, reject) => {
            request(this.makeRequestUrl(expression), (error, response, body) => {
                if (error) {
                    // This error is for if the request completely failed, for instance if it wasn't given a URL
                    return reject(error);
                } else if (response && !(response.statusCode === 200)) {
                    // This case is if the request was sent, but something went wrong
                    return reject("Response was not successful!");
                } else {
                    // We got the response back, and the value we want is in the body. So we cast it, then resolve our promise with it
                    return resolve(Number(body));
                }
            });
        }); 
    }
}