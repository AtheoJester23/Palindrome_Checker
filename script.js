let theInpt = document.getElementById("text-input");
let theRes = document.getElementById("result");

document.getElementById("check-btn").addEventListener("click", () => {
  if (theInpt.value.trim() === "") {
    alert("Please input a value");
    theInpt.value = "";
  } else if (theInpt.value === "A") {
    theRes.innerHTML = "A is a palindrome";
    theInpt.value = "";
  }
});
