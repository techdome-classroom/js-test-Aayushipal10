const getTotalIsles = function (grid) {

  if (!grid || grid.length === 0) return 0;

  let count = 0;
  const dfs = (grid, i, j) => {
    
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] === 'W') return;


    grid[i][j] = 'W';


    dfs(grid, i + 1, j); // down
    dfs(grid, i - 1, j); // up
    dfs(grid, i, j + 1); // right
    dfs(grid, i, j - 1); // left
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 'L') {
        count++;
        dfs(grid, i, j);
      }
    }
  }

  return count;
};

module.exports = getTotalIsles;