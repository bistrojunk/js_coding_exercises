const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] == n) {
      if (i == nums.length-1) {
        return null
      }
      return nums[i+1]
    }
  }
  return null
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  var char_array = str.split("")
  var zeros = 0
  var ones = 0
  for (var i = 0; i < char_array.length; i++) {
    if (char_array[i] == "0") {
      zeros += 1
    }
    else {
      ones += 1
    }
  }

  return {"1": ones, "0": zeros}
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  n = n + "";
	return n.split("").reverse().join("");
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
  var summed_vals = 0
  for (i = 0; i < arrs.length; i++) {
    element = arrs[i]
    for (j = 0; j < element.length; j++) {
      summed_vals += element[j]
    }
  }
  return summed_vals
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  if (arr.length < 2) {
     return arr
  }
  var shifted_arr = arr
  var first_index = 0
  var last_index = arr.length-1
  shifted_arr[last_index] = arr[first_index]
  shifted_arr[first_index] = arr[last_index]
  
  return shifted_arr
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
  for (key in haystack) {
    if (haystack[key].toLowerCase().includes(searchTerm.toLowerCase())) {
      return true
    }
  }
  return false
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  var words = str.replace(/[.]/g, '').split(/\s/);
    var freqMap = {};
    words.forEach(function(w) {
        if (!freqMap[w]) {
            freqMap[w] = 0;
        }
        freqMap[w] += 1;
    });

    return freqMap;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
