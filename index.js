const playlistContainer = document.querySelectorAll('.playlist-container');

const rightPlaylistSectionButton0 = document.getElementById("right-playlist-section-button0");
const leftPlaylistSectionButton0 = document.getElementById("left-playlist-section-button0");

const rightPlaylistSectionButton1 = document.getElementById("right-playlist-section-button1");
const leftPlaylistSectionButton1 = document.getElementById("left-playlist-section-button1");

const rightPlaylistSectionButton2 = document.getElementById("right-playlist-section-button2");
const leftPlaylistSectionButton2 = document.getElementById("left-playlist-section-button2");

rightPlaylistSectionButton0.addEventListener("click", movePlaylistSectionRight0);
leftPlaylistSectionButton0.addEventListener("click", movePlaylistSectionLeft0);

rightPlaylistSectionButton1.addEventListener("click", movePlaylistSectionRight1);
leftPlaylistSectionButton1.addEventListener("click", movePlaylistSectionLeft1);

rightPlaylistSectionButton2.addEventListener("click", movePlaylistSectionRight2);
leftPlaylistSectionButton2.addEventListener("click", movePlaylistSectionLeft2);


// Section 0
let translationLength0 = 0;

function movePlaylistSectionRight0() {
  if (translationLength0 <= 1000) {
    translationLength0 += 250;
    for (let x=0; x<8; x++) {
      playlistContainer[x].style.transform = `translateX(-${translationLength0}px)`;
    }
  }
}

function movePlaylistSectionLeft0() {
  translationLength0 -= 250;
  for (let x=0; x<8; x++) {
    playlistContainer[x].style.transform = `translateX(-${translationLength0}px)`;
  }

}

// Section 1
let translationLength1 = 0;

function movePlaylistSectionRight1() {
  if (translationLength1 <= 750) {
    translationLength1 += 250;
    for (let x=9; x<18; x++) {
      playlistContainer[x].style.transform = `translateX(-${translationLength1}px)`;
    }
  }
}

function movePlaylistSectionLeft1() {
  translationLength1 -= 250;
  for (let x=9; x<18; x++) {
    playlistContainer[x].style.transform = `translateX(-${translationLength1}px)`;
  }
}

//Section 2

let translationLength2 = 0;

function movePlaylistSectionRight2() {
  if (translationLength2 <= 500) {
    translationLength2 += 250;
    for (let x=18; x<26; x++) {
      playlistContainer[x].style.transform = `translateX(-${translationLength2}px)`;
    }
  }
}

function movePlaylistSectionLeft2() {
  translationLength2 -= 250;
  for (let x=18; x<26; x++) {
    playlistContainer[x].style.transform = `translateX(-${translationLength2}px)`;
  }
}

