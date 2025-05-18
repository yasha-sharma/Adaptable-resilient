// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// understand problem
// temprature amplitude ?
// diff btw high & low temperature

// break into sub-problems

/* const temperatures = [-3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

function calcTemp(temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; (i = temps.length); i++) {
    const currTemp = temps[i];
    if (typeof currTemp !== "number") continue;

    if (currTemp[i] > max) max = currTemp[i];
    if (currTemp[i] < min) min = currTemp[i];
  }

  console.log(max, min);
  return max - min;
}

const amplitude = calcTemp(temperatures);
console.log(amplitude); */

const t1 = [-3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const t2 = [-3, -4, -5, -1, 10, "error", 17, 15, 14, 9, 5];

function calcTemp(t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; (i = temps.length); i++) {
    const currTemp = temps[i];
    if (typeof currTemp !== "number") continue;

    if (currTemp[i] > max) max = currTemp[i];
    if (currTemp[i] < min) min = currTemp[i];
  }

  console.log(max, min);
  return max - min;
}

const amplitude = calcTemp(temperatures);
console.log(amplitude);
