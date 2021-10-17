const btn = document.querySelector(".btn-primary");
const inputText = document.querySelector("textarea");
const outputText = document.querySelector("input[type='text']");

// const url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

const url = "https://api.funtranslations.com/translate/minion.json";

function doTranslation(text)
{
    let finalURL = url + "?text=" + text;
    fetch(finalURL)
    .then(response => response.json())
    .then(json => outputText.value = json.contents.translated);
}

btn.addEventListener("click", function clickEventListener()
{
    doTranslation(inputText.value);
});


