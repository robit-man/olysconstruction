<template>
    <CanvasAnimation />
    <div class="front" style="">
      <h1 v-if="finished" style="color:rgba(255,200,0);">{{ finalText }}</h1>
      <h1 v-if="!finished" :style="{color: 'rgba(255,200,0)', position: 'relative', margin: 0}" v-html="html"></h1>
<div class="ring">
   <div class="swap-cont"> <div class="swap"><img src="swap.svg" style="width:64px;height:64px;" alt=""></div></div>
    <div class="doge"><img style="width:256px;position:absolute;left:48px;opacity:0.5;" src="doge.png" alt=""></div>
      <div class="eth"><div class="pyramid">
    <div class="square">
      <div class="triangle"></div>
      <div class="triangle"></div>
      <div class="triangle"></div>
      <div class="triangle"></div>
    </div>
  </div>
  
  <div class="pyramid inverse">
    <div class="square">
      <div class="triangle"></div>
      <div class="triangle"></div>
      <div class="triangle"></div>
      <div class="triangle"></div>
    </div></div>
  </div></div>

  <div class="copy"><p>Stealth launched as a memecoin and with no promises or expectations, we decided to build a new protocol which solves the multichain bridge problem for non-EVM compatible systems. Our experienced team has created invaluable depth to human capital both tangible and intangible. Try our bridge today!</p></div>

  <div class="row" style="display:flex;flex-flow:wrap;gap:1rem;justify-content: space-between;margin-top:2rem;">

    <a href="https://etherscan.io/token/0x33caf58d14d7cd284cc2d7f2bc878d2d63c8956a" targat="_blank"><img style="height:48px;margin:8px;filter:hue-rotate(210deg)brightness(2);" src="ether-scan.png" alt=""><p>ETHERSCAN</p></a>
    <a href="https://www.dextools.io/app/en/ether/pair-explorer/0xf60028379c813a559711bd7bd0b238261b9a648f" targat="_blank"><img style="height:64px;width:64px;filter:hue-rotate(185deg)brightness(4);" src="dextools_logo.png" alt=""><p>DEXTOOLS</p></a>
    <a href="https://t.me/OPOEthereum" targat="_blank"><img style="height:48px;width:48px;margin:8px;filter:invert(1)hue-rotate(185deg)brightness(4);" src="telegram.svg" alt=""><p>TELEGRAM</p></a>
    <a href="https://twitter.com/OPOEthereum" targat="_blank"><img style="height:48px;width:48px;margin:8px;filter:invert(1)hue-rotate(185deg)brightness(4);" src="x.png" alt=""><p>X CORP</p></a>
  </div>
  <p  @click="copyToClipboard('0x33CAF58D14d7cd284cc2D7F2bc878D2D63C8956A')" style="cursor:pointer;max-width:calc(100vw - 2rem);text-align: center;margin:auto;margin-top:2rem;border:1px solid rgba(255, 200,0,1);width:max-content;padding:0.2rem 0.5rem;border-radius:4px;">0x33CAF58D14d7cd284cc2D7F2bc878D2D63C8956A</p>
  <span v-if="copied"><p style="text-align: center;margin:auto;">Copied!</p></span> </div>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from 'vue';
  import CanvasAnimation from '@/components/matrix.vue'; // Update with your actual path
  
  export default {
    components: {
      CanvasAnimation,
    },
    setup() {
const copied = ref(false); // A ref to manage the state of the copy operation

const copyToClipboard = (text) => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      copied.value = true;

      setTimeout(() => {
        copied.value = false;
      }, 2000); // Reset the copied state after 2 seconds
    }).catch(err => console.error('Could not copy text: ', err));
  } else {
    // Fallback for older browsers
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand('copy');
      copied.value = successful;
      
      setTimeout(() => {
        copied.value = false;
      }, 2000); // Reset the copied state after 2 seconds
    } catch (err) {
      console.error('Unable to copy', err);
    }

    document.body.removeChild(textArea);
  }
};
      const finalText = 'ONLY POSSIBLE ON ETHEREUM';
      const html = ref('');
      const finished = ref(false);
  
      const randomChar = () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        return chars[Math.floor(Math.random() * chars.length)];
      };
  
      const type = (index) => {
        if (index === finalText.length) {
          finished.value = true;
          return;
        }
  
        let text = finalText.substr(0, index);
        text = text.replace(/./g, '<span style="color: rgba(255,200,0);">$&</span>');
        for (let i = 0; i < 5; i++) {
          setTimeout(() => {
            html.value = text + '<span style="color: rgba(255,200,0);">' + randomChar() + '</span>' + finalText.substr(index + 1).replace(/./g, '<span style="color: transparent;">$&</span>');
          }, i * 80);
        }
  
        setTimeout(() => {
          html.value = finalText.substr(0, index + 1).replace(/./g, '<span style="color: rgba(255,200,0);">$&</span>') +
            finalText.substr(index + 1).replace(/./g, '<span style="color: transparent;">$&</span>');
          type(index + 1);
        }, 500);
      };
      onMounted(() => {
  type(0);
  
  const ethElement = document.querySelector('.eth');
  
  const updateRotation = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    const deltaX = x - centerX;
    const deltaY = y - centerY;
    
    const rotationY = deltaX / centerX * 20; // Adjust the multiplier value to control the rotation intensity
    const rotationX = -(deltaY / centerY * 20); // Adjust the multiplier value to control the rotation intensity
    
    ethElement.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
  };
  
  window.addEventListener('mousemove', updateRotation);
  
  onUnmounted(() => {
    window.removeEventListener('mousemove', updateRotation);
  });
});
  
      return { html, finalText, finished,  copied, 
  copyToClipboard };
    },
  };
  </script>
  
  <style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Handjet:wght@300&display=swap');
  
  * {
    font-family: 'Handjet', sans-serif;
  }
  p{    font-family: 'Handjet', sans-serif;
color:rgba(255,200,0,1);}
  a{margin:auto;display:flex;flex-flow:row;p{margin:auto;font-size:32px;}}
