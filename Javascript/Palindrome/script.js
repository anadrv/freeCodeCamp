const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

button.addEventListener("click", ()=> {
    const originalText = input.value;

    if(!originalText) {
        alert("enter a value");
        return;
    }
    const cleanText = originalText.toLowerCase().replace(/[^a-z0-9]/gi, "");
    const reverseText = cleanText.split("").reverse().join("");
    const isPalindrome = cleanText === reverseText;

    result.textContent = `${originalText} is ${isPalindrome ? "" : "not "}a palindrome`;

});

