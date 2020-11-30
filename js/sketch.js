let counter=0;

console.log(counter);
let book = document.getElementById("book");
let chess = document.getElementById("chess");
let recipe = document.getElementById("recipe");
let paper = document.getElementById("paper");
let ring = document.getElementById("ring");
let photo = document.getElementById("photo");

var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// book.addEventListener("click", function(){
//     modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// })
book.onclick = function(){
    counter++;
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    console.log(counter);
    if(counter>=3){
        document.getElementById("msg").style.opacity=1;
    }
}
chess.onclick = function(){
    counter++;
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    console.log(counter);
    if(counter>=3){
        document.getElementById("msg").style.opacity=1;
    }
}
recipe.onclick = function(){
    counter++;
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    console.log(counter);
    if(counter>=3){
        document.getElementById("msg").style.opacity=1;
    }
}
paper.onclick = function(){
    counter++;
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    console.log(counter);
    if(counter>=3){
        document.getElementById("msg").style.opacity=1;
    }
}
ring.onclick = function(){
    counter++;
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    console.log(counter);
    if(counter>=3){
        document.getElementById("msg").style.opacity=1;
    }
}
photo.onclick = function(){
    counter++;
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    console.log(counter);
    if(counter>=3){
        document.getElementById("msg").style.opacity=1;
    }
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}





document.getElementById("back").addEventListener("click", function(){
    window.location="index.html";
})