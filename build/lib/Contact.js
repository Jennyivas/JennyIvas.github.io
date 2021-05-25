var contact = document.getElementById("info");
contact.style.marginTop = "-2em";

function showinfo() {
    if (contact.style.marginTop === "-4em") {
        contact.style.marginTop = "0em";
    } else {
        contact.style.marginTop = "-4em";
    }
}
