function hasTargetSum(array, target) {
  // iterate through each number in the array
 for (let i = 0; i < array.length; i++) {
  // for the current number, identify a complement that = target
    const complement = target - array[i];
    // iterate through the rest of the array
    for (let j = i + 1; j < array.length; j++) {
      // check if any number is our complement
      // if so, return true
      if (array[j] === complement) return true;
    }
  }
  // if I reach then end of the array, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  So what we want to do is we want to write a code 'hasSumTarget' that returns
  true or false when given an array of numbers and a target number. If the
  sum of any 2 numbers in the array = the target number then we will return true
  if none of the numbers in the array = the target number then we return false.
*/

/*
  Add written explanation of your solution here
   // iterate through each number in the array
 for (let i = 0; i < array.length; i++) {
 For this first line of code, it allows us to go through the array starting at
 the first number which is what the i = 0 is for. Then we have i < array.length, what
 this does is it makes sure the code iterates through every number starting from 0 up 
 to the full length of the array. Then finally, i++ is just a way to say go up one number in the array.

  // for the current number, identify a complement that = target
    const complement = target - array[i];

    for this line of code we are taking the complement and seeing if it equals to
    the target number minus whatever number we are looking at in the array.
    By definition, the complement is the value that, 
    when added to the current number, will result in the target value. If we are 
    on i = 0 (using our first example) i = 3 and our target being 10
    10 - 3 = 7(our complement)

  // iterate through the rest of the array
    for (let j = i + 1; j < array.length; j++) {

    similar to our first line of code, except now we use j instead of i.
    so now we start by saying this time we start at i+1 which basically means go to the next number
    j < array.length is the code going through
     As long as j is less than the length of the array, the loop will continue.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
