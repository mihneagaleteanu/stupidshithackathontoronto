// ==UserScript==
// @name        stupid shit
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.google.ca/search?*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    if (window.location.href.includes ("start=0") && !window.location.href.includes ("nicolas=true")){
      window.location.href = window.location.href.replace ("start=0" ,"start=90&nicolastrue");
    } else if (!window.location.href.includes ("start")){
      window.location.href = window.location.href + "&start=90&nicolas=true";
    }

    if(window.location.href.includes ("start=")){
        var start = window.location.href.substring(window.location.href.lastIndexOf("start=")+6,window.location.href.lastIndexOf("&"));
        console.log(start);
    //page 10->1
    if (start == "90"){
        document.getElementById("resultStats").innerHTML = document.getElementById("resultStats").innerHTML.replace("Page 10 of a" ,"A");
        document.getElementById("nav").childNodes[0].childNodes[0].childNodes[1].innerHTML = '<td class="cur"><span class="csb" style="background:url(/images/nav_logo242.png) no-repeat;background-position:-53px 0;width:20px"></span>1</td>';
        document.getElementById("nav").childNodes[0].childNodes[0].childNodes[6].innerHTML = '<td><a class="fl" href="'+window.location.href+'"><span class="csb ch" style="background:url(/images/nav_logo242.png) no-repeat;background-position:-74px 0;width:20px"></span>10</a></td>';
        document.getElementById("nav").childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].style="display:none;"
        var i;
        for (i = 0; i < 9; i++){
            document.getElementById("nav").childNodes[0].childNodes[0].childNodes[i + 2].childNodes[0].childNodes[1].textContent = i+2;
            document.getElementById("nav").childNodes[0].childNodes[0].childNodes[i + 2].childNodes[0].href = document.getElementById("nav").childNodes[0].childNodes[0].childNodes[i + 2].childNodes[0].href+"&start="+ (80-i*10)+"&nicolas=true";
        }
        return;
    }

    //page 9->2
    if (start == "80"){
        document.getElementById("resultStats").innerHTML = document.getElementById("resultStats").innerHTML.replace("9" ,"2");
        document.getElementById("nav").childNodes[0].childNodes[0].childNodes[2].innerHTML = '<td class="cur"><span class="csb" style="background:url(/images/nav_logo242.png) no-repeat;background-position:-53px 0;width:20px"></span>2</td>';
        document.getElementById("nav").childNodes[0].childNodes[0].childNodes[6].innerHTML = '<td><a class="fl" href="'+window.location.href+'"><span class="csb ch" style="background:url(/images/nav_logo242.png) no-repeat;background-position:-74px 0;width:20px"></span>10</a></td>';

        for (i = 0; i < 10; i++){
            if (document.getElementById("nav").childNodes[0].childNodes[0].childNodes[i+1].childNodes[0].childNodes[1]) {
                document.getElementById("nav").childNodes[0].childNodes[0].childNodes[i+1].childNodes[0].childNodes[1].textContent = i+1;
                document.getElementById("nav").childNodes[0].childNodes[0].childNodes[i+1].childNodes[0].href = document.getElementById("nav").childNodes[0].childNodes[0].childNodes[i+1].childNodes[0].href+"&start="+ (90-i*10)+"&nicolas=true";
            }
        }
        return;
    }

    //page 8->3
    if (start == "70"){
        document.getElementById("resultStats").innerHTML = document.getElementById("resultStats").innerHTML.replace("8" ,"3");
        document.getElementById("nav").childNodes[0].childNodes[0].childNodes[3].innerHTML = '<td class="cur"><span class="csb" style="background:url(/images/nav_logo242.png) no-repeat;background-position:-53px 0;width:20px"></span>3</td>';
        document.getElementById("nav").childNodes[0].childNodes[0].childNodes[6].innerHTML = '<td><a class="fl" href="'+window.location.href+'"><span class="csb ch" style="background:url(/images/nav_logo242.png) no-repeat;background-position:-74px 0;width:20px"></span>10</a></td>';

        for (i = 0; i < 10; i++){
            if (document.getElementById("nav").childNodes[0].childNodes[0].childNodes[i+1].childNodes[0].childNodes[1]) {
                document.getElementById("nav").childNodes[0].childNodes[0].childNodes[i+1].childNodes[0].childNodes[1].textContent = i+1;
                document.getElementById("nav").childNodes[0].childNodes[0].childNodes[i+1].childNodes[0].href = document.getElementById("nav").childNodes[0].childNodes[0].childNodes[i+1].childNodes[0].href+"&start="+ (90-i*10)+"&nicolas=true";
            }
        }
        return;
    }

     //page 7->4
    if (start == "60"){
        document.getElementById("resultStats").innerHTML = document.getElementById("resultStats").innerHTML.replace("7" ,"4");
        document.getElementById("nav").childNodes[0].childNodes[0].childNodes[4].innerHTML = '<td class="cur"><span class="csb" style="background:url(/images/nav_logo242.png) no-repeat;background-position:-53px 0;width:20px"></span>4</td>';
        document.getElementById("nav").childNodes[0].childNodes[0].childNodes[6].innerHTML = '<td><a class="fl" href="'+window.location.href+'"><span class="csb ch" style="background:url(/images/nav_logo242.png) no-repeat;background-position:-74px 0;width:20px"></span>10</a></td>';

        for (i = 0; i < 10; i++){
            if (document.getElementById("nav").childNodes[0].childNodes[0].childNodes[i+1].childNodes[0].childNodes[1]) {
                document.getElementById("nav").childNodes[0].childNodes[0].childNodes[i+1].childNodes[0].childNodes[1].textContent = i+1;
                document.getElementById("nav").childNodes[0].childNodes[0].childNodes[i+1].childNodes[0].href = document.getElementById("nav").childNodes[0].childNodes[0].childNodes[i+1].childNodes[0].href+"&start="+ (90-i*10)+"&nicolas=true";
            }
        }
        return;
    }
    //page 6->5
    if (start == "50"){
        document.getElementById("resultStats").innerHTML = document.getElementById("resultStats").innerHTML.replace("6" ,"5");
        document.getElementById("nav").childNodes[0].childNodes[0].childNodes[5].innerHTML = '<td class="cur"><span class="csb" style="background:url(/images/nav_logo242.png) no-repeat;background-position:-53px 0;width:20px"></span>5</td>';
        document.getElementById("nav").childNodes[0].childNodes[0].childNodes[6].innerHTML = '<td><a class="fl" href="'+window.location.href+'"><span class="csb ch" style="background:url(/images/nav_logo242.png) no-repeat;background-position:-74px 0;width:20px"></span>10</a></td>';

        for (i = 0; i < 10; i++){
            if (document.getElementById("nav").childNodes[0].childNodes[0].childNodes[i+1].childNodes[0].childNodes[1]) {
                document.getElementById("nav").childNodes[0].childNodes[0].childNodes[i+1].childNodes[0].childNodes[1].textContent = i+1;
                document.getElementById("nav").childNodes[0].childNodes[0].childNodes[i+1].childNodes[0].href = document.getElementById("nav").childNodes[0].childNodes[0].childNodes[i+1].childNodes[0].href+"&start="+ (90-i*10)+"&nicolas=true";
            }
        }
        return;
    }
    //page 5->6
    if (start == "40"){
        document.getElementById("resultStats").innerHTML = document.getElementById("resultStats").innerHTML.replace("5" ,"6");
        document.getElementById("nav").childNodes[0].childNodes[0].childNodes[6].innerHTML = '<td class="cur"><span class="csb" style="background:url(/images/nav_logo242.png) no-repeat;background-position:-53px 0;width:20px"></span>6</td>';
        document.getElementById("nav").childNodes[0].childNodes[0].childNodes[5].innerHTML = '<td><a class="fl" href="'+window.location.href+'"><span class="csb ch" style="background:url(/images/nav_logo242.png) no-repeat;background-position:-74px 0;width:20px"></span>5</a></td>';

        for (i = 0; i < 10; i++){
            if (document.getElementById("nav").childNodes[0].childNodes[0].childNodes[i+1].childNodes[0].childNodes[1]) {
                document.getElementById("nav").childNodes[0].childNodes[0].childNodes[i+1].childNodes[0].childNodes[1].textContent = i+1;
                document.getElementById("nav").childNodes[0].childNodes[0].childNodes[i+1].childNodes[0].href = document.getElementById("nav").childNodes[0].childNodes[0].childNodes[i+1].childNodes[0].href+"&start="+ (90-i*10)+"&nicolas=true";
            }
           }
        return;

    }
 //page 4->7
    if (start == "30"){
        document.getElementById("resultStats").innerHTML = document.getElementById("resultStats").innerHTML.replace("4" ,"7");
        document.getElementById("nav").childNodes[0].childNodes[0].childNodes[7].innerHTML = '<td class="cur"><span class="csb" style="background:url(/images/nav_logo242.png) no-repeat;background-position:-53px 0;width:20px"></span>7</td>';
        document.getElementById("nav").childNodes[0].childNodes[0].childNodes[4].innerHTML = '<td><a class="fl" href="'+window.location.href+'"><span class="csb ch" style="background:url(/images/nav_logo242.png) no-repeat;background-position:-74px 0;width:20px"></span>5</a></td>';

        for (i = 0; i < 10; i++){
            if (document.getElementById("nav").childNodes[0].childNodes[0].childNodes[i+1].childNodes[0].childNodes[1]) {
                document.getElementById("nav").childNodes[0].childNodes[0].childNodes[i+1].childNodes[0].childNodes[1].textContent = i+1;
                document.getElementById("nav").childNodes[0].childNodes[0].childNodes[i+1].childNodes[0].href = document.getElementById("nav").childNodes[0].childNodes[0].childNodes[i+1].childNodes[0].href+"&start="+ (90-i*10)+"&nicolas=true";
            }

       }
             return;
    }

