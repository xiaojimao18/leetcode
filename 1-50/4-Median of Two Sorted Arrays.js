/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var result = [], target = [];
  var len1 = nums1.length, len2 = nums2.length;
  var len = len1 + len2;
  if (len % 2 === 0) {
    target.push((len / 2) -1, len / 2);
  } else {
    target.push((len - 1) / 2);
  }

  var i = 0, j = 0, curIndex = 0, curNum = 0;
  while (i < len1 || j < len2) {
    if (typeof nums2[j] === 'undefined' || nums1[i] < nums2[j]) {
      curNum = nums1[i ++]
    } else {
      curNum = nums2[j ++];
    }
    if (target.indexOf(curIndex) >= 0) {
      result.push(curNum);
    }
    curIndex ++;
  }
  
  if (result.length === 2) {
    return (result[0] + result[1]) / 2;
  } else {
    return result[0];
  }
};

console.log(findMedianSortedArrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22], [0,6]));