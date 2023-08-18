let acordion = document.getElementsByClassName("acordion");
console.log(acordion)

for(let i = 0; i <= acordion.length; i++){
   acordion[i].addEventListener("click", function(){
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
   });
}