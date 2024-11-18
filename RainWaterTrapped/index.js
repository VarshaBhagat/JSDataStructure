function rainWaterTrapped(A) {
  let pMax = new Array(A.length).fill(0);
  let sMax = new Array(A.length).fill(0);
  pMax[0] = A[0];
  for (let i = 1; i < A.length; i++) {
    pMax[i] = Math.max(pMax[i - 1], A[i]);
  }
  sMax[A.length - 1] = A[A.length - 1];
  for (let j = A.length - 2; j >= 0; j--) {
    sMax[j] = Math.max(sMax[j + 1], A[j]);
  }
  let res = 0;
  for (let i = 1; i < A.length - 1; i++) {
    let tb = Math.min(pMax[i], sMax[i]);
    let rem = tb - A[i];
    res += rem;
  }
  return res;
}

// 5 5 5 5 5 5 7
// 7 7 7 7 7 7 7
// 1 4 1 2 3

console.log(rainWaterTrapped([5, 4, 1, 4, 3, 2, 7]));
