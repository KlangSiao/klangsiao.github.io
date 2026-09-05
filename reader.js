const mangaData = {
  Knightsoul_Vacation: {
    readMode: 'flip',
    bgmTracks: [
      { start: 1, end: 7, src: "asset/Knightsoul Vacation/NewBGM.mp3", volume: 0.5 },
      { start: 8, end: 23, src: "asset/Knightsoul Vacation/Romence.mp3", volume: 0.5 }
    ],
    scenes: [
      { img: "asset/Knightsoul Vacation/1.webp", sfx: "" },
      { img: "asset/Knightsoul Vacation/2.webp", sfx: "" },
      { img: "asset/Knightsoul Vacation/3.webp", sfx: "" },
      { img: "asset/Knightsoul Vacation/4.webp", sfx: { src: "asset/Knightsoul Vacation/Wave.mp3", volume: 0.8 } },
      { img: "asset/Knightsoul Vacation/5.webp", sfx: { src: "asset/Knightsoul Vacation/SoundP5.mp3", volume: 0.8 } },
      { img: "asset/Knightsoul Vacation/6.webp", sfx: "" },
      { img: "asset/Knightsoul Vacation/7.webp", sfx: "" },
      { img: "asset/Knightsoul Vacation/8.webp", sfx: { src: "asset/Knightsoul Vacation/Page8.mp3", volume: 1 } },
      { img: "asset/Knightsoul Vacation/9.webp", sfx: { src: "asset/Knightsoul Vacation/Page9.mp3", volume: 1 } },
      { img: "asset/Knightsoul Vacation/10.webp", sfx: { src: "asset/Knightsoul Vacation/Page10.mp3", volume: 0.8, loop: true } },
      { img: "asset/Knightsoul Vacation/11.webp", sfx: { src: "asset/Knightsoul Vacation/Page11.mp3", volume: 0.8 } },
      { img: "asset/Knightsoul Vacation/12.webp", sfx: { src: "asset/Knightsoul Vacation/Page12.mp3", volume: 0.9 } },
      { img: "asset/Knightsoul Vacation/13.webp", sfx: { src: "asset/Knightsoul Vacation/Page13.mp3", volume: 0.7 } },
      { img: "asset/Knightsoul Vacation/14.webp", sfx: { src: "asset/Knightsoul Vacation/Page14.mp3", volume: 0.8, loop: true } },
      { img: "asset/Knightsoul Vacation/15.webp", sfx: { src: "asset/Knightsoul Vacation/Page14.mp3", volume: 0.8, loop: true } },
      { img: "asset/Knightsoul Vacation/16.webp", sfx: { src: "asset/Knightsoul Vacation/Page16.mp3", volume: 0.8, loop: true } },
      { img: "asset/Knightsoul Vacation/17.webp", sfx: { src: "asset/Knightsoul Vacation/Page17.mp3", volume: 0.8 } },
      { img: "asset/Knightsoul Vacation/18.webp", sfx: { src: "asset/Knightsoul Vacation/Page18.mp3", volume: 0.8, loop: true } },
      { img: "asset/Knightsoul Vacation/19.webp", sfx: { src: "asset/Knightsoul Vacation/Page19.mp3", volume: 0.8, loop: true } },
      { img: "asset/Knightsoul Vacation/20.webp", sfx: { src: "asset/Knightsoul Vacation/Page20.mp3", volume: 0.8 } },
      { img: "asset/Knightsoul Vacation/21.webp", sfx: { src: "asset/Knightsoul Vacation/Page21.mp3", volume: 0.8 } },
      { img: "asset/Knightsoul Vacation/22.webp", sfx: "" },
      { img: "asset/Knightsoul Vacation/23.webp", sfx: "" }
    ]
  },

  Arcade_Affair: {
    readMode: 'flip',
    bgmTracks: [
      { start: 1, end: 44, src: "asset/Arcade Affair/Moonlight Cafe .mp3", volume: 0.5 }
    ],
    scenes: Array.from({ length: 44 }, (_, i) => ({ img: `asset/Arcade Affair/${i + 1}.webp`, sfx: "" }))
  },

  Radical_Vacation: {
    readMode: 'flip',
    bgmTracks: [
      { start: 2, end: 7, src: "asset/Radical Vacation/onsen.wav", volume: 0.4 },
      { start: 8, end: 32, src: "asset/Radical Vacation/RomanceA.wav", volume: 1 }
    ],
    scenes: [
      { img: "asset/Radical Vacation/1.webp", sfx: "" },
      { img: "asset/Radical Vacation/2.webp", sfx: "" },
      { img: "asset/Radical Vacation/3.webp", sfx: "" },
      { img: "asset/Radical Vacation/4.webp", sfx: "" },
      { img: "asset/Radical Vacation/5.webp", sfx: "" },
      { img: "asset/Radical Vacation/6.webp", sfx: "" },
      { img: "asset/Radical Vacation/7.webp", sfx: { src: "asset/Radical Vacation/get out of water.wav", volume: 0.7 } },
      { img: "asset/Radical Vacation/8.webp", sfx: { src: "asset/Radical Vacation/towel.wav", volume: 0.7 } },
      { img: "asset/Radical Vacation/9.webp", sfx: { src: "asset/Radical Vacation/open door.wav", volume: 0.7 } },
      ...Array.from({ length: 23 }, (_, i) => ({ img: `asset/Radical Vacation/${i + 10}.webp`, sfx: "" }))
    ]
  },

  A_Secret_Romance: {
    readMode: 'scroll',
    hasChapters: true,
    chapters: {
      "ch1": {
        title: "ตอนที่ 1",
        bgmTracks: [{ start: 1, end: 24, src: "asset/A Secret Romance/A Romace.wav", volume: 0.6 }],
        scenes: [
          { img: "asset/A Secret Romance/ch1/1.jpg", sfx: "" },
          { img: "asset/A Secret Romance/ch1/2.jpg", sfx: "" },
          { img: "asset/A Secret Romance/ch1/3.jpg", sfx: "" },
          { img: "asset/A Secret Romance/ch1/4.jpg", sfx: "" },
          { img: "asset/A Secret Romance/ch1/5.jpg", sfx: "" },
          { img: "asset/A Secret Romance/ch1/6.jpg", sfx: "" },
          { img: "asset/A Secret Romance/ch1/7.jpg", sfx: "" },
          { img: "asset/A Secret Romance/ch1/8.jpg", sfx: "" },
          { img: "asset/A Secret Romance/ch1/9.jpg", sfx: "" },
          { img: "asset/A Secret Romance/ch1/10.jpg", sfx: "" },
          { img: "asset/A Secret Romance/ch1/11.jpg", sfx: "" },
          { img: "asset/A Secret Romance/ch1/12.jpg", sfx: "" },
          { img: "asset/A Secret Romance/ch1/13.jpg", sfx: "" },
          { img: "asset/A Secret Romance/ch1/14.jpg", sfx: "" },
          { img: "asset/A Secret Romance/ch1/15.jpg", sfx: "" },
          { img: "asset/A Secret Romance/ch1/16.jpg", sfx: "" },
          { img: "asset/A Secret Romance/ch1/17.jpg", sfx: "" },
          { img: "asset/A Secret Romance/ch1/18.jpg", sfx: "" },
          { img: "asset/A Secret Romance/ch1/19.jpg", sfx: "" },
          { img: "asset/A Secret Romance/ch1/20.jpg", sfx: "" },
          { img: "asset/A Secret Romance/ch1/21.jpg", sfx: "" },
          { img: "asset/A Secret Romance/ch1/22.jpg", sfx: "" }
        ]
      },
      "ch1.5": {
        title: "ตอนที่ 1.5",
        bgmTracks: [{ start: 1, end: 24, src: "asset/A Secret Romance/A Romace.wav", volume: 0.6 }],
        scenes: [
          { img: "asset/A Secret Romance/ch2/1.png", sfx: "" },
          { img: "asset/A Secret Romance/ch2/2.png", sfx: "" },
          { img: "asset/A Secret Romance/ch2/3.png", sfx: "" },
          { img: "asset/A Secret Romance/ch2/4.png", sfx: "" },
          { img: "asset/A Secret Romance/ch2/5.png", sfx: "" },
          { img: "asset/A Secret Romance/ch2/6.png", sfx: "" },
          { img: "asset/A Secret Romance/ch2/7.png", sfx: "" }
        ]
      },
      "ch2": {
        title: "ตอนที่ 2",
        bgmTracks: [{ start: 1, end: 24, src: "asset/A Secret Romance/A Romace.wav", volume: 0.6 }],
        scenes: [
          { img: "asset/A Secret Romance/ch3/1.png", sfx: "" },
          { img: "asset/A Secret Romance/ch3/2.png", sfx: "" },
          { img: "asset/A Secret Romance/ch3/3.png", sfx: "" },
          { img: "asset/A Secret Romance/ch3/4.png", sfx: "" },
          { img: "asset/A Secret Romance/ch3/5.png", sfx: "" },
          { img: "asset/A Secret Romance/ch3/6.png", sfx: "" },
          { img: "asset/A Secret Romance/ch3/7.png", sfx: "" },
          { img: "asset/A Secret Romance/ch3/8.png", sfx: "" },
          { img: "asset/A Secret Romance/ch3/9.png", sfx: "" },
          { img: "asset/A Secret Romance/ch3/10.png", sfx: "" },
          { img: "asset/A Secret Romance/ch3/11.png", sfx: "" },
          { img: "asset/A Secret Romance/ch3/12.png", sfx: "" },
          { img: "asset/A Secret Romance/ch3/13.png", sfx: "" },
          { img: "asset/A Secret Romance/ch3/14.png", sfx: "" },
          { img: "asset/A Secret Romance/ch3/15.png", sfx: "" },
          { img: "asset/A Secret Romance/ch3/16.png", sfx: "" },
          { img: "asset/A Secret Romance/ch3/17.png", sfx: "" },
          { img: "asset/A Secret Romance/ch3/18.png", sfx: "" },
          { img: "asset/A Secret Romance/ch3/19.png", sfx: "" },
          { img: "asset/A Secret Romance/ch3/20.png", sfx: "" },
          { img: "asset/A Secret Romance/ch3/21.png", sfx: "" },
          { img: "asset/A Secret Romance/ch3/22.png", sfx: "" },
        ]
      },
      "ch3": {
        title: "ตอนที่ 3",
        bgmTracks: [{ start: 1, end: 24, src: "asset/A Secret Romance/A Romace.wav", volume: 0.6 }],
        scenes: [
          { img: "asset/A Secret Romance/ch4/1.png", sfx: "" },
          { img: "asset/A Secret Romance/ch4/2.png", sfx: "" },
          { img: "asset/A Secret Romance/ch4/3.png", sfx: "" },
          { img: "asset/A Secret Romance/ch4/4.png", sfx: "" },
          { img: "asset/A Secret Romance/ch4/5.png", sfx: "" },
          { img: "asset/A Secret Romance/ch4/6.png", sfx: "" },
          { img: "asset/A Secret Romance/ch4/7.png", sfx: "" },
          { img: "asset/A Secret Romance/ch4/8.png", sfx: "" },
          { img: "asset/A Secret Romance/ch4/9.png", sfx: "" },
          { img: "asset/A Secret Romance/ch4/10.png", sfx: "" },
          { img: "asset/A Secret Romance/ch4/11.png", sfx: "" },
          { img: "asset/A Secret Romance/ch4/12.png", sfx: "" },
          { img: "asset/A Secret Romance/ch4/13.png", sfx: "" },
          { img: "asset/A Secret Romance/ch4/14.png", sfx: "" },
          { img: "asset/A Secret Romance/ch4/15.png", sfx: "" },
          { img: "asset/A Secret Romance/ch4/16.png", sfx: "" },
          { img: "asset/A Secret Romance/ch4/17.png", sfx: "" },
          { img: "asset/A Secret Romance/ch4/18.png", sfx: "" },
          { img: "asset/A Secret Romance/ch4/19.png", sfx: "" },
          { img: "asset/A Secret Romance/ch4/20.png", sfx: "" },
        ]
      },
      "ch4": {
        title: "ตอนที่ 4",
        bgmTracks: [{ start: 1, end: 24, src: "asset/A Secret Romance/A Romace.wav", volume: 0.6 }],
        scenes: [
          { img: "asset/A Secret Romance/ch5/1.png", sfx: "" },
          { img: "asset/A Secret Romance/ch5/2.png", sfx: "" },
          { img: "asset/A Secret Romance/ch5/3.png", sfx: "" },
          { img: "asset/A Secret Romance/ch5/4.png", sfx: "" },
          { img: "asset/A Secret Romance/ch5/5.png", sfx: "" },
          { img: "asset/A Secret Romance/ch5/6.png", sfx: "" },
          { img: "asset/A Secret Romance/ch5/7.png", sfx: "" },
          { img: "asset/A Secret Romance/ch5/8.png", sfx: "" },
          { img: "asset/A Secret Romance/ch5/9.png", sfx: "" },
          { img: "asset/A Secret Romance/ch5/10.png", sfx: "" },
          { img: "asset/A Secret Romance/ch5/11.png", sfx: "" },
          { img: "asset/A Secret Romance/ch5/12.png", sfx: "" },
          { img: "asset/A Secret Romance/ch5/13.png", sfx: "" },
          { img: "asset/A Secret Romance/ch5/14.png", sfx: "" },
          { img: "asset/A Secret Romance/ch5/15.png", sfx: "" },
          { img: "asset/A Secret Romance/ch5/16.png", sfx: "" },
          { img: "asset/A Secret Romance/ch5/17.png", sfx: "" },
          { img: "asset/A Secret Romance/ch5/18.png", sfx: "" },
          { img: "asset/A Secret Romance/ch5/19.png", sfx: "" },
          { img: "asset/A Secret Romance/ch5/20.png", sfx: "" },
          { img: "asset/A Secret Romance/ch5/21.png", sfx: "" },
        ]
      },
      "ch5": {
        title: "ตอนที่ 5",
        bgmTracks: [{ start: 1, end: 24, src: "asset/A Secret Romance/A Romace.wav", volume: 0.6 }],
        scenes: [
          { img: "asset/A Secret Romance/ch6/1.png", sfx: "" },
          { img: "asset/A Secret Romance/ch6/2.png", sfx: "" },
          { img: "asset/A Secret Romance/ch6/3.png", sfx: "" },
          { img: "asset/A Secret Romance/ch6/4.png", sfx: "" },
          { img: "asset/A Secret Romance/ch6/5.png", sfx: "" },
          { img: "asset/A Secret Romance/ch6/6.png", sfx: "" },
          { img: "asset/A Secret Romance/ch6/7.png", sfx: "" },
          { img: "asset/A Secret Romance/ch6/8.png", sfx: "" },
          { img: "asset/A Secret Romance/ch6/9.png", sfx: "" },
          { img: "asset/A Secret Romance/ch6/10.png", sfx: "" },
          { img: "asset/A Secret Romance/ch6/11.png", sfx: "" },
          { img: "asset/A Secret Romance/ch6/12.png", sfx: "" },
          { img: "asset/A Secret Romance/ch6/13.png", sfx: "" },
          { img: "asset/A Secret Romance/ch6/14.png", sfx: "" },
          { img: "asset/A Secret Romance/ch6/15.png", sfx: "" },
          { img: "asset/A Secret Romance/ch6/16.png", sfx: "" },
          { img: "asset/A Secret Romance/ch6/17.png", sfx: "" },
          { img: "asset/A Secret Romance/ch6/18.png", sfx: "" },
          { img: "asset/A Secret Romance/ch6/19.png", sfx: "" },
          { img: "asset/A Secret Romance/ch6/20.png", sfx: "" },
          { img: "asset/A Secret Romance/ch6/21.png", sfx: "" },
          { img: "asset/A Secret Romance/ch6/22.png", sfx: "" },
          { img: "asset/A Secret Romance/ch6/23.png", sfx: "" },
          { img: "asset/A Secret Romance/ch6/24.png", sfx: "" },
        ]
      }
    }
  }
};