$size: 5rem;
$rsize: $size * .75;
$angle: 68deg;
$r: 50deg;
$color: #78540092;
$bg: darken($color, 5);

body {
  height: 100vh;
  display: grid;
  background: $bg;
  > * {
    margin: auto;
  }
}
.swap-cont{position:absolute;right:3rem;top:2rem;}
.swap{animation:spin 5s ease infinite;display:flex;flex-flow:row;justify-content:center;}

h1 {text-align:center;
  font-weight: 100;
  color: white;
}

.ring{overflow:hidden;margin:auto;margin-bottom:2rem;margin-top:2rem;display:flex;flex-flow:column;justify-content:center;width:256px;height:256px;backdrop-filter:blur(5px)brightness(1.5);box-shadow:inset 0px 0px 10px  rgba(255,200,0,1), 0px 0px 10px  rgba(255,200,0,1); border:5px solid rgba(255,200,0,1);border-radius:1000px;}

@keyframes floaty {
    0%{top:20px;}
    20%{top:20px;}
    50%{top:0px;}
    70%{top:20px;}
    100%{top:20px;}
    
}
.doge{animation:floaty 5s ease infinite;}
@keyframes rotate {
  from {
    transform: rotateX($r) rotateZ(45deg) translateZ(-.5rem);
  }
  50% {
    transform: rotateX($r) rotateZ(225deg) translateZ(.5rem);
  }
  100% {
    transform: rotateX($r) rotateZ(405deg) translateZ(-.5rem);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);opacity:0;
  }
  10% {
    transform: rotate(0deg);opacity:0.2;
  }
  20% {    
    transform: rotate(-20deg)scale(1.1);opacity:0.5;

  }
  90% {    
    transform: rotate(380deg);opacity:0;

  }
  100% {
    transform: rotate(360deg);opacity:0;
  }
}
.front{
    margin:auto;width:512px;height:512px;position:relative;left:calc(50vw - 50%);top:5vh;max-width:calc(100vw - 2rem);
}
.copy{text-align:center;}

.eth {position:relative;
    margin-top:1rem;margin-left:2rem;
  transform-style: preserve-3d;
  width: $rsize; height: $rsize;
  transform-origin: $rsize / 2 $rsize / 2;
  transform: rotateX($r) rotateZ(45deg);
  animation: rotate 4s linear infinite;
  &:hover {
   // animation-play-state: paused;
  }
}

.pyramid {
  position: absolute;
  perspective: 500px;
  transform-style: preserve-3d;
  &.inverse {
    transform: translateZ(-$size / 7) rotateY(180deg);
  }
}

.square {
  width: $rsize;
  height: $rsize;
  background: lighten($color, 20);;
  transform-style: preserve-3d;
}

.triangle {
  position: absolute;
  width: $size;
  height: $size;
  transition:all 0.2s ease;
  &:hover{opacity:0.2;}
  &:nth-child(1) {
    width: $rsize;
    top: -33%;
    background: lighten($color, 30);
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    transform-origin: 50% 100%;
    transform: rotateX(-$angle);
  }
  &:nth-child(2) {
    width: $rsize;
    background: lighten($color, 30);
    clip-path: polygon(50% 100%, 0 0, 100% 0);
    transform-origin: 50% 0%;
    transform: rotateX($angle);
  }
  &:nth-child(3) {
    height: $rsize;
    left: -33%;
    background: lighten($color, 40);
    transform-origin: 100% 50%;
    clip-path: polygon(100% 100%, 0 50%, 100% 0);
    transform: rotateY($angle);
  }
  &:nth-child(4) {
    height: $rsize;
    background: lighten($color, 40);
    transform-origin: 0% 50%;
    clip-path: polygon(0 100%, 100% 50%, 0 0);
    transform: rotateY(-$angle);
  }
}

// Other pens links

.other-pens {
  position: absolute;
  bottom: 1rem;
  strong {
    font-family: Helvetica, Arial, sans-serif;
    font-weight: bold;
    margin: auto;
    display: block;
    text-align: center;
  }
  li, a, strong {
    color: rgba(255,255,255,.8);
  }
  ul {
    list-style: none;
    padding: 0;
    margin-left: .8rem;
  }
  a {
    display: block;
    padding: .4rem;
  }
}
  </style>
  