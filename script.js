document.addEventListener('DOMContentLoaded', function() {
  const checkBtn = document.querySelector("#check-btn");
  checkBtn.onclick = checkPalin;

  function checkPalin() {
    const textInput = document.querySelector("#text-input");
    const inputValue = textInput.value;

    let outputText;
    const result = document.querySelector("#result");

    if (inputValue === "") {
      outputText = "Please input a value";
      window.alert(outputText);
    } else if (compare(inputValue)) {
      outputText = `${inputValue} is a palindrome`;
    } else {
      outputText = `${inputValue} is not a palindrome`;
    }

    result.textContent = outputText;
  }
  // DOM Manipulation above, and event listener for loading script delay
  
  // Function to determine whether the alphanumeric content is a palindrome
  function compare(str) {
    let strStripArr = str.toLowerCase().split("").filter(isAlphaNumeric);
    console.log(strStripArr);
    
    let firstHalf = strStripArr.slice(0, (strStripArr.length / 2));
    let secondHalfRev = strStripArr.slice(strStripArr.length / 2).reverse();
  
    for (let i = 0; i < firstHalf.length; i++) {
      if (firstHalf[i] !== secondHalfRev[i]) return false
    }
    return true;
  }
  
  // Validates characters that are alphanumeric
  function isAlphaNumeric(char) {
    let charNum = char.charCodeAt();
    if ((charNum >= 65 && charNum <= 90) || (charNum >= 97 && charNum <= 122)) {
      return true;
    } else if (charNum >= 48 && charNum <= 57) {
      return true;
    }
    return false;
  }
})