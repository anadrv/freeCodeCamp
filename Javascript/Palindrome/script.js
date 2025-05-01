const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");
const image = document.getElementById("image");
const colorDiv = document.querySelector(".colorDiv");
const colorEnterText = document.querySelector(".color-text");

button.addEventListener("click", () => {
  const originalText = input.value;

  if (!originalText) {
    alert("enter a value");
    return;
  }
  const cleanText = originalText.toLowerCase().replace(/[^a-z0-9]/gi, "");
  const reverseText = cleanText.split("").reverse().join("");
  const isPalindrome = cleanText === reverseText;

  result.classList.remove("initial-text");
  result.textContent = `${originalText} is ${
    isPalindrome ? "" : "not "
  }a palindrome`;
  image.style.backgroundImage = isPalindrome
    ? 'url("/Javascript/Palindrome/is.jpg")'
    : 'url("/Javascript/Palindrome/not.jpg")';
  colorDiv.style.backgroundColor = isPalindrome ? "#083D5C" : "#1C2A47";
  button.style.backgroundColor = isPalindrome ? "#083D5C" : "#1C2A47";
  result.style.color = isPalindrome ? "#083D5C" : "#1C2A47";
  colorEnterText.style.color = isPalindrome ? "#083D5C" : "#1C2A47";
});
