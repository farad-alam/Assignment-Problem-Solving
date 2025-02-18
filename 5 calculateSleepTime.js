function calculateSleepTime(times) {
  let totalSecondsFromArray = 0;
  let finalTimes = {
    hour: 0,
    minute: 0,
    second: 0,
  };
  for (let seconds of times) {
    if (typeof seconds !== "number") {
      return "Invalid";
    }
    totalSecondsFromArray += seconds;
  }
  finalTimes.hour = Math.floor(totalSecondsFromArray / 3600);
  finalTimes.minute = Math.floor((totalSecondsFromArray % 3600) / 60);
  finalTimes.second = totalSecondsFromArray % 60;
  // console.log(Math.floor(totalMinites), Math.floor(totalHour));
  return finalTimes;
}

console.log(calculateSleepTime([1000, 499, 519, 300]));
console.log(calculateSleepTime([1000, 2000, 725]));
console.log(calculateSleepTime([100, 3800]));
console.log(calculateSleepTime([]));
console.log(calculateSleepTime([5600]));
console.log(calculateSleepTime([100, 3800, "90"]));
