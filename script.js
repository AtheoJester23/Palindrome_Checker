let theInpt = document.getElementById("text-input");
let theRes = document.getElementById("result");

const palindromeChecker = () => {
  const inputValue = theInpt.value.trim();

  if (inputValue === "") {
    alert("Please input a value");
    theInpt.value = "";
  } else if (isPalindrome(inputValue)) {
    theRes.innerHTML = `${inputValue} is a palindrome`;
    theInpt.value = "";
  } else {
    theRes.innerHTML = `${inputValue} is not a palindrome`;
    theInpt.value = "";
  }
};

// Function to check if the input is a palindrome
function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, ""); // Removes non-alphanumeric characters and converts to lowercase
  return cleanedStr === cleanedStr.split("").reverse().join("");
}

document
  .getElementById("check-btn")
  .addEventListener("click", palindromeChecker);

theInpt.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    palindromeChecker();
  }
});

const text = document.querySelector(".PCheck");

const splitText = text.innerHTML.split("");

text.innerHTML = splitText
  .map((char, i) => {
    if (char === " ") {
      return `<span style="transition-delay: ${i * 15}ms;">&nbsp;</span>`;
    } else {
      return `<span style="transition-delay: ${i * 15}ms;">${char}</span>`;
    }
  })
  .join("");
