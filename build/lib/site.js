﻿var xmlhttp;

function myFunction(xml) {
    var tot = parseInt(xml.responseXML.getElementsByTagName("review")[0].childNodes.length - 1);
    var i = 0;

    function reviews() {
        document.getElementById('review').textContent = xml.responseXML.getElementsByTagName("comment")[i].textContent;
        document.getElementById('reviewer').textContent = xml.responseXML.getElementsByTagName("author")[i].textContent;
        if (i < (tot - 1)) { i++; } 
        else { i = 0; }
    }

    reviews();
    var id = setInterval(reviews, 5000);

}

if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
} else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.open("GET", "lib/Reviews.xml", true);    //configures the connection - async set to true
xmlhttp.send();                                     //sends out the command to open the connection
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        xmlhttp.onload = myFunction(xmlhttp);
    }
};