// URL Parameters & Variables
const urlParams = new URLSearchParams(window.location.search);
const storyParam = urlParams.get('story') || 'Knightsoul_Vacation';
let chapterParam = urlParams.get('chapter');

const rawStory = mangaData[storyParam];
let currentStory = null;
let isScrollMode = false;

let currentPageIndex = 0;
let isMuted = false;
let currentBgmSrc = "";
let bgmAudio = null;
let currentSFXAudio = null;

// DOM Elements
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const pageIndicator = document.getElementById('page-indicator');
const muteBtn = document.getElementById('mute-btn');
const loadingScreen = document.getElementById('loading-screen') || document.getElementById('loading-overlay');
const loadingText = document.getElementById('loading-text');
const pageClickArea = document.getElementById('page-click-area');
const flipContainer = document.getElementById('flip-mode-container');
const scrollContainer = document.getElementById('scroll-mode-container');
const chapterSelect = document.getElementById('chapter-select');

// เริ่มต้นระบบ
function initReader() {
  if (!rawStory) return;

  isScrollMode = rawStory.readMode === 'scroll';

  if (rawStory.hasChapters) {
    if (chapterSelect) chapterSelect.style.display = 'inline-block';
    const keys = Object.keys(rawStory.chapters);
    if (!chapterParam || !rawStory.chapters[chapterParam]) {
      chapterParam = keys[0];
    }
    
    if (chapterSelect) {
      chapterSelect.innerHTML = keys.map(k => 
        `<option value="${k}" ${k === chapterParam ? 'selected' : ''}>${rawStory.chapters[k].title}</option>`
      ).join('');
    }
    
    currentStory = rawStory.chapters[chapterParam];
  } else {
    if (chapterSelect) chapterSelect.style.display = 'none';
    currentStory = rawStory;
  }

  if (isScrollMode) {
    if (flipContainer) flipContainer.classList.add('hidden');
    if (scrollContainer) scrollContainer.classList.remove('hidden');
    renderScrollMode();
  } else {
    if (scrollContainer) scrollContainer.classList.add('hidden');
    if (flipContainer) flipContainer.classList.remove('hidden');
    renderPage(currentPageIndex);
  }

  // เริ่มเช็กความพร้อมสื่อทั้งหมด
  startLoadingProcess();
}

