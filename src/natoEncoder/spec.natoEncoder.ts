import { assert } from "chai";
import { encodeNato } from "../natoEncoder";

describe("test encoding function", function() {
    it("should pass basic tests", function() {
        assert.strictEqual(encodeNato('hello'), 'Hotel Echo Lima Lima Oscar');
        assert.strictEqual(encodeNato('foobar'), 'Foxtrot Oscar Oscar Bravo Alpha Romeo');
    });
});
