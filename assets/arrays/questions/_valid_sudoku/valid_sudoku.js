
/**
* Valid Sudoku
*
* Tags: Map, Array
* Leetcode: 36
*
* Determine if a Sudoku is valid.
*
* There are 3 rules to Sudoku:
*
* 1. Each row must have the numbers 1 - 9 occuring just once.
*
*   +-----+-----+-----+-----+-----+-----+-----+-----+-----+
*   |  9  |  1  |  4  |  6  |  8  |  2  |  5  |  7  |  3  |
*   +-----+-----+-----+-----+-----+-----+-----+-----+-----+
*
* 2. Each column must have the numbers 1 - 9 occuring just once.
*
*   +-----+
*   |  2  |
*   +-----+
*   |  6  |
*   +-----+
*   |  5  |
*   +-----+
*   |  9  |
*   +-----+
*   |  8  |
*   +-----+
*   |  4  |
*   +-----+
*   |  7  |
*   +-----+
*   |  3  |
*   +-----+
*   |  1  |
*   +-----+
*
* 3. The numbers 1 - 9 must occur just once in each of the 9 sub-boxes of the grid.
*
*                                             +-----------------+
*                                          ↗  |  9  |  5  |  1  |
*   +-----------------+-----------------+     |-----------------|
*   |  4  |  6  |  3  |  7  |  2  |  8  |     |  7  |  3  |  8  | (1 - 9)
*   |------------------------------------  ↗  |-----------------|
*   |  2  |  5  |  9  |  4  |  6  |  1  |     |  6  |  4  |  2  |
*   |------------------------------------     +-----------------+
*   |  7  |  8  |  1  |  3  |  5  |  9  |  ↗        ↗        ↗
*   +-----------------+-----------------+-----------------+
*   |  5  |  3  |  2  |  1  |  9  |  7  |  4  |  8  |  6  |
*   |-----------------------------------------------------|
*   |  9  |  1  |  4  |  6  |  8  |  2  |  5  |  7  |  3  |
*   |-----------------------------------------------------|
*   |  6  |  7  |  8  |  5  |  4  |  3  |  1  |  2  |  9  |
*   +-----------------+-----------------+-----------------+
*   |  8  |  2  |  6  |  9  |  7  |  5  |  3  |  1  |  4  |
*   |-----------------------------------------------------|
*   |  1  |  4  |  7  |  2  |  3  |  6  |  8  |  9  |  5  |
*   |-----------------------------------------------------|
*   |  3  |  9  |  5  |  8  |  1  |  4  |  2  |  6  |  7  |
*   +-----------------+-----------------+-----------------+
*
* That's it.... pretty simple.
*
* The Sudoku board could be partially filled, where empty cells are filled with
* the character '.'.
*
*   +-----------------+-----------------+-----------------+
*   |  5  |  3  |  .  |  .  |  7  |  .  |  .  |  .  |  .  |
*   |-----------------------------------------------------|
*   |  6  |  .  |  .  |  1  |  9  |  5  |  .  |  .  |  .  |
*   |-----------------------------------------------------|
*   |  .  |  9  |  8  |  .  |  .  |  .  |  .  |  6  |  .  |
*   +-----------------+-----------------+-----------------+
*   |  8  |  .  |  .  |  .  |  6  |  .  |  .  |  .  |  3  |
*   |-----------------------------------------------------|
*   |  4  |  .  |  .  |  8  |  .  |  3  |  .  |  .  |  1  |
*   |-----------------------------------------------------|
*   |  7  |  .  |  .  |  .  |  2  |  .  |  .  |  .  |  6  |
*   +-----------------+-----------------+-----------------+
*   |  .  |  6  |  .  |  .  |  .  |  .  |  2  |  8  |  .  |
*   |-----------------------------------------------------|
*   |  .  |  .  |  .  |  4  |  1  |  9  |  .  |  .  |  5  |
*   |-----------------------------------------------------|
*   |  .  |  .  |  .  |  .  |  8  |  .  |  .  |  7  |  9  |
*   +-----------------+-----------------+-----------------+
*
*           A partially filled sudoku which is valid.
*
* Note:
*
* A valid Sudoku board (partially filled) is not necessarily solvable. Only the
* filled cells need to be validated.
*/

/**
* isValidSudoku()
*
* Solution:
*
*
* Time: O(1)
* Space: O(1)
*
* @param {character[][]} board
* @return {boolean}
*/

function isValidSudoku(board) {
  for (let row = 0; row < board.length; row += 1) {
    // rows
    if (!validSet(row)) return false;

    // cols
    for (let col = 0; col < row.length; col += 1) {

    }
  }


  // subs 3x3
}

function validSet(nums) {
  const seen = new Set();

  for (let i = 0; i < nums.length; i += 1) {
    // blank cell
    if (nums[i] === '.') continue;

    // we've already got this number
    if (seen.has(nums[i])) return false;

    seen.add(nums[i]);
  }

  return true;
}

// for(int i = 0; i<9; i++){
//     HashSet<Character> rows = new HashSet<Character>();
//     HashSet<Character> columns = new HashSet<Character>();
//     HashSet<Character> cube = new HashSet<Character>();
//     for (int j = 0; j < 9;j++){
//         if(board[i][j]!='.' && !rows.add(board[i][j]))
//             return false;
//         if(board[j][i]!='.' && !columns.add(board[j][i]))
//             return false;
//         int RowIndex = 3*(i/3);
//         int ColIndex = 3*(i%3);
//         if(board[RowIndex + j/3][ColIndex + j%3]!='.' && !cube.add(board[RowIndex + j/3][ColIndex + j%3]))
//             return false;
//     }
// }
// return true;

export default isValidSudoku;
