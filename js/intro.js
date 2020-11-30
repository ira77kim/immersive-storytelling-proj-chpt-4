let counter =0;

let intro=document.getElementById("intro");
intro.innerHTML="As 'X' decides to dig out the time capsule,";

document.getElementById("next").addEventListener("click", function(){
    counter++;
    console.log(counter);
    if (counter==1){
        intro.innerHTML="X also remembers that the time capsule was to be opened few monthes ago.";
        intro.style.top="30vh";
        intro.style.left="32vw";
    }
    else if (counter==2){
        intro.innerHTML="X quickly finds the place where it was buried and starts digging.";
        intro.style.top="40vh";
        intro.style.left="40vw";
    }
    else if (counter==3){
        intro.innerHTML="To others, the time capsule wasn't the most important thing at the moment, but she had to get the capsule out.";
        intro.style.top="50vh";
        intro.style.left="60vw";
    }
    else if (counter==4){
        intro.innerHTML="shovel after shovel, as X dug deeper into the gro-- <em><b>THUMP.</b></em> <br> There's our time capsule.";
        intro.style.top="60vh";
        intro.style.left="68vw";
    }
    else if (counter==5){
        intro.innerHTML="After digging up the time capsule, X enters the house to put the time capsule on the kitchen table.";
        intro.style.top="70vh";
        intro.style.left="80vw";
    }
    else if (counter>=6){
        intro.innerHTML=" ";
        document.getElementById("next").innerHTML="Open the time capsule";
        document.getElementById("next").addEventListener("click", function(){
            window.location="main.html";
        })
    }
})