import {Immutable, Strict} from "@raccoons-co/ethics";
import {Class} from "@raccoons-co/genera";
import Brain from "./bugeye/eventbus/Brain";
import AssignedTestCase from "./bugeye/eventbus/test/AssignedTestCase";
import FailedTestCase from "./bugeye/eventbus/test/FailedTestCase";
import TestSummary from "./bugeye/eventbus/test/TestSummary";
import LogRecord from "./bugeye/eventbus/common/LogRecord";
import ThrownException from "./bugeye/eventbus/common/ThrownException";
import PassedTestCase from "./bugeye/eventbus/test/PassedTestCase";

@Immutable
export default class CleanWayBuilder {

    private static singleInstance: CleanWayBuilder;

    private constructor() {
        // Intentionally empty.
    }

    public static instance(): CleanWayBuilder {
        if (!CleanWayBuilder.singleInstance) {
            CleanWayBuilder.singleInstance = new CleanWayBuilder();
        }
        return CleanWayBuilder.singleInstance;
    }

    /**
     * Assigns instance of class with test cases.
     *
     * @param testClass instance
     */
    public assign(testClass: Class): CleanWayBuilder {
        Strict.notNull(testClass);
        return this;
    }

    public build() {
        Brain.instance()
            .learn(TestSummary, new TestSummary())
            .recognize(AssignedTestCase)
            .recognize(PassedTestCase)
            .recognize(FailedTestCase)
            .recognize(TestSummary)
            .recognize(LogRecord)
            .recognize(ThrownException);
    }
}
