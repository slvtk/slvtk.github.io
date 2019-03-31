document.onreadystatechange = function script() {
    var button = document.getElementById("links");
    button.onclick = function () {
        if (button.className === "topNav") {
            button.className = "topNav responsive"
        } else {
            button.className = "topNav"
        }
    }
};