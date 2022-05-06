const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);
var btn_start = $(".icon_start");
var linePlayTrack = $(".line-play_track");
var linePlayThumb = $(".line-play_thumb");
var btnControl = $(".icon_control")
var btnPause = $(".icon_pause");
var btnPlay = $(".icon_play")
var btnVolumn = $(".btn_volumn");
var btnUnMuted = $(".btn_unmuted");
var btnMuted = $(".btn_muted")
var rangeVolumn = $("#range_volumn");
var lineVolumn = $(".progress_line-volumn");
var rangeTime = $("#range_time");
var lineTime = $(".progress_line-time");
var timeSecondCurr = $(".second_curr");
var timeMinCurr = $(".min_curr");
var songSrc = $$(".song_src");
var imgSong = $$(".img_song");
var btnSongs = $$(".song_item-img");
var imgActive = $(".img_active");
var songAudioFooter = $(".song_audio-footer");
var songName = $$(".song_name");
var songAuthor = $$(".song_author");
var btnNext = $("#btn_next");
var btnPrev = $("#btn_prev");
var btnInput = $(".btn_input");
var btnCloseInput = $(".btn_close");

const songs = [{
        "srcSong": "https://vusic.techstore.dev/static/media/Clarx%20-%20Shakedown%20[NCS%20Release].c3f9a057.mp3",
        "imgSong": "../images/img-music1.jpg"
    },
    {
        "srcSong": "https://vusic.techstore.dev//static/media/mixkit-games-worldbeat-466.fbb1a187.mp3",
        "imgSong": "../images/img-music2.jpg"
    },
    {
        "srcSong": "https://vusic.techstore.dev///static/media/ROY%20KNOX%20-%20%20Over%20My%20Head%20(Feat.%20Mike%20Robert)%20[NCS%20Release].3d4c8e65.mp3",
        "imgSong": "../images/img-music3.jpg"
    },
    {
        "srcSong": "https://vusic.techstore.dev//static/media/Midranger%20-%20Apocalypse%20[NCS%20Release].9cc2c231.mp3",
        "imgSong": "../images/img-music4.jpg"
    },
    {
        "srcSong": "https://vusic.techstore.dev//static/media/Subtact%20-%20Want%20You%20(feat.%20Sara%20Skinner)%20[NCS%20Release].cba03d8a.mp3",
        "imgSong": "../images/img-music5.jpg"
    },
    {
        "srcSong": "https://vusic.techstore.dev/static/media/N3WPORT%20-%20Alive%20(feat.%20Neoni)%20[NCS%20Release].4dfef221.mp3",
        "imgSong": "../images/img-music6.jpg"
    },
    {
        "srcSong": "https://vusic.techstore.dev/static/media/impact.006bd74b.mp3",
        "imgSong": "../images/img-music7.jpg"
    },
    {
        "srcSong": "https://vusic.techstore.dev/static/media/Subtact%20-%20Want%20You%20(feat.%20Sara%20Skinner)%20[NCS%20Release].cba03d8a.mp3",
        "imgSong": "../images/img-music8.jpg"
    },
    {
        "srcSong": "https://vusic.techstore.dev/static/media/Heuse%20&%20Tom%20Wilson%20-%20Ignite%20[NCS%20Release].b81dd9b0.mp3",
        "imgSong": "../images/img-music9.jpg"
    }
];
setTimeout(() => {
    $(".loader").style.display = "none";
    $(".container_page").style.display = "block";
}, 3000);

btnSongs.forEach((btn, index) => {
    btn.onclick = function() {
        $(".footer_select-music ").style.display = 'none';
        $(".footer_player").style.display = 'block';
        playSongFooter(index);
        btnNext.addEventListener('click', () => {
            if (index === btnSongs.length) {
                index = 0;
            }
            index++;
            setTimeout(playSongFooter(index), 1000);
            timePlay(index);
        });
        btnPrev.addEventListener('click', () => {
            if (index === 0) {
                index = btnSongs.length;
            }
            console.log(index);
            index--;
            setTimeout(playSongFooter(index), 1000);
            timePlay(index);
        });
        timePlay(index);
        HTMLFieldSetElementjhfh
        hhfsdfkf
        fdsjfk

    }
});

function timePlay(count) {
    var x = parseInt(songSrc[count].duration / 60);
    $(".min_duration").innerText = '0' + x;
    if (parseInt(songSrc[count].duration - x * 60) < 10) {
        $(".second_duration").innerText = '0' + parseInt(songSrc[count].duration - x * 60);
    } else {
        $(".second_duration").innerText = parseInt(songSrc[count].duration - x * 60);
    };
}


