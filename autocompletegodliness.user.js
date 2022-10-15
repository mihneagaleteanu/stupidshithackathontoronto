// ==UserScript==
// @name         World's most expensive autocomplete
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant unsafeWindow
// @grant GM_xmlhttpRequest
// @grant GM_addElement
// @connect 192.168.9.253
// ==/UserScript==

(function () {
    'use strict';

    window.addEventListener("load", LocalMain, false);
    function LocalMain() {
        var textElements = document.querySelectorAll('input');
        for (var i = 0; i < textElements.length; i++) {
            textElements[i].addEventListener('input', function (event) {
                if (this.value.length > 0) {
                    GM_addElement('script', {
                        src: 'https://www.google.com/complete/search?client=hp&hl=en&sugexp=msedr&gs_rn=62&gs_ri=hp&cp=1&gs_id=9c&q='+this.value+'&xhr=t&callback=autoCompleteResults',
                        type: 'text/javascript'
                    });
                    event.stopPropagation();
                }
            });
        }
    }

    unsafeWindow.autoCompleteResults = function(data) {
        console.log(data[1]);
        var keyboard = "qwertyuiopasdfghjklzxcvbnm";
        var lastCharacterPosition = keyboard.indexOf(data[0].charAt(data[0].length-1));
        var directions = ["Up","Down","Right","Left"];
        var counts = [0,0,0,0];
        for (var i = 0 ; i < data[1].length;i++) {
            var suggestion = data[1][i][0];
            var separatorIndex = suggestion.indexOf("<b>");
            var nextCharacterPosition = keyboard.indexOf(suggestion.substring(separatorIndex+3).trim().charAt(0));
            if (nextCharacterPosition > lastCharacterPosition) {
                if ((lastCharacterPosition <= 9 && nextCharacterPosition > 9) || (lastCharacterPosition <= 18 && nextCharacterPosition > 18)) {
                    counts[1]++;
                } else {
                    counts[2]++;
                }
            } else {
                if ((lastCharacterPosition >18 && nextCharacterPosition <= 18) || (lastCharacterPosition > 9 && nextCharacterPosition <= 9)) {
                    counts[0]++;
                } else {
                    counts[3]++;
                }
            }
        }
        console.log(counts);
        var max = Math.max(counts[0],counts[1],counts[2],counts[3]);
        console.log(max);
        var direction = directions[counts.indexOf(max)];
        console.log(direction);
        GM_xmlhttpRequest({
            method: "PUT",
            url: "http://192.168.9.253:16021/api/v1/htCDcYxjrgFi4EfexzE4d8izKP6uxrjG/effects",
            data: "{\"select\":\""+direction+"\"}"
        });

    }
})();