//page 3->8

      if (start == "20"){
        document.getElementById("resultStats").innerHTML = document.getElementById("resultStats").innerHTML.replace("3" ,"8");
        document.getElementById("nav").childNodes[0].childNodes[0].childNodes[8].innerHTML = '<td class="cur"><span class="csb" style="background:url(/images/nav_logo242.png) no-repeat;background-position:-53px 0;width:20px"></span>8</td>';
        document.getElementById("nav").childNodes[0].childNodes[0].childNodes[3].innerHTML = '<td><a class="fl" href="'+window.location.href+'"><span class="csb ch" style="background:url(/images/nav_logo242.png) no-repeat;background-position:-74px 0;width:20px"></span>5</a></td>';

        for (i = 0; i < 10; i++){
            if (document.getElementById("nav").childNodes[0].childNodes[0].childNodes[i+1].childNodes[0].childNodes[1]) {
                document.getElementById("nav").childNodes[0].childNodes[0].childNodes[i+1].childNodes[0].childNodes[1].textContent = i+1;
                document.getElementById("nav").childNodes[0].childNodes[0].childNodes[i+1].childNodes[0].href = document.getElementById("nav").childNodes[0].childNodes[0].childNodes[i+1].childNodes[0].href+"&start="+ (90-i*10)+"&nicolas=true";
            }

       }
             return;
    }
