export const maxCounters = (N: number, A: number[]) => {
  const counters = new Array(N).fill(0);

  let currentMax = 0;
  let base = 0;

  for (const operation of A) {
    if (operation <= N) {
      const index = operation - 1;

      // bring counter up to base if needed
      if (counters[index] < base) {
        counters[index] = base;
      }

      counters[index]++;
      currentMax = Math.max(currentMax, counters[index]);
    } else {
      // lazy update
      base = currentMax;
    }
  }

  // finalize: apply base to all counters still behind
  for (let i = 0; i < N; i++) {
    if (counters[i] < base) {
      counters[i] = base;
    }
  }

  return counters;
};
