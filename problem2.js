// ============================================================
// problem_2.js — Two Sum
// ============================================================
// TASK:
//   Write a function named `findTwoSum` that takes an array of
//   integers (nums) and a target number. It must return an
//   array of the two INDICES whose values add up to target.
//
// APPROACH — Single loop with a Hash Map (Object):
//   - We use an object `seen` to remember numbers we've already
//     visited and their indices.
//   - For each number at index i:
//       • Calculate the "complement" needed: complement = target - nums[i]
//       • If that complement is already in `seen`, we found our pair!
//         Return [seen[complement], i]
//       • Otherwise, store nums[i] and its index in `seen`.
//   - This is O(n) — much faster than nested loops.
//
// ALTERNATIVE — Nested loops approach (also shown below).
// ============================================================


// --- Solution A: Efficient single-loop with a hash map ---
function findTwoSum(nums, target) {
  // Object to store { value: index } of numbers we've seen so far
  const seen = {};

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const complement = target - current;  // What number do we need?

    if (seen.hasOwnProperty(complement)) {
      // We've seen the complement before — return both indices
      return [seen[complement], i];
    }

    // Store current number and its index for future lookups
    seen[current] = i;
  }

  // The problem guarantees exactly one solution, so we won't reach here
  return null;
}


// --- Solution B: Nested loops approach (simpler, but slower O(n²)) ---
function findTwoSumNested(nums, target) {
  // Outer loop: pick the first number
  for (let i = 0; i < nums.length; i++) {
    // Inner loop: check every number AFTER i to avoid reusing the same element
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
}


// ============================================================
// TEST CASES — at least 2 required
// ============================================================

console.log("--- Problem 2: Two Sum ---");

// Test 1: [2, 7, 11, 15], target = 9 → indices [0, 1] (2 + 7 = 9)
console.log(findTwoSum([2, 7, 11, 15], 9));    // Expected: [0, 1]

// Test 2: [3, 2, 4], target = 6 → indices [1, 2] (2 + 4 = 6)
console.log(findTwoSum([3, 2, 4], 6));          // Expected: [1, 2]

// Test 3: [3, 3], target = 6 → indices [0, 1]
console.log(findTwoSum([3, 3], 6));             // Expected: [0, 1]

// Verify the nested loop version gives the same results
console.log("--- Nested Loop Verification ---");
console.log(findTwoSumNested([2, 7, 11, 15], 9));  // Expected: [0, 1]
console.log(findTwoSumNested([3, 2, 4], 6));        // Expected: [1, 2]