function changeChapter(chKey) {
  window.location.href = `reader.html?story=${storyParam}&chapter=${chKey}`;
}

function createMediaElement(src, altText = '') {
  if (!src) return null;

  let element;

  if (src.endsWith('.webm') || src.endsWith('.mp4')) {
    element = document.createElement('video');
    element.src = src;
    element.autoplay = true;
    element.loop = true;
    element.muted = true;
    element.playsInline = true;
  } else {
    element = document.createElement('img');
    element.src = src;
    element.alt = altText;
    element.id = 'current-manga-img';
  }

  element.className = 'manga-media-element';

  // 🛡️ ป้องกันการคลิกขวาเพื่อกด Save / Open Image in new tab
  element.addEventListener('contextmenu', (e) => e.preventDefault());

  // 🛡️ ป้องกันการลากรูปภาพ (Drag & Drop) ไปวางที่อื่นเพื่อบันทึก
  element.addEventListener('dragstart', (e) => e.preventDefault());

  return element;
}

function renderScrollMode() {
  if (!scrollContainer) return;
  scrollContainer.innerHTML = '';

  currentStory.scenes.forEach((scene, index) => {
    const mediaSrc = scene.img || scene.video;
    const element = createMediaElement(mediaSrc, `หน้า ${index + 1}`);
    if (element) {
      scrollContainer.appendChild(element);
    }
  });

  if (currentStory.bgmTracks && currentStory.bgmTracks.length > 0) {
    updateBGMForPage(1);
  }
}

