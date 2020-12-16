let counter =0;

let intro=document.getElementById("intro");
let img=document.getElementById("image");
intro.innerHTML="Right! I remember burying a time capsule with grandma a long time ago when grandma and I were still close.";
img.src="img/timecapsule-01.png";
// img.align="middle";
img.height="400";
// img.style.top="40vh";

document.getElementById("next").addEventListener("click", function(){
    counter++;
    console.log(counter);
    if (counter==1){
        // intro.innerHTML="X also remembers that the time capsule was to be opened few monthes ago.";
        intro.innerHTML="<b>'Where was the shovel?'</b><br><br> Grandma was normally a kind person and you loved her. But you didn't know grandma had a drinking problem because she never drank in front of you. But what happened on the day of your recital changed everything.";
        intro.style.top="22.5vh";
        intro.style.left="24vw";
        img.src="img/shovel.png";
        // img.height="200";
    }
    else if (counter==2){
        // intro.innerHTML="X quickly finds the place where it was buried and starts digging.";
        intro.innerHTML="<b>0 inch deep into the ground--</b><br><br>It was your big day. It was your recital day. You spent hours and hours practicing for that moment. But it was ruined by the very person you were so excited to play your flute for.";
        intro.style.top="27.5vh";
        intro.style.left="32vw";
        img.src="img/dig-01.png";

    }
    else if (counter==3){
        // intro.innerHTML="To others, the time capsule wasn't the most important thing at the moment, but she had to get the capsule out.";
        intro.innerHTML="<b>2 inch deep into the ground--</b><br><br>The moment you got up to the stage and started playing, you heard loud shouts and the recital was stopped. Grandma was fighting with other guests over seats. She smacked him in the face and started yelling <em><b>'YOU ARE NOTHING!!'</b></em> to everyone in the room.";
        intro.style.top="32.5vh";
        intro.style.left="40vw";
        img.src="img/dig2-01.png";

    }
    else if (counter==4){
        intro.innerHTML="<b>4 inch deep into the ground--</b><br><br>She was asked to leave and then was forced to leave. Of course the recital became a disaster and you ended up not getting a chance to play at all. Scholarship to college was gone but that didn't matter.";
        intro.style.top="37.5vh";
        intro.style.left="48vw";
        img.src="img/dig4-01.png";

    }//She smelled strongly like bourbon. She seemed upset. I never saw her like that before then. 
    else if (counter==5){
        intro.style.fontSize="400%";
        intro.style.width="auto";
        intro.innerHTML="<b>YOU JUST WANTED TO HIDE.</b>";
        // intro.style.top="42.5vh";
        // intro.style.left="56vw";
        intro.style.top="40vh";
        intro.style.left="50vw";
        img.style.opacity="0";
        

    }
    else if (counter==6){

        intro.style.fontSize="100%";
        intro.innerHTML="<b>6 inch deep into the ground--</b><br><br>You had to just sit there and watch your friends show what they had. When you packed up and got out, she was there, smelling like bourbon. And she said, 'What took you so long? Hurry up get in to the car.'";
        // intro.style.top="47.5vh";
        intro.style.width="20vw";
        intro.style.top="50vh";
        intro.style.left="64vw";
        
        img.src="img/dig6-01.png";
        img.style.opacity="100";

    }
    else if (counter==7){
        intro.innerHTML="<b>8 inch deep into the ground--</b><br><br>You wanted to get out from her car and cry. <br>When grandma dropped you off at my place, you couldn't stop your tear bursting out and told mom and dad what happened.";
        intro.style.top="52.5vh";
        intro.style.left="72vw";
        img.src="img/dig8-01.png";

    }
    else if (counter==8){
        intro.innerHTML="<b>10 inch deep into the ground--</b><br><br>Later that night, your parents and grandma had a fight. Mom and dad were on the phone shouting until late night and you are sure grandma was as well. After that day, your family never really visited grandma nor she visited you.";
        intro.style.top="57.5vh";
        intro.style.left="80vw";
        img.src="img/dig10-01.png";

    }
    else if (counter>=9){
        intro.innerHTML="<b>1 foot deep into the ground--</b><br><br>You wonder if you are digging the right place. <br>'Surely a ten year-old girl and her granny couldn't have dug deeper than thi--' <em><b>THUMP.</b></em> <br> And there it is. Your time capsule from the past.";
        intro.style.top="62.5vh";
        intro.style.left="88vw";
        img.src="img/dig12-01.png";
      
        document.getElementById("next").innerHTML="Go inside the house &<br>open the time capsule";
        document.getElementById("next").addEventListener("click", function(){
            window.location="main.html";
        })
    }
    
    // else if (counter>=10){
    //     intro.innerHTML=" ";
    //     document.getElementById("next").innerHTML="Go inside the house &<br>open the time capsule";
    //     document.getElementById("next").addEventListener("click", function(){
    //         window.location="main.html";
    //     })
    // }
})