function playSongFooter(count) {
    songAudioFooter.src = songSrc[count].src;
    imgActive.src = imgSong[count].src;
    $(".song_name-active").innerText = songName[count].innerText;
    $(".song_author-active").innerText = songAuthor[count].innerText;
    // playSong();
    songAudioFooter.play();
    btnPause.classList.remove('non_active');
    btnPlay.classList.add('non_active');
}

songs.map(function(item, index) {
    songSrc[index].src = item.srcSong;
})

function line() {
    var m = 0;
    if (parseInt(songAudioFooter.currentTime) < 10) {
        timeSecondCurr.innerText = '0' + parseInt(songAudioFooter.currentTime);
    } else if (parseInt(songAudioFooter.currentTime) >= 10) {
        timeSecondCurr.innerText = parseInt(songAudioFooter.currentTime);
    }
    if (parseInt(songAudioFooter.currentTime) >= 60) {
        m = m + 1;
        timeMinCurr.innerText = '0' + m;
        x = (parseInt(songAudioFooter.currentTime) - 60)
        if ((parseInt(songAudioFooter.currentTime) - 60) < 10) {
            timeSecondCurr.innerText = '0' + (parseInt(songAudioFooter.currentTime) - 60);
        } else {
            timeSecondCurr.innerText = (parseInt(songAudioFooter.currentTime) - 60);
        }
    }
    if (parseInt(songAudioFooter.currentTime) >= 120) {
        m = m + 1;
        timeMinCurr.innerText = '0' + m;
        x = (parseInt(songAudioFooter.currentTime) - 120)
        if ((parseInt(songAudioFooter.currentTime) - 120) < 10) {
            timeSecondCurr.innerText = '0' + (parseInt(songAudioFooter.currentTime) - 120);
        } else {
            timeSecondCurr.innerText = (parseInt(songAudioFooter.currentTime) - 120);
        }
    }
    if (parseInt(songAudioFooter.currentTime) >= 180) {
        m = m + 1;
        timeMinCurr.innerText = '0' + m;
        x = (parseInt(songAudioFooter.currentTime) - 180)
        if ((parseInt(songAudioFooter.currentTime) - 180) < 10) {
            timeSecondCurr.innerText = '0' + (parseInt(songAudioFooter.currentTime) - 180);
        } else {
            timeSecondCurr.innerText = (parseInt(songAudioFooter.currentTime) - 180);
        }
    }
}

function Muted() {
    songAudioFooter.muted = true;
}

function unMuted() {
    songAudioFooter.muted = false;

}

function playSong() {
    songAudioFooter.volume = 0.5;
    songAudioFooter.play();
    btnPause.classList.remove('non_active');
    btnPlay.classList.add('non_active');

    // timeSecondCurr.innerText = audio.currentTime;
}

function pauseSong() {
    songAudioFooter.pause();
    btnPause.classList.add('non_active');
    btnPlay.classList.remove('non_active');
}


function updateLine() {
    line();
    const widthLinePercent = (songAudioFooter.currentTime / songAudioFooter.duration) * 100;
    rangeTime.value = parseInt(widthLinePercent);
    lineTime.style.width = parseInt(widthLinePercent) + '%';
    if (songAudioFooter.currentTime === songAudioFooter.duration) {
        playSong();
    }
}

function changeVolumn() {
    lineVolumn.style.width = rangeVolumn.value + '%';
    songAudioFooter.volume = (rangeVolumn.value / 100);
}

function changeTime() {
    lineTime.style.width = rangeTime.value / songAudioFooter.duration + '%';
    songAudioFooter.currentTime = rangeTime.value * (songAudioFooter.duration / 100);
    playSong();
}


btnPlay.addEventListener('click', () => {
    playSong();
});
btnPause.addEventListener('click', () => {
    pauseSong();
});
songAudioFooter.addEventListener('timeupdate', updateLine);

rangeVolumn.addEventListener('input', () => {
    changeVolumn();
});
rangeTime.onchange = function() {
    changeTime();
}
btnUnMuted.addEventListener('click', () => {
    btnMuted.style.display = "block";
    btnUnMuted.classList.add("non_active");
    Muted();
});
btnMuted.addEventListener('click', () => {
    btnMuted.style.display = "none";
    btnUnMuted.classList.remove("non_active");
    unMuted();
});