function renderPage(index) {
  if (!currentStory || !currentStory.scenes[index]) return;

  if (currentSFXAudio) {
    currentSFXAudio.pause();
    currentSFXAudio = null;
  }

  const pageNum = index + 1;
  const scene = currentStory.scenes[index];
  const mediaSrc = scene.img || scene.video;

  const wrapper = pageClickArea || flipContainer;
  if (wrapper) {
    wrapper.innerHTML = '';
    const element = createMediaElement(mediaSrc, `หน้า ${pageNum}`);
    if (element) wrapper.appendChild(element);
  }

  if (pageIndicator) {
    pageIndicator.innerText = `หน้า ${pageNum} / ${currentStory.scenes.length}`;
  }

  if (prevBtn) prevBtn.disabled = index === 0;
  if (nextBtn) nextBtn.disabled = index === currentStory.scenes.length - 1;

  updateBGMForPage(pageNum);

  if (scene.sfx) {
    playSFX(scene.sfx);
  }

  preloadNextPage(index);
}

function preloadNextPage(currentIndex) {
  const nextIndex = currentIndex + 1;
  if (currentStory && currentStory.scenes[nextIndex]) {
    const nextScene = currentStory.scenes[nextIndex];
    if (nextScene.img) {
      const imgPreload = new Image();
      imgPreload.src = nextScene.img;
    }
  }
}

