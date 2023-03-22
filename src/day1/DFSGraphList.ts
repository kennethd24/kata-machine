/*
DFS! depth first search of a graph, adjacency list
run time, every single node o(v + e)
**not adjacency matrix
create recurse walk function with curr, seen, and path parameter and output boolean

if seen, return false
assign seen at curr to true

// recurse
// pre
add current to path

if needle found, return true

// recurse
initialize list from graph at curr
iterate list of edges in for loop // can't use array methods because need to return or break
  if next recurse step is true
    return true



// post
pop out from path, since no more edges to traverse and still not at needle

return false

// inside main function
initialize seen boolean array to be all false
intialize path number empty array

call helper recurse function

check length of path === 0, return null

return path
*/
function walk(
    graph: WeightedAdjacencyList,
    curr: number,
    needle: number,
    seen: boolean[],
    path: number[],
): boolean {
    // if we have been here, stop traversing
    if (seen[curr]) {
        return false;
    }
    // show that we have been here
    seen[curr] = true;
    // add step to our path travelled
    path.push(curr);
    // if we found the needle
    if (curr === needle) {
        return true;
    }
    // check for additional edges to traverse
    const list = graph[curr];
    for (let i = 0; i < list.length; i++) {
        const edge = list[i].to;
        if (walk(graph, edge, needle, seen, path)) {
            return true;
        }
    }
    // traversed and did not found needle or additonal edges to traverse
    // remove last step and returbn false
    path.pop();
    return false;
}

export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    // initialize seen vertices
    const seen = new Array(graph.length).fill(false);
    // initialize path
    const path: number[] = [];
    // call recursive function with starting point
    walk(graph, source, needle, seen, path);

    // if path does not exist, return null
    if (path.length === 0) {
        return null;
    }

    // return successful path from source to needle
    return path;
}
