function loadContent() {
    var title = document.getElementById("title");

    var titleContent = `Given that today is ${new Date()}, is it a good idead to deploy code to production?`;
    title.textContent = titleContent;

    var prompt = `${titleContent} Provide only one sarcastic response`;
    var host = window.location.protocol + "//" + window.location.hostname;
    fetch(`${host}/api/chat?prompt=${prompt}`)
    .then((response) => response.json())
    .then((json) => {
        document.getElementById("response").textContent = json.response;
    })
}

window.onload = function() {
    loadContent();
};