function updateBGMForPage(pageNum) {
  if (!currentStory.bgmTracks) return;

  const track = currentStory.bgmTracks.find(t => pageNum >= t.start && pageNum <= t.end);

  if (track) {
    const bgmVolume = track.volume !== undefined ? track.volume : 0.5;

    if (currentBgmSrc !== track.src) {
      currentBgmSrc = track.src;
      if (bgmAudio) bgmAudio.pause();

      bgmAudio = new Audio(track.src);
      bgmAudio.loop = true;
      bgmAudio.volume = bgmVolume;

      if (!isMuted) {
        bgmAudio.play().catch(err => console.log("BGM Blocked:", err));
      }
    } else if (bgmAudio) {
      bgmAudio.volume = bgmVolume;
    }
  } else if (bgmAudio) {
    bgmAudio.pause();
    currentBgmSrc = "";
  }
}

function playSFX(sfxData) {
  if (isMuted || !sfxData) return;

  if (currentSFXAudio) {
    currentSFXAudio.pause();
    currentSFXAudio = null;
  }

  let src = "";
  let volume = 0.25;
  let loop = false;

  if (typeof sfxData === 'object') {
    src = sfxData.src || "";
    volume = sfxData.volume !== undefined ? sfxData.volume : 0.25;
    loop = sfxData.loop !== undefined ? sfxData.loop : false;
  } else if (typeof sfxData === 'string') {
    src = sfxData;
  }

  if (!src) return;

  currentSFXAudio = new Audio(src);
  currentSFXAudio.volume = volume;
  currentSFXAudio.loop = loop;
  currentSFXAudio.play().catch(err => console.log("SFX Blocked:", err));
}

