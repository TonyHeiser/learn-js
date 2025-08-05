class ReverseWords {
  static reverseWords(str) {
    return str.split(" ").map(e => e.length <= 1 ? e : e.split("").reverse().join("")).join(" ");
  }

  static get logOutput() {
    console.log(this.reverseWords("The quick brown fox jumps over the lazy dog."));
    console.log(this.reverseWords("apple"));
    console.log(this.reverseWords("a b c d"));
    console.log(this.reverseWords("  double  spaced  words  "));
  }
}

// ReverseWords.logOutput;


class JennyTheYoungestDetective {
  static missingWord(nums, str) {
    const chars = str.replaceAll(" ", "").toLowerCase();
    nums = nums.sort((a, b) => a - b)
    return nums[nums.length - 1] >= chars.length ? "No mission today" : chars[nums[0]] + chars[nums[1]] + chars[nums[2]];
  }

  static get logOutput() {
    console.log(this.missingWord([0, 3, 5], "I love you"));
    console.log(this.missingWord([7, 10, 1], "see you later"));
    console.log(this.missingWord([29, 31, 8], "The quick brown fox jumps over the lazy dog"));
    console.log(this.missingWord([12, 4, 6], "Good Morning"));
    console.log(this.missingWord([1, 16, 21], "A purple pig and a green donkey flew a kite in the middle of the night"));
    console.log(this.missingWord([35, 8, 20], "A song can make or ruin your day if you let it get to you"));
    console.log(this.missingWord([20, 3, 27], "I love eating toasted cheese and tuna"));
    console.log(this.missingWord([50, 4, 6], "Hi everybody"));
    console.log(this.missingWord([2, 1, 3], " Bn  j"));
  }
}

// JennyTheYoungestDetective.logOutput
