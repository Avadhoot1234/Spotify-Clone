
let songIndex=0;
let audioElement=new Audio('songs/Bones.mp3');
let masterPlay=document.getElementById('masterplay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songName'));


let songs=[
    {songName:"Bones",filePath:"Desktop/Bones",coverPath:"Desktop/cover1"},
    {songName:"RadioActive",filePath:"songs/Radioactive",coverPath:"Desktop/cover2"},
    {songName:"Believer",filePath:"songs/",coverPath:"Desktop/cover3"},
    {songName:"It's Time",filePath:"songs/",coverPath:"Desktop/cover4"},
    {songName:"On Top of the world",filePath:"songs/",coverPath:"Desktop/cover5"},
    {songName:"Demons",filePath:"songs/",coverPath:"Desktop/cover6"},
    {songName:"Thunder",filePath:"songs/",coverPath:"Desktop/cover7"},
    {songName:"Enemy",filePath:"songs/",coverPath:"Desktop/cover8"}  
    ]

/*songItems.forEach((element,i)=>{
    element.getElementByTagName("img")[0].src=songs[i].coverPath;
    element.getElementByClassName("songName")[0].innerText=songs[i].songName;
})*/

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})


audioElement.addEventListener('timeupdate',()=>{
    
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;   
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        index =parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src='songs/Radioactive.mp3';
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})