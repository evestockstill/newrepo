
import isYes from '../src/is-yes.js';
const test = QUnit.test;



test('returns true', function(assert) {
 //Arrange
 // Set up your parameters and expectations
    const answer = 'yes';
    const expected = true;
 //Act 
 // Call the function you're testing and set the result to a const
    const result = isYes(answer);
 //Assert
    assert.equal(result, expected);
});






