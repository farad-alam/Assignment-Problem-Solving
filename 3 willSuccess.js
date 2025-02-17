function willSuccess(marks) {
  if (typeof marks !== "object") {
    return "Invalid";
  }
  let pass = 0;
  let fail = 0;
  marks.forEach((examMark) => (examMark >= 50 ? (pass += 1) : (fail += 1)));
  return pass > fail;
}

console.log(willSuccess([60, 70, 80, 40, 30]));
console.log(willSuccess([48, 48, 92, 100]));
console.log(willSuccess([48, 48, 50, 50, 100]));
console.log(willSuccess([]));
console.log(willSuccess([90]));
console.log(willSuccess([90, 99, 87, 48, 34, 49]));
console.log(willSuccess("100 , 100"));
console.log(willSuccess(90));