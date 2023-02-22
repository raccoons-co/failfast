import {Test, TestsInventory} from "../main/index";
import {assert} from "chai";

export default class TestAnnotationTest {

    public ignoreMethodAtTheBeginning() {
        assert.fail("Non test method at the beginning shouldn't fail.");
    }

    @Test
    public testsCountAfterFirstTest() {
        assert.equal(TestsInventory.instance().size(), 1);
    }

    public ignoreMethodInTheMeddle() {
        assert.fail("Non test method at the middle shouldn't fail.");
    }

    @Test
    public testsCountAfterSecondTest() {
        assert.equal(TestsInventory.instance().size(), 2);
    }

    public ignoreMethodInTheEnd() {
        assert.fail("Non test method at the end shouldn't fail.");
    }
}