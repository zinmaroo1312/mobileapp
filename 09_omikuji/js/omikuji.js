"use strict";

window.addEventListener("DOMContentLoaded",
function() {
    $("header").textillate({
        loop: false,
        minDisplayTime: 2000,
        initialDelay: 2000, //zinmaroo
        autoStart: true,
        in: {
            effect: "fadeInLeftBig",
            delayScale: 1.5,
            delay: 50,
            sync: false,
            shuffle: true

        }
           
    });
    $(function () {
        ScrollReveal().reveal("#btn1", { duration: 9000});
        setTimeout(
            function() {
                let popMessage = "いらっしゃいませ!おみくじ引いてって!";
                this.window.alert(popMessage)
            },
             "5000"
             );
        }, false
    );
   const btn1 = document.getElementById("btn1");
   btn1.addEventListener("click",
    function () {

        btn1.style.transition = "1s";
        let resultText =["大吉!!!!!","吉!!!!","中吉!!!","小吉!!","末吉!","凶..."];
        let resultColor =["#ff0000","#c71585","#ff1493","#ff69b4","#ff8c00","#1e90ff"];
        let resultFontSize =["55px","50px","45px","40px","35px","30px"];
        let resultMaxSpeed =[10,10,8,5,5,5];
        let resultMaxSize =[30,30,20,15,20,20];
        let resultImage =[
            "img/star.png", //z
            "img/sakura_hanabira.png", //z
            "img/sakura_hanabira.png", //z
            "img/sakura_hanabira.png", //z
            "img/leaf.png", //z
            "img/snowflakes.png" //z
        ];
        let n = Math.floor(Math.random() * resultText.length);
        btn1.textContent = resultText[n];
        btn1.style.color = resultColor[n];
        btn1.style.fontSize = resultFontSize[n];

        
        //letn = Math.floor(Math.random() * 3);

        //switch (n) {
          //  case 0:
            //    btn1.textContent = "Very Happy!!";
              //  btn1.style.color = "#ff1493";
                //btn1.style.fontSize = "38px";
         //       break;
        //    case 1:
        //        btn1.textContent = "Happy!";
        //        btn1.style.color = "#ffff00";
        //        btn1.style.fontSize = "36px";
        //        break;
        //    case 2:
        //        btn1.textContent = "Unhappy...";
        //        btn1.style.color = "#000080";
        //        btn1.style.fontSize = "30px";
        //        break;    
       // }
        $(document).snowfall("clear");

        $(document).ready(function () {
           $(document).snowfall({
              maxSpeed: resultMaxSpeed[n],
              minSpeed: 1,
              maxSize: resultMaxSize[n],
              minSize: 1,
              image: resultImage[n]//,z
              //image: 'img/sakura_hanabira.png',z
           });
        });
    }, false
   );
});
           

