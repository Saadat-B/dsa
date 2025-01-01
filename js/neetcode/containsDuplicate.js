// SOLUTION 1 (BRUTE FORCE)
// function hasDuplicate(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] == nums[j]) return true;
//     }
//   }

//   return false;
// }
// console.log(hasDuplicate([1, 2, 3, 1]));

// SOLUTION 2 (SORTING)
// function hasDuplicate(nums) {
//   const sortedNums = nums.sort((a, b) => a - b);

//   for (let i = 1; i < sortedNums.length; i++) {
//     if (sortedNums[i - 1] == sortedNums[i]) return true;
//   }

//   return false;
// }
// console.log(hasDuplicate([1, 2, 3, 1]));

// SOLUTION 3 (HASH SET)
function hasDuplicate(nums) {
  const seen = new Set();

  for (let num of nums) {
    if (seen.has(num)) return true;
    seen.add(num);
  }

  return false;
}
console.log(hasDuplicate([1, 2, 3, 1]));

// SOLUTION 4
// function hasDuplicate(nums) {
//   return new Set(nums).size < nums.length;
// }
// console.log(hasDuplicate([1, 2, 3,1]));
