const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is horizontally present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return true if the word is vertically present", function() {
    const result = wordSearch([
      ['B', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['U', 'E', 'I', 'N', 'F', 'E', 'L', 'C'],
      ['I', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['L', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['D', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['U', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['I', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['N', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['G', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'BUILDUING')

    assert.isTrue(result);
  });

  it("should return undefined if passed an empty array", function() {
    const result = wordSearch([
    ], 'BUILDUING')

    assert.isUndefined(result);
  });

  it("should return undefined if the word is an empty string", function() {
    const result = wordSearch([
      ['B', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['U', 'E', 'I', 'N', 'F', 'E', 'L', 'C'],
      ['I', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['L', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['D', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['U', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['I', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['N', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['G', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], '')

    assert.isUndefined(result);
  });
});
