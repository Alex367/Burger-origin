var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player__yt', {
      width: '100%',
      height: '100%',
      videoId: 'I6-i1RBlvNI',
      playerVars: {
        controls: 0,
        cc_load_policy: 0,
        disablekb: 0,
        showinfo: 0,
        rel: 0,
        autoplay: 0,
        modestbranding: 0
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

function onPlayerReady(){
  const duration = player.getDuration();

  let interval;
  clearInterval(interval);

  interval = setInterval(() =>{
      const completed = player.getCurrentTime();
      const percent = (completed / duration) * 100;
      changeButtonPosition(percent);
      updateTimerDisplay();
  }, 1000);
}


function onPlayerStateChange(event) {
  switch (event.data) {
    case 1:
      $(".controls-play").css('fill', 'black');
      break;
    case 2: 
      $(".controls-play").css('fill', '#626262');
      break;
  }
}

$(".controls-play").on("click", e => {
  const playerStatus = player.getPlayerState(); // 0 - ended, 1 - played, 2 - paused ...

  if (playerStatus !== 1) {
    player.playVideo();
    $('.player__bg').addClass('hidden');
    $('.player-play').addClass('hidden2');
  } else {
    player.pauseVideo();
  }
});

$(".player__bg").on("click", e => {
  player.playVideo();
  $('.player__bg').addClass('hidden');
  $('.player-play').addClass('hidden2');
});

$(".player-play").on("click", e => {
  player.playVideo();
  $('.player__bg').addClass('hidden');
  $('.player-play').addClass('hidden2');
});

$(".controls-playback").on('click', e =>{
  e.preventDefault();
  $('.player__bg').addClass('hidden');
  $('.player-play').addClass('hidden2');

  const bar = $(e.currentTarget);
  const newButtonPosition = e.pageX - bar.offset().left;//replace
  const clickedPercent = (newButtonPosition / bar.width()) * 100; //replace percent
  const newPlayerTime = (player.getDuration() / 100) * clickedPercent;

  changeButtonPosition(clickedPercent);
  player.seekTo(newPlayerTime);
});

function changeButtonPosition(percents) {
  $(".controls-playback-button").css({
    left: `${percents}%`
  });
}

function updateTimerDisplay() {
  $(".player__duration-completed").text(formatTime(player.getCurrentTime()));
  $(".player__duration-estimate").text(formatTime(player.getDuration()));
}

function formatTime(time) {
  const roundTime = Math.round(time);

  const minutes = Math.floor(roundTime / 60);
  const seconds = roundTime - minutes * 60;
  const formatedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return minutes + ":" + formatedSeconds;
}

$(".controls-volume").on('click', e => {
    var vol = player.isMuted();
    if(vol){
      player.unMute();
      $(".controls-volume").css('fill', '#626262');
    }

    if(vol == false){
      player.mute();
      $(".controls-volume").css('fill', 'black');
    }
});

$(".controls-change-volume").on('click', e =>{
  e.preventDefault();

  const bar_vol = $(e.currentTarget);
  const newButtonPosition_vol = e.pageX - bar_vol.offset().left;//replace
  const clickedPercent_vol = (newButtonPosition_vol / bar_vol.width()) * 100; //replace percent
  // how many percent i clicked
  player.setVolume(clickedPercent_vol);

  $(".controls-change-volume__button").css({
    left: `${clickedPercent_vol}%`
  });
});