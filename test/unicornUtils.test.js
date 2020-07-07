// IMPORT MODULES under test here:
import { countsAsAYes } from '../unicornUtils.js';

// import example from '../example.js';

const test = QUnit.test;

test('it should return true if passed anything with a y', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const word1 = 'yes';
    const word2 = 'yeah';
    const word3 = 'yeaheahhhhadfhasfhsdf!';
    const word4 = 'Yeahboy';
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = countsAsAYes(word1);
    const actual2 = countsAsAYes(word2);
    const actual3 = countsAsAYes(word3);
    const actual4 = countsAsAYes(word4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, expected);
    expect.equal(actual2, expected);
    expect.equal(actual3, expected);
    expect.equal(actual4, expected);
});
