﻿var xmlhttp;

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
            xmlhttp.onload = myFunction(xmlhttp); }
    };
}
catch(error) {
    hardset();
}