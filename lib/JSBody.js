var review = document.getElementById('review');
var reviewer = document.getElementById('reviewer');
var contact = document.getElementById("info");
contact.style.marginTop = "-2em";

function showinfo() {
    if (contact.style.marginTop === "-2em") {
        contact.style.marginTop = "0em";
    } else {
        contact.style.marginTop = "-2em";
    }
}

function Rotate(xml) {
var tot = parseInt(xml.responseXML.getElementsByTagName("review")[0].childNodes.length - 1);
var i = 0;

function reviews() {
    review.textContent = xml.responseXML.getElementsByTagName("comment")[i].textContent;
    reviewer.textContent = xml.responseXML.getElementsByTagName("author")[i].textContent;
    if (i < (tot - 1)) { i++; } 
    else { i = 0; }
    }

    reviews();
    var id = setInterval(reviews, 5000);

}

function hardset() {
    if (pull == false) {
        review.textContent = "Jenny has helped me learn music in way that I thought I couldn't. Jenny has made me feel welcome and has always been felixible with my lessons as I work shifts. Jenny is an excellent teacher and not to mention a great pianoist herself.";
        reviewer.textContent = "Charlene Mighten";
    }
}