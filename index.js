

for(let i=0;i<document.querySelectorAll('.drum').length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        
        var inner = this.innerHTML;
        makevoice(inner);
        addanimation(inner)
        // this.style.background = "#0000"
     });
    

    
}


document.addEventListener("keydown",function(event){
    console.log(event);
    var ky = event.key;
    makevoice(ky);
    addanimation(ky);

});

makevoice = function(ky){
    switch(ky){
        case "w":
            var aud = new Audio('sounds/crash.mp3')
            aud.play();
            break;
        case "a":
            var aud = new Audio('sounds/kick-bass.mp3')
            aud.play();
            break;
        case "s":
            var aud = new Audio('sounds/snare.mp3')
            aud.play();
            break;
        case "d":
            var aud = new Audio('sounds/tom-1.mp3')
            aud.play();
            break;
        case "j":
            var aud = new Audio('sounds/tom-2.mp3')
            aud.play();
            break;
        case "k":
            var aud = new Audio('sounds/tom-3.mp3')
            aud.play();
            break;
        case "l":
            var aud = new Audio('sounds/tom-4.mp3')
            aud.play();
            break;
    }
}



//var aud = new Audio('sounds/tom-1.mp3')
// aud.play();
addanimation = function(ani){
    var currk = document.querySelector("."+ ani);

    currk.classList.add("pressed")

    setTimeout(function(){
        currk.classList.remove("pressed");
    } ,100);
}


