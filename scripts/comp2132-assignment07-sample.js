//get the pop-up element
const popUp = document.getElementById("pop-up");

//three second delay before popup
const delay = 3000; 

//track if he user has already started the animation
//dont show the popup if they have
let userHasNotStartedAnimationYet = true;

/*
Assignment BONUS
----------------------------
need a handler for this animation
*/
let popupAnimationHandler;
/*
track the opacity from 0-1
transparent - opaque
*/
let opacityValue = 0;
/*
show the pop-up after waiting for a few seconds
    setTimeout( function(){}, delayInMilliseconds );
*/
setTimeout( function(){
    //but dont show pop up if user has already started the animation
    if(userHasNotStartedAnimationYet === true){
        //erquest a frame of animation
        popupAnimationHandler = requestAnimationFrame( fadeIn );
    }
} , delay);
/*
Assignment BONUS
an animation for fading in the opacity
*/
function fadeIn(){
    opacityValue = opacityValue + .05;
    if(opacityValue <= 1){
        popUp.style.opacity = opacityValue;
        requestAnimationFrame( fadeIn );
    }else{
        popUp.style.opacity = 1;
    }    
}

/*
allow user to close and hide the popup after they have seen it
*/
const closePopup = document.getElementById("btn-close");
closePopup.addEventListener("click", function(){
    popUp.style.opacity = "0";
});


/*
spining bike start and stop
*/
const mainPictureInHTML = document.getElementById("main-image");
const startAnimation    = document.getElementById("btn-start");
const stopAnimation     = document.getElementById("btn-stop");

//need an animation handler 
let bikeAnimationHandler;
let timeoutHandler;
//flag to track if user has chosen to start or stop
let keepSpining = false;
//the first image # in the group
let currentImageNumber = 1;
//the last image # in the group
const maxImageNumber = 34;

//start button is clicked
startAnimation.addEventListener("click", function(){
    //ensure we dont show the instructions
    //if the user has already started the animation
    userHasNotStartedAnimationYet = false;
    keepSpining = true;
    //request a frame of animation
    bikeAnimationHandler = requestAnimationFrame( spinImage );

});

//stop button is clicked
stopAnimation.addEventListener("click", function(){
    clearTimeout(timeoutHandler);
    cancelAnimationFrame(bikeAnimationHandler);
    
});


/*
run this with each frame of animation
*/
function spinImage(){    
    //determine the next image
    currentImageNumber++;
    //if end of images, start again
    if(currentImageNumber > maxImageNumber ){
        currentImageNumber = 1;
    }
    //update image
    mainPictureInHTML.src = `images/bike-${currentImageNumber}.jpg`;

    //pause in between each frame of animation
    timeoutHandler = setTimeout(function(){
        //callback for the next frame of animation
        bikeAnimationHandler = requestAnimationFrame( spinImage );
    }, 100);  
}