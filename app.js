const btn = document.querySelector(".btn-primary");
const inputText = document.querySelector("textarea");
const outputText = document.querySelector("input[type='text']");

btn.addEventListener("click", function clickEventListener()
{
    console.log("Primary Button Clicked!!!");
    console.log(`Value of input field is ${inputText.value}`);
    outputText.value = inputText.value;
});