// ==========================================
// ⏳ ระบบตรวจจับการโหลดมีเดีย 100%
// ==========================================
function startLoadingProcess() {
  const mediaElements = Array.from(document.querySelectorAll('.manga-media-element'));

  if (mediaElements.length === 0) {
    hideLoadingScreen();
    return;
  }

  let loadedCount = 0;
  const totalCount = mediaElements.length;

  const checkProgress = () => {
    loadedCount++;
    if (loadingText) {
      const percent = Math.round((loadedCount / totalCount) * 100);
      loadingText.textContent = `กำลังโหลดเนื้อหา... (${percent}%)`;
    }

    if (loadedCount >= totalCount) {
      hideLoadingScreen();
    }
  };

  mediaElements.forEach((el) => {
    if (el.tagName === 'IMG') {
      if (el.complete) {
        checkProgress();
      } else {
        el.addEventListener('load', checkProgress, { once: true });
        el.addEventListener('error', checkProgress, { once: true });
      }
    } else if (el.tagName === 'VIDEO') {
      if (el.readyState >= 3) {
        checkProgress();
      } else {
        el.addEventListener('canplaythrough', checkProgress, { once: true });
        el.addEventListener('error', checkProgress, { once: true });
      }
    }
  });
}

function hideLoadingScreen() {
  if (loadingScreen) {
    loadingScreen.classList.add('fade-out');
  }
}

// Event Listeners
if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    if (currentPageIndex > 0) {
      currentPageIndex--;
      renderPage(currentPageIndex);
    }
  });
}

if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    if (currentPageIndex < currentStory.scenes.length - 1) {
      currentPageIndex++;
      renderPage(currentPageIndex);
    }
  });
}

if (pageClickArea) {
  pageClickArea.addEventListener('click', () => {
    if (!isScrollMode && currentPageIndex < currentStory.scenes.length - 1) {
      currentPageIndex++;
      renderPage(currentPageIndex);
    }
  });
}

document.addEventListener('keydown', (e) => {
  if (isScrollMode) return;
  if (e.key === "ArrowRight" || e.key === " ") {
    if (currentPageIndex < currentStory.scenes.length - 1) {
      currentPageIndex++;
      renderPage(currentPageIndex);
    }
  } else if (e.key === "ArrowLeft") {
    if (currentPageIndex > 0) {
      currentPageIndex--;
      renderPage(currentPageIndex);
    }
  }
});

if (muteBtn) {
  muteBtn.addEventListener('click', () => {
    isMuted = !isMuted;
    if (isMuted) {
      muteBtn.innerText = "🔇 ปิดเสียงอยู่";
      if (bgmAudio) bgmAudio.pause();
      if (currentSFXAudio) currentSFXAudio.pause();
    } else {
      muteBtn.innerText = "🔊 เปิดเสียงอยู่";
      if (bgmAudio) bgmAudio.play().catch(err => console.log(err));
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  initReader();
});
// ป้องกันการคลิกขวาบนคอนเทนเนอร์โหมดเลื่อนทั้งหมด
if (scrollContainer) {
  scrollContainer.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });
}