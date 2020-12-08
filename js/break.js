let reconcile;
let forgive;
let back = document.getElementById("back");
document.getElementById("forgive").addEventListener("click",function(){
    document.getElementById("notforgive").remove();
    document.getElementById("afterdecision").innerHTML="I won't be able to see her again. We had some trouble but I wished we went back to when we were still close sometimes. I wish I had say this while she was still here.";
    back.innerHTML="<u>Continue going through the items in the time capsule >></u>";
    back.addEventListener("click",function(){
        window.location="prelast.html";
    })
});
document.getElementById("notforgive").addEventListener("click",function(){
    document.getElementById("forgive").remove();
    document.getElementById("afterdecision").innerHTML="After that day, my life was ruined. I lost my friends and I could never stand on the stage again. How could I ever forgive her for this? ";
});