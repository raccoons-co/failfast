import {Immutable, Strict} from "@raccoons-co/ethics";
import Neuron from "../Neuron";
import Brain from "../Brain";
import LogRecord from "../common/LogRecord";
import AssignedTestCase from "./AssignedTestCase";
import LogRecordBuilder from "../common/LogRecordBuilder";

@Immutable
export default class PassedTestCase implements Neuron {

    private readonly testCase: AssignedTestCase;

    constructor(testCase: AssignedTestCase) {
        this.testCase = Strict.notNull(testCase);
    }

    public activate(): void {
        const logRecord = new LogRecordBuilder()
            .addField("Passed")
            .addField(this.testCase.duration().toFixed(3))
            .addField(this.testCase.toString())
            .build();

        Brain.instance()
            .learn(LogRecord, logRecord);
    }
}
