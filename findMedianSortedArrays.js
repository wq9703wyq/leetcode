// function findMedianSortedArrays(nums1, nums2) {
//   let medianIndex = [];
//   if ((nums1.length + nums2.length) % 2 === 0) {
//     medianIndex = [(nums1.length + nums2.length) / 2 - 1, (nums1.length + nums2.length) / 2];
//   } else {
//     medianIndex = [Math.floor((nums1.length + nums2.length) / 2)];
//   }
//   const mergeArr = [...nums1, ...nums2];
//   const n = Math.max(nums1.length, nums2.length);
//   let lIndex = 0;
//   let rIndex = nums1.length;
//   let start = mergeArr[lIndex];
//   let index = 0;
//   let median = [];
//   // console.log(medianIndex);
//   while(index < n && median.length !== medianIndex.length) {
//     console.log(start)
//     if (start <= mergeArr[rIndex] && medianIndex.includes(index + (rIndex - nums1.length))) {
//       median.push(index);
//       rIndex = nums1.length;
//       // index++;
//     } else if (start > mergeArr[rIndex]) {
//       rIndex++;
//     }
//     index++;
//     start = mergeArr[index];
//   }
//   return median.map(item => mergeArr[item]);
// }

function findMedianSortedArrays(l, r) {
  let medianIndex = [];
  if ((nums1.length + nums2.length) % 2 === 0) {
    medianIndex = [(nums1.length + nums2.length) / 2 - 1, (nums1.length + nums2.length) / 2];
  } else {
    medianIndex = [Math.floor((nums1.length + nums2.length) / 2)];
  }


}

function iterativeFn(arr, l, r) {
  if (!arr.length) {
    // return [...l, ...arr, ...r];
    return arr;
  }
  
}

console.log(findMedianSortedArrays([1,2,3,4],[3,4,5]));