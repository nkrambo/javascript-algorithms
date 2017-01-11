
/**
* Coin Change, Minimum Coins
*
* Tags: Bottom Up, Classic Problems
*
* Given a total and coins of certain denominations find number of ways total can
* be formed from coins assuming infinity supply of coins.
*
* Assume that the denominations will always be sorted.
*
* Example:
* Input: 11, [1, 5, 6, 8]
* Output: 1, [5, 6]
*/

/**
* coinMinimum()
*
* Solution:
*
* We solve this with dynamic programming, so we'll start with a matrix.
*
* Across the top we have 0 to 'total' and down the side we have the coin 'denominations'.
* We also have a 0s column and an Infinity row, these are important for our final
* formula to work.
*
* +-----+--------------------------------------------------------------------------+
* |     |   0     1     2     3     4     5     6     7     8     9     10    11   |
* +--------------------------------------------------------------------------------+
* |     |   ∞     ∞     ∞     ∞     ∞     ∞     ∞     ∞     ∞     ∞     ∞     ∞    |
* +--------------------------------------------------------------------------------+
* |  1  |   0     1     2     3     4     5     6     7     8     9     10    11   |
* +--------------------------------------------------------------------------------+
* |  5  |   0     1     2     3     4     1     2     3     4     5     2     3    |
* +--------------------------------------------------------------------------------+
* |  6  |   0     1     2     3     4     1     1     2     3     4     2     2    |
* +--------------------------------------------------------------------------------+
* |  8  |   0     1     2     3     4     1     1     2     1     2     2     2    |
* +--------------------------------------------------------------------------------+
*
* Let's step through our matrix.
*
* Well firstly, we know that if we have a 0 total then the minimum coins will also
* be 0 across the board.
*
* Next, denomination of 1. For a total of 1, we will need exactly 1, for 2 we need
* 2 and so on, all the way to 11. In other words, we're saying how many coins do
* we need to total 11 cents, if we only had 1c coints... 11!
*
* Next, denomination of 5. As we step across we can see that we cannot make a total
* of 1c from a 5c coin, so we must take the result above as this is the best we
* can do for this total. This is the same until we get to a totol of 5. Obviously,
* a 5c coin totals 5c exacly once, so the answer is 1.
*
* But how do we calculate this result instead? Well, we take the minimum between
* the top result, which is the best so far, and our (current position - denomination) + 1.
*
* If you think about it, this makes sense. Because we have a 0s column, we know
* that when we hit a total equal to the denomination, if we step back to 0 + 1,
* for the current coin, we have a result that is correct.
*
* Same for the next cell too, 6. We count our current coin '5' and take the best
* result from the 1 denomination, if this is better than what we have for 6 then
* we take it. (1 + 1) is lower than 6, so we now have 2.
*
* Again, notice that we have a row of Infinity and a 0s column. We basically need
* these to get the results to start resolving without an error, especially in the
* first row, where our formula requires us to step up a row for best results.
*
* When we step through and resolve our whole matrix like this we get the final
* result at the bottom right.
*
* The formula for this is easy:
*
*     if (j < denominations[i]) {
*       T[i][j] = T[i - 1][j]
*     } else {
*       T[i][j] = min(T[i - 1][j], T[i][j - denominations[i]] + 1)
*     }
*
* Time: O(n * k)
* Space: O(n * k)
*
* Where n is the number of coins and k is the total.
*
* @param {number} total change required
* @param {array} denominations available
* @return {number} returns the minimum number of coins require to make total
*/

function coinMinimum(total, denominations) {
  const cols = total + 1;                // add 1 for 0 col
  const rows = denominations.length + 1; // add 1 for Infinity row

  // build matrix, 0s by default
  const matrix = [];
  for (let i = 0; i < rows; i += 1) {
    matrix[i] = new Array(cols).fill(0);
  }

  // add Infinity row
  matrix[0].fill(Infinity);

  // solve sub-problems
  for (let i = 1; i < rows; i += 1) {
    for (let j = 1; j < cols; j += 1) {

      if (j < denominations[i-1]) {
        matrix[i][j] = matrix[i-1][j];

      } else {
        matrix[i][j] = Math.min(matrix[i-1][j], matrix[i][j-denominations[i-1]] + 1);
      }
    }
  }

  return matrix[rows-1][cols-1];
}

export default coinMinimum;
