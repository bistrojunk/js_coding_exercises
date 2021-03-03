function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  var filtered_nums = nums.filter((number) => number < 1);
  return filtered_nums
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  var output = []
  for (var i = 0; i < names.length; i++) {
    if (names[i].substring(0, 1) == char) {
      output.push(names[i])
    }
  }

  return output
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  verbs = []
  for (var i = 0; i < words.length; i++) {
    split_words = words[i].split(" ")
    if (split_words[0] == "to") {
      verbs.push(words[i])
    }
  }

  return verbs
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  int_vals = []
  for (var i = 0; i < nums.length; i++) {
    if (Number.isInteger(nums[i])) {
      int_vals.push(nums[i])
    }
  }

  return int_vals

}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  cities = []
  for (var i = 0; i < users.length; i++) {
    cities.push(users[i]["data"]["city"]["displayName"])
  }

  return cities

}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  input_nums = parseFloat(nums)
  square_root_nums = Array(input_nums.length)

  for (var i = 0; i < input_nums.length; i++) {
    square_root_nums[i] = Math.sqrt(input_nums[i])
  }

  return square_root_nums

}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  sentence_with_str = []
  for (var i = 0; i < sentences.length; i++) {
    if (sentences[i].search(str) != -1) {
      sentence_with_str.push(sentences[i])
    }
  }

return sentence_with_str
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  max_sides = []
  for (var i = 0; i < triangles.length; i++) {
    max_sides.push(Math.max(triangles[i]))
  }

return max_sides

}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
