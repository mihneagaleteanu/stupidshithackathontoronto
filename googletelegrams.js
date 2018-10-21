// ==UserScript==
// @name         Google Telegram
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.google.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var head= document.getElementsByTagName('head')[0];
    var script= document.createElement('script');
    script.type= 'text/javascript';
    script.src= 'https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true';
    head.appendChild(script);
    document.getElementById("tsf").onsubmit = sendPostCard;
})();

var currentAddress;

function getCurrentAddress(position) {
    var currgeocoder = new google.maps.Geocoder();
    currgeocoder.geocode({
        'location': new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
    }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            currentAddress = results[0];
            sendPostCard();
        }
    });
}

var postcard;

function sendPostCard() {
    if (currentAddress == null) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getCurrentAddress);
        }
        return false;
    }
    var currentAccount = document.getElementById("gbw").childNodes[1].childNodes[1].childNodes[1].childNodes[3].childNodes[0].childNodes[0].title;
    var name = currentAccount.substring(15,currentAccount.indexOf("(")).trim();
    var first = name.substring(0,name.indexOf(" "));
    var last = name.substring(name.indexOf(" ")+1);

    var data = new FormData();
    data.append("to[name]", "Google Search");
    data.append("to[address_line1]", "1600 Amphitheatre Parkway ");
    data.append("to[address_city]", "Mountain View");
    data.append("to[address_state]", "CA");
    data.append("to[address_zip]", "94043 ");
    data.append("to[address_country]", "US");
    data.append("from[name]", name);
    data.append("from[address_line1]", currentAddress.address_components[0].short_name);
    data.append("from[address_city]", currentAddress.address_components[2].short_name);
    data.append("from[address_state]", currentAddress.address_components[4].short_name);
    data.append("from[address_zip]", currentAddress.address_components[6].short_name);
    data.append("from[address_country]", currentAddress.address_components[5].short_name);
    data.append("back", "<html>\n<head>\n<meta charset=\"UTF-8\">\n<link href='https://fonts.googleapis.com/css?family=Lato:400' rel='stylesheet' type='text/css'>\n<title>Lob.com Thank You 4x6 Postcard Template Back</title>\n<style>\n  *, *:before, *:after {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  body {\n    width: 6.25in;\n    height: 4.25in;\n    margin: 0;\n    padding: 0;\n    background-color: white;\n  }\n  \n  #safe-area {\n    position: absolute;\n    width: 5.875in;\n    height: 3.875in;\n    left: 0.1875in;\n    top: 0.1875in;\n  }\n  #message {\n    position: absolute;\n    width: 2.2in;\n    height: 2in;\n    top: 1.4in;\n    left: .25in;\n    font-family: 'Lato';\n    font-weight: 400;\n    font-size: .122in;\n  }\n  #thanks {\n    font-family: 'DragonIsComing';\n    font-size: 0.75in;\n    text-align: center;\n    color: white;\n    background-color: #a2d1f8;\n  }\n</style>\n</head>\n\n<body>\n  <div id=\"thanks\">\n    Search Request\n  </div>\n\n  <!-- do not put text outside of the safe area -->\n  <div id=\"safe-area\">\n    <div id=\"message\">\n      <span class=\"accent\">Dear Google,</span>\n      <br><br>\n      I would like to know more about {{search}}.\n      <br><br>\n      Your sincerely,\n      <br><br>\n      {{first}} {{last}}\n\n    </div>\n  </div>\n</body>\n\n</html>");
    data.append("front", "<html>\n<head>\n<meta charset=\"UTF-8\">\n<title>Lob.com Thank You 4x6 Postcard Template Front</title>\n<style>\n  *, *:before, *:after {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n\n  body {\n    width: 6.25in;\n    height: 4.25in;\n    margin: 0;\n    padding: 0;\n  }\n\n  #safe-area {\n    position: absolute;\n    width: 5.875in;\n    height: 3.875in;\n    left: 0.1875in;\n    top: 0.1875in;\n    text-align: center;\n    font-family: 'arial,sans-serif';\n    font-size: 1.3in;\n    color: white;\n    padding-top: .6in;\n  }\n\n  #outer {\n    width: 6.25in;\n    height: 4.25in;\n    background-color: #a2d1f8;\n  }\n\n  #inner {\n    width: 5.5in;\n    height: 3.5in;\n    position: absolute;\n    left: .375in;\n    top: .375in;\n    border: .03in solid white;\n  }\n\n</style>\n</head>\n\n<body>\n  <div id=\"outer\">\n    <div id=\"inner\">\n    </div>\n  </div>\n\n  <!-- do not put text outside of the safe area -->\n  <div id=\"safe-area\">\n    Search Request\n  </div>\n\n</body>\n\n</html>");
    data.append("merge_variables[search]", document.getElementById("lst-ib").value);
    data.append("merge_variables[first]", first);
    data.append("merge_variables[last]", last);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.responseType = "json";

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            postcard = this.response.url;
            setTimeout(function(){window.location.href=postcard;},2000);
        }
    });

    xhr.open("POST", "https://api.lob.com/v1/postcards");
    xhr.setRequestHeader("authorization", "Basic dGVzdF84ODg2ZjAxOWYzZDViZWM4YmY4OWUwMWIzNzk3MWIzMWU2Yjo=");

    xhr.send(data);

    return false;
}
