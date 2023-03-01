import SensorNeuron from "../SensorNeuron";

//@Immutable
export default class LogRecord implements SensorNeuron {

    private readonly date: Date;
    private readonly record: string[];

    constructor(...args: string[]) {
        this.date = new Date();
        this.record = args;
    }

    activate(): void {
        console.log(this.date, this.record);
    }
}