import {BrainException, CleanWayBuilder} from "../main/index";
import {assert} from "chai";
import YourTest from "./YourTest";
import FailedTestCaseTest from "./FailedTestCaseTest";
import ImmutableObjectTest from "./ImmutableObjectTest";
import BrainTest from "./BrainTest";

assert.throws(() => {
        CleanWayBuilder.instance()
            .assign(new YourTest())
            .assign(new FailedTestCaseTest())
            .assign(new BrainTest())
            .assign(new ImmutableObjectTest())
            .build();
    },
    BrainException,
    "This is ok."
);
