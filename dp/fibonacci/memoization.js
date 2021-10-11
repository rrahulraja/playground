// js object, keys will be arg to function, value will be return value
const fibMemoization = (n, memo = {}) => {
  if (n in memo) return memo[n];

  if (n <= 2) return 1;

  memo[n] = fibMemoization(n - 1, memo) + fibMemoization(n - 2, memo);
  return memo[n];
};

console.log(fibMemoization(6));
console.log(fibMemoization(7));
console.log(fibMemoization(8));
console.log(fibMemoization(50));

// Time Complexity  : O(2n) => O(n)
// Space Complexity : O(n)