//page 2->9

      if (start == "10"){
        document.getElementById("resultStats").innerHTML = document.getElementById("resultStats").innerHTML.replace("2" ,"9");
        document.getElementById("nav").childNodes[0].childNodes[0].childNodes[9].innerHTML = '<td class="cur"><span class="csb" style="background:url(/images/nav_logo242.png) no-repeat;background-position:-53px 0;width:20px"></span>9</td>';
        document.getElementById("nav").childNodes[0].childNodes[0].childNodes[2].innerHTML = '<td><a class="fl" href="'+window.location.href+'"><span class="csb ch" style="background:url(/images/nav_logo242.png) no-repeat;background-position:-74px 0;width:20px"></span>5</a></td>';

        for (i = 0; i < 10; i++){
            if (document.getElementById("nav").childNodes[0].childNodes[0].childNodes[i+1].childNodes[0].childNodes[1]) {
                document.getElementById("nav").childNodes[0].childNodes[0].childNodes[i+1].childNodes[0].childNodes[1].textContent = i+1;
                document.getElementById("nav").childNodes[0].childNodes[0].childNodes[i+1].childNodes[0].href = document.getElementById("nav").childNodes[0].childNodes[0].childNodes[i+1].childNodes[0].href+"&start="+ (90-i*10)+"&nicolas=true";
            }

       }
             return;
    }
//page 1->10

      if (start == "0"){
        document.getElementById("resultStats").innerHTML = document.getElementById("resultStats").innerHTML.replace("About" ,"Page 10 of about");
        document.getElementById("nav").childNodes[0].childNodes[0].childNodes[10].innerHTML = '<td class="cur"><span class="csb" style="background:url(/images/nav_logo242.png) no-repeat;background-position:-53px 0;width:20px"></span>10</td>';
        document.getElementById("nav").childNodes[0].childNodes[0].childNodes[1].innerHTML = '<td><a class="fl" href="'+window.location.href+'"><span class="csb ch" style="background:url(/images/nav_logo242.png) no-repeat;background-position:-74px 0;width:20px"></span>5</a></td>';

        for (i = 0; i < 10; i++){
            if (document.getElementById("nav").childNodes[0].childNodes[0].childNodes[i+1].childNodes[0].childNodes[1]) {
                document.getElementById("nav").childNodes[0].childNodes[0].childNodes[i+1].childNodes[0].childNodes[1].textContent = i+1;
                document.getElementById("nav").childNodes[0].childNodes[0].childNodes[i+1].childNodes[0].href = document.getElementById("nav").childNodes[0].childNodes[0].childNodes[i+1].childNodes[0].href+"&start="+ (90-i*10)+"&nicolas=true";
            }

       }
             return;
    }
    } })();
