export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    /*
  initialise seen with false
  initialize prev route with -1

  assign seen at source to be true as starting point

  initialize queue, array of integers, with source starting point

  while queue exists, do following
    initizlie current by shifting array
    if it matches needle
      break

    adjacency is graph at curr
    iterate edges of adjs graph
      no edges, continue
      if seen, continue

      seen at i = true
      prev at i = curr
      push edge to queue

  if (prev[needle] === -1
    return null

  time to build backwards
  assign needle to current
  initialize out, array of integers

  while prev path does not equal -1, do following:
    push curr to out array
    assign prev[curr] to curr

  return source.concat(out.reverse())
  */
    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);

    seen[source] = true;
    const q: number[] = [source];

    do {
        // exit controlled loop, will run once
        const curr = q.shift() as number;
        // check next vertex off of queue
        if (curr === needle) {
            break;
        }

        // check adjacency vertex based off of edges
        const adjs = graph[curr];
        for (let i = 0; i < adjs.length; i++) {
            if (adjs[i] === 0) {
                // 0 is no edges, I thought -1
                continue;
            }
            if (seen[i]) {
                continue;
            }

            // bookkeeping
            // mark true if seen before
            // document parent before moving to next vertex
            seen[i] = true;
            prev[i] = curr;
            q.push(i);
        }
    } while (q.length);
    // if prev at needle has no parent, return null
    // never made a path to needle
    if (prev[needle] === -1) {
        return null;
    }

    // time to build backwards
    // start at needle, back to source
    let curr = needle;
    // initialize result array
    const out: number[] = [];

    // entry controlled loop, only executes if condition is met
    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }

    return [source].concat(out.reverse());
}
