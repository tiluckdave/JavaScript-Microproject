// update time every second
function currentDateTime() {
    document.getElementById("current-date").innerHTML = new Date().toDateString();
    document.getElementById("current-time").innerHTML = new Date().toLocaleTimeString();
    setInterval(currentDateTime, 1000);
}
currentDateTime();

var simplemde = new SimpleMDE({
    element: document.getElementById("myEditor"),
    promptURLs: true,
    spellChecker: false,
    tabSize: 4,
    autofocus: true,
    autosave: {
        enabled: true,
        uniqueId: "MyUniqueID",
        delay: 1000,
    },
    initialValue: "Hello world!",
    placeholder: "Type here...",
    shortcuts: {
        drawTable: "Cmd-Alt-T"
    },
    showIcons: [ "code", "table" ]
});
