function calculateSleepTime(times) {
  let totalSecondsFromArray = 0;
  let totalMinites = 0;
  let totalHour = 0;
  for (let seconds of times) {
    if (typeof seconds !== "number") {
      return "Invalid";
    }
    totalSecondsFromArray += seconds;
  }

  totalMinites = totalSecondsFromArray / 60
  totalHour = totalMinites / 60
  console.log(totalMinites, totalHour);

}

console.log(calculateSleepTime([1000, 499, 519, 300]));