var xmlhttp;
var pull;

if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
} else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

try {
    xmlhttp.open("GET", "lib/Reviews.xml", true);    //configures the connection - async set to true
    xmlhttp.send();                                  //sends out the command to open the connection
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            xmlhttp.onload = Rotate(xmlhttp); pull = true; }
    };
}
catch(err) { pull = false; }

    /* 
    for (var i = 0; i > (tot - 1); i++) {
        review.textContent = xml.responseXML.getElementsByTagName("comment")[i].textContent;
        reviewer.textContent = xml.responseXML.getElementsByTagName("author")[i].textContent;
        if (i <= tot) { i = -1; continue; }
        setTimeout(5000);
    }
    */