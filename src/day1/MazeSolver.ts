/*
input: maze as an array of strings,
  wall is a string
  start is a point on the maze
  end is a point on the maze
output: point as an array

** dont want to recurse in your function
** best practice to create another function to recurse

*/
const dir = [
  [1, 0], // right
  [-1, 0], // left
  [0, 1], // up
  [0, -1],  // down
]
function walk (maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
  // 1. base case
  // off the map
  if (curr.x < 0 || curr.x >= maze[0].length || // how many columns we have
      curr.y < 0 || curr.y >= maze.length) {

      return false;
  }
  // its a wall
  if (maze[curr.y][curr.x] === wall) {
    return false;
  }

  // at the end
  if (curr.x === end.x && curr.y === end.y) {
    path.push(end);
    return true;
  }

  // seen it
  if (seen[curr.y][curr.x]) {
    return false;
  }

  // 3 recurse
  // pre
  seen[curr.y][curr.x] = true;
  path.push(curr)

  // recurse 4 directions we want to go up/right/down/left
  for (let i = 0; i < dir.length; i++) {
    const [x, y] = dir[i]; // destructing
    if (walk(maze, wall, {
      x: curr.x + x,
      y: curr.y + y,
    }, end, seen, path)) {
      return true;
    }
  }

  // post
  path.pop();

  return false;
}
export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {

  // typescript types
  const seen: boolean[][] = [];
  const path: Point[] = [];

  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false));
  }
  // this step is optional for javascript, can rewrite function to treat undefined to change to false
  // if wall or doesnt exit, will return undefined;
  // makes an initial seen array for false for possible seen coordinates

  walk(maze, wall, start, end, seen, path)

  return path;
}