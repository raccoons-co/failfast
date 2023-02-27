import Worker from "./Worker";
import FailedTestCaseException from "./FailedTestCaseException";
import TestCase from "./TestCase";
import {TestCaseState} from "./TestCaseState";

export default class FailedTestCase implements Worker {

    private testCase: TestCase;
    private exception: FailedTestCaseException;

    constructor(testCase: TestCase, exception: FailedTestCaseException) {
        this.testCase = testCase;
        this.exception = exception;
    }

    execute(): void {
        console.log( "%s: %s - %s", TestCaseState.failed, this.testCase, this.exception.message);
    }
}