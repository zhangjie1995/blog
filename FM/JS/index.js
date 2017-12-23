var channelID = 'public_tuijian_spring';
var lyricObj = {};

var channelList = $('.channel-list');
var bgSong = $('.aside figure')
var song = $('.detail h3');
var author = $('.detail .author');


var music = new Audio();



getChannelList();
getRandSong();

//播放器控制
$('.play').addEventListener('click',function(e){
  var icon = this.querySelector('.fa');
  if(icon.classList.contains('fa-play')){
    music.play();
  } else{
    music.pause();
  }
  icon.classList.toggle('fa-play');
  icon.classList.toggle('fa-pause');
})
$('.step-forward').addEventListener('click',function(){
  getRandSong();
  $('.lyric').innerText = '🎵🎵🎵🎵🎵' ;
})
//播放器进度自动更新事件
music.addEventListener('timeupdate',function(){
  var _this = this;
  var min = Math.floor(music.currentTime/60);
  var second = parseInt(music.currentTime%60);
  var percent = music.currentTime/music.duration*100;
  $('.progress-now').style.width = percent + '%';
  _this.shouldUpdate = false;
  $('.time').innerText = min+':'+second;
  var line = lyricObj['0'+min+':'+second];
  if(line)
    $('.lyric').innerText = line;
})
//播放器进度点击事件
$('.progress').addEventListener('click',function(e){
  var percent = e.offsetX/parseInt(window.getComputedStyle(this).width);
  music.currentTime = music.duration * percent;
  $('.progress-now').style.width = percent*100+'%';
})
//频道控制
$('.footer .back').addEventListener('click',function(){
  if( parseInt(channelList.style.left) < 0 )
    channelList.style.left = parseInt(channelList.style.left) + 100+'%';
})
$('.footer .forward').addEventListener('click',function(){
  if( channelList.style.left === '') channelList.style.left = 0;
  if(parseInt(channelList.style.left) > -700)
    channelList.style.left = parseInt(channelList.style.left) - 100+'%';
})
function getChannelList(){
  var xhr = new XMLHttpRequest()
  xhr.open('GET','https://api.jirengu.com/fm/getChannels.php');
  xhr.onload = function(){
    if((xhr.status >= 200 && xhr.status<300) || xhr.status === 304){
      var data = JSON.parse(xhr.responseText)['channels']
      console.log(data)
      data.forEach(function(ele){
        var newLi = document.createElement('li');
        var newBg = document.createElement('figure');
        var newName = document.createElement('div')
        var url = ele['cover_small'];
        var channelID = ele['channel_id'];
        newLi.setAttribute('data-channel-id',channelID);
        newLi.setAttribute('data-channel-name',ele['name']);
        newName.classList.add('channel-name');
        newName.innerText = ele['name'];
        newBg.style.backgroundImage = 'url('+url+')';
        newLi.appendChild(newBg);
        newLi.appendChild(newName);
        newLi.addEventListener('click',function(){
          window.channelID = this.getAttribute('data-channel-id');
          getRandSong();
          $('.detail .tag').innerText = this.getAttribute('data-channel-name');
          $('.lyric').innerText = '🎵🎵🎵🎵🎵' ;

          var children = this.parentElement.children;
          [].forEach.call(children,function(ele){
            ele.classList.remove('active');
          })
          this.classList.add('active');
        })
        channelList.appendChild(newLi);
      })
    }
  }
  xhr.send()
}
function getRandSong(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET','https://api.jirengu.com/fm/getSong.php?channel='+window.channelID);
  xhr.onload = function(){
    if((xhr.status >= 200 && xhr.status < 300)|| xhr.status == 304){
      var songInf = JSON.parse(xhr.responseText)['song'][0];
      loadMusic(songInf);
    }
  }
  xhr.send();
}
function loadMusic(songInf){
  song.innerText = songInf['title'];
  author.innerText = songInf.artist;
  bgSong.style.backgroundImage = 'url('+songInf['picture']+')';
  $('#page-cover').style.backgroundImage = 'url('+songInf['picture']+')';
  music.src = songInf.url;
  music.play()
  loadLyric(songInf.sid);
}
function loadLyric(sid){
  var _this = this;
  var xhr = new XMLHttpRequest();
  xhr.open('GET','https://jirenguapi.applinzi.com/fm/getLyric.php?sid='+sid,true);
  xhr.onload = function(){
    if((xhr.status >= 200 && xhr.status < 300)|| xhr.status == 304){
      var lyric = JSON.parse(xhr.responseText).lyric;
      var lyricObj = {};
      lyric.split('\n').forEach(function(line){
        var times = line.match(/\d{2}:\d{2}/g);
        var str = line.replace(/\[.+?\]/g,'');
        if(Array.isArray(times)){
          times.forEach(function(time){
            lyricObj[time] = str;
          })
        }
      })
      _this.lyricObj = lyricObj;
    }
  }
  xhr.send();
}
function $(ele){
  return document.querySelector(ele);
}
