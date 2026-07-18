function smallestSumSubarray(A, N) {
  if (N <= 1) {
    return A[0];
  }
  let bestEnding = A[0];
  let min = A[0];
  for (let i = 1; i < N; i++) {
    bestEnding = Math.min(A[i], A[i] + bestEnding);
    min = Math.min(bestEnding, min);
  }
  return min;
}
