window.addEventListener('load', function(){
    window.addEventListener('keydown', function(e){
        keypressed(e.keyCode);
    })
})
var pianokey = document.querySelectorAll('.piano-key');
for(var i = 0; i < pianokey.length; i++){
    pianokey[i].addEventListener('click', function(e){
        keypressed(e.target.getAttribute('data-key'));
    });
}
function keypressed(code){
    var audio = document.querySelector(`audio[data-key="${code}"]`);
    var key = document.querySelector(`.piano-key[data-key="${code}"]`)

    if(!audio) return;
    audio.currentTime = 0;
    audio.play();

    key.classList.add('click-btn');
    setTimeout(function(){
        key.classList.remove('click-btn');
    }, 500);
}
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
