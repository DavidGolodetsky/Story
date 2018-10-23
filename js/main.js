window.addEventListener('load', function(){

    var blackout = document.getElementById('blackout');
    var scene_1 = document.getElementById('scene_1');
    var loader = document.getElementById('loader');
    var path = anime.path('#bee_path path');

  //  music/////////////////////////////
  var sound_bee = document.getElementById('sound_bee');
  var sound_intro = document.getElementById('sound_intro');
  sound_intro.volume = 0.1;
  sound_bee.volume = 0.05;

  
  setTimeout(function() { 
    blackout.classList.add('fade');
    loader.hidden = true;
    scene_1.classList.remove('fade');
}, 6000); 
// was 6000


// loader end//////////////////////////
  //  music end/////////////////////////////

//   function soundAndFadeAudio (audiosnippetId) {

//     var sound = document.getElementById(audiosnippetId);

//     // Set the point in playback that fadeout begins. This is for a 2 second fade out.
//     var fadePoint = sound.duration - 2; 

//     var fadeAudio = setInterval(function () {

//         // Only fade if past the fade out point or not at zero already
//         if ((sound.currentTime >= fadePoint) && (sound.volume != 0.0)) {
//             sound.volume -= 0.1;
//         }
//         // When volume at zero stop all the intervalling
//         if (sound.volume === 0.0) {
//             clearInterval(fadeAudio);
//         }
//     }, 200);

// }


    // loader//////////////////////////

    var loaderAnim = anime({
        targets: loader,
        rotate: 360,
        duration: 7000,
        loop: true,
        easing: 'linear'
      });

    // loader end//////////////////////////


    //   text///////////////////////

  var line = document.querySelectorAll('.line');
  var i = 0;
  var del = 0;

  setTimeout(function() { 
    setInterval(subtitles, 9000);
}, 8000); 

  function subtitles() {
    if (i < line.length){
      line[i].classList.add('active');
      i++;
      if ((i > 3)&&(i - del > 3)){
        line[del].classList.remove('active');
        del++;
      }
    }
  };

   //   text end////////////////////////


  //  bee//////////////////////////////


  var beeTL = anime.timeline();

  beeTL
    .add({
      targets: '.bee',
      opacity: 1,
      duration: 100,
      delay: 18000,
      begin: function(){
        sound_bee.play();
      }
    })
    .add({
      targets: '.bee',
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      easing: 'linear',
      duration: 4000
    })
    .add({
      targets: '.bee',
      opacity: 0,
      duration: 100,
      complete: function(){
        sound_bee.pause()
      }
    });

  //  bee end//////////////////////////////

}, false);