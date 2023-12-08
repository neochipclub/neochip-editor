const root = document.getElementById("nc-code");
const sourceCode = `// Get ready!\nvoid setup() {\n\tJoinCommunity();\n}\n\n// Let's do it!\nvoid loop() {\n\tDiscover();\n\tCollaborate();\n\tInovate();\n}`;
root.innerHTML = sourceCode;
const options = {
    mode: "javascript",
    theme: "gruvbox-dark",
    lineNumbers: true,
    autoCloseBrackets: true,
    matchBrackets: true,
}
const editor = CodeMirror.fromTextArea(root, options);


const compileButton = document.querySelector("button.nc-compile");
const uploadButton = document.querySelector("button.nc-upload");
const messageBox = document.querySelector(".nc-state-message");

compileButton.addEventListener("click", () => showStateMessage("Compiling..."));
uploadButton.addEventListener("click", () => showStateMessage("Uploading..."));


function showStateMessage(state = "Compiling...") {
    disableButton(compileButton);
    disableButton(uploadButton);
    messageBox.classList.add("show");
    messageBox.querySelector(".nc-state-label").innerHTML = state;
    setTimeout(() => {
        messageBox.querySelector(".nc-state-label").innerHTML = "Done";
    }, 2000);
    setTimeout(() => {
        messageBox.classList.remove("show");
        enableButton(compileButton)
        enableButton(uploadButton)
    }, 3000);
}

function disableButton(btn) {
    btn.setAttribute("disabled", true);
    btn.classList.add("disabled");
}

function enableButton(btn) {
    btn.removeAttribute("disabled");
    btn.classList.remove("disabled");
}