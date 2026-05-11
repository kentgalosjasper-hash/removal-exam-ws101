// ============================================================
// problem_1.js — Valid Parentheses
// ============================================================
// TASK:
//   Write a function named `isValidParentheses` that takes a
//   string of bracket characters and returns true if the
//   brackets are validly matched, and false otherwise.
//
// APPROACH — Stack-based solution:
//   - Iterate through each character in the string.
//   - When we see an opening bracket, PUSH it onto the stack.
//   - When we see a closing bracket:
//       • If the stack is empty → no matching open bracket → false
//       • Pop the top of the stack and check if it matches.
//   - At the end, if the stack is empty → all brackets matched → true
//     Otherwise → some opening brackets were never closed → false
// ============================================================

function isValidParentheses(str) {
  // A stack to track opening brackets we've seen
  const stack = [];

  // A lookup map: each closing bracket maps to its expected opener
  const matchingOpen = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  // A set of all opening brackets (for quick lookup)
  const openBrackets = new Set(['(', '{', '[']);

  // Iterate through every character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (openBrackets.has(char)) {
      // It's an opening bracket — push onto the stack
      stack.push(char);
    } else {
      // It's a closing bracket
      // Check if the stack is empty (no opener available)
      if (stack.length === 0) {
        return false;
      }

      // Pop the most recent opener from the stack
      const lastOpen = stack.pop();

      // Check if the popped opener matches this closing bracket
      if (lastOpen !== matchingOpen[char]) {
        return false;
      }
    }
  }

  // If the stack is empty, every opener was properly closed
  return stack.length === 0;
}

// ============================================================
// TEST CASES — at least 3 required
// ============================================================

console.log("--- Problem 1: Valid Parentheses ---");

console.log(isValidParentheses("()"));         // Expected: true
console.log(isValidParentheses("()[]{}" ));    // Expected: true
console.log(isValidParentheses("{[]}"));       // Expected: true
console.log(isValidParentheses("(]"));         // Expected: false
console.log(isValidParentheses("([)]"));       // Expected: false
console.log(isValidParentheses(""));           // Expected: true  (empty string = valid)
console.log(isValidParentheses("{"));          // Expected: false (unclosed bracket)