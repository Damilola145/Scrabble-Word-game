const { calculateScore, isValidWord, playTurn } = require('./scrabbleGame');

// Sample word list for testing
const wordList = ["hello", "world", "scrabble", "game", "python"];

describe('Scrabble Word Game Tests', () => {
  // Test 1: Score Calculation
  test('calculateScore should return the correct score for valid words', () => {
    expect(calculateScore("hello")).toBe(8); // Example: "hello" = 4+1+1+1+1
    expect(calculateScore("scrabble")).toBe(14);
    expect(calculateScore("")).toBe(0); // Empty word
  });

  // Test 2: Word Validity
  test('isValidWord should validate words against the dictionary', () => {
    expect(isValidWord("hello", wordList)).toBe(true);
    expect(isValidWord("helo", wordList)).toBe(false); // Invalid word
    expect(isValidWord("", wordList)).toBe(false); // Edge case: empty string
  });

  // Test 3: Play Turn (Integration)
  test('playTurn should return the score for valid words and 0 for invalid words', () => {
    expect(playTurn("hello", wordList)).toBe(8); // Valid word
    expect(playTurn("helo", wordList)).toBe(0); // Invalid word (score 0)
  });

  // Test 4: Case Insensitivity
  test('calculateScore and isValidWord should be case insensitive', () => {
    expect(calculateScore("Hello")).toBe(8); // Case should not affect score
    expect(isValidWord("HELLO", wordList)).toBe(true); // Case insensitive check
  });

  // Test 5: Non-alphabetic Characters
  test('calculateScore should throw an error for non-alphabetic characters', () => {
    expect(() => calculateScore("hello123")).toThrow(Error);
  });

  // Test 6: Edge Cases
  test('calculateScore should handle high-value letters and edge cases', () => {
    expect(calculateScore("qz")).toBe(20); // High-value letters only
    expect(playTurn("", wordList)).toBe(0); // Empty input
  });
});
