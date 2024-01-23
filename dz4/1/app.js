function positiveArithmeticMean(...numbers) {
    let sum = 0;
    let count = 0;
  
    for (var num of numbers) {
      if (num > 0) {
        sum += num;
        count++;
      }
    }
  
    if (count === 0) {
      console.log("No positive numbers to calculate the mean.");
      return;
    }
  
    var mean = sum / count;
    console.log("Arithmetic mean of positive numbers:", mean);
  }
  
  positiveArithmeticMean(2, -78, 45.4, -7, -6, -10, 26, 30, 8);
  


// function sumOfSquaresOfEvenNumbers(numbers) {
//     let sumOfSquares = 0;
  
//     for (var num of numbers) {
//       if (num % 2 === 0) {
//         sumOfSquares += num ** 2;
//       }
//     }
  
//     return sumOfSquares;
//   }
  
//   var numbersArray = [2, -78, 45.4, -7, -6, -10, 26, 30, 8];
//   var result = sumOfSquaresOfEvenNumbers(numbersArray);
//   console.log("Sum of squares of even numbers:", result);
  

// function wordsWithTa(arr) {
//     var resultArray = [];
  
//     for (var word of arr) {
//       let hasT = false;
//       let hasA = false;
  
//       for (var char of word.toLowerCase()) {
//         if (char === 't') {
//           hasT = true;
//         }
//         if (char === 'a') {
//           hasA = true;
//         }
//       }
  
//       if (hasT && hasA) {
//         resultArray.push(word);
//       }
//     }
  
//     console.log("Words containing both 't' and 'a':", resultArray);
//   }
  

//   var stringArray = ['text', 'frontend', 'apple', 'cat', 'bat'];
//   wordsWithTa(stringArray);
  
  
