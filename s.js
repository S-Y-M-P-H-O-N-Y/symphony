//function to verify that the key is pressed or depressed and add the addeventlistener to the button that gonna allow us to listen to the music
window.addEventListener('load', function(){
    window.addEventListener('keydown', function(e){
        keypressed(e.keyCode);// the key is depressed
    })
})

var pianokey = document.querySelectorAll('.piano-key'); // the array that gonna contains all the keybord element with class .piano-key in the html page
for(var i = 0; i < pianokey.length; i++){
    pianokey[i].addEventListener('click', function(e){ // adding te eventlistener that allow us to listen to the museque to every element
        keypressed(e.target.getAttribute('data-key'));//attrebute the ascii code with the key pressed
    });
}
// the link between the pressed key and the displaying of the sound in <audio> of each elemnent
function keypressed(code){
    var audio = document.querySelector(`audio[data-key="${code}"]`);// the variable that contain the assci code of the data key in the <audio >
    var key = document.querySelector(`.piano-key[data-key="${code}"]`)//the variable that contain the src audio musique of the piano key in the <audio >
    if(!audio) return // if the pressed key is not iclude in all of the assci code of the data key 
    audio.currentTime = 0; // returning the audio to 0 that mean that it's not gonna display any song 
    audio.play();
// adding the effect of the pressed and depressed shadow to the piano
    key.classList.add('click-btn');
    setTimeout(function(){// it allow the shadow to be displayed 
        key.classList.remove('click-btn');
    }, 500);
}

//hiding and showing the element list in every click
function l1(){
    $('#level2').hide()
    return $('#level1').show()
}
function l2(){
    $('#level1').hide()
    $('#level3').hide()
    return $('#level2').show()
}
function l3(){
    $('#level2').hide()
    return $('#level3').show()

}
function levels(){
    $("#level1").hide()
    $("#level2").hide()
    $("#level3").hide()
}
