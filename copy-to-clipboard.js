var copyBtn = document.getElementById("copyBtn");
var contentForSelection = document.getElementById("contentForSelection");
copyBtn.onclick = function(evt) {
  copyBtn.nextElementSibling.innerHTML = "";
  copyTransformedOutput("contentForSelection");
  let smallEle = evt.currentTarget.nextElementSibling;
  smallEle.innerHTML = "<span style='color:green'> Copied to Clipboard!</span>";
};

function copyTransformedOutput(inputEleId) {
  let copyText = document.getElementById(inputEleId);
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */
  navigator.clipboard.writeText(copyText.value);
}
/* Useful JavaScript code snippets https://javascript.plainenglish.io/6-useful-javascript-code-snippets-91424efd1c55 */
