var findMedianSortedArrays = function (nums1, nums2) {
  let newArray = [...nums1, ...nums2].sort((a, b) => a - b);
  let arrayLength = newArray.length;
  console.log(newArray);
  if (arrayLength % 2 === 0) {
    return (newArray[arrayLength / 2 - 1] + newArray[arrayLength / 2]) / 2;
  } else {
    return newArray[Math.floor(arrayLength / 2)];
  }
};

console.log(findMedianSortedArrays([1, 3], [2]));
