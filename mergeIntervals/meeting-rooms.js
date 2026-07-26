function minMeetingRooms(start, end) {
  start = start.sort((a, b) => a - b);
  end = end.sort((a, b) => a - b);
  let left = 0;
  let right = 0;
  let rooms = 0;
  let max = -Infinity;
  while (left < start.length && right < end.length) {
    if (start[left] < end[right]) {
      rooms++;
      max = Math.max(rooms, max);
      left++;
    } else {
      rooms--;
      right++;
    }
  }
 
  return max;
}

// const start = [10, 22, 11, 4, 11];
// const end = [14, 29, 30, 12, 29];
const start = [1, 10, 7];
const end = [4, 15, 10];
/*
start = [2, 9, 6], end = [4, 12, 10]
start = [2, 6, 9], end = [4, 10, 12]
*/
console.log(minMeetingRooms(start, end));
