<template>
    <canvas ref="canvas"></canvas>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const canvas = ref(null);
  
  onMounted(() => {
    if (!canvas.value) return;
  
    const ctx = canvas.value.getContext('2d');
  
    let cw = window.innerWidth;
    let ch = window.innerHeight;
    canvas.value.width = cw;
    canvas.value.height = ch;
  
    const charArr = "abcdefghijklmnopqrstuvwxyz123456789АВГДЄЅЗИѲІКЛМНПЧРСТѴФХЦ".split('');
    let maxCharCount = 200;
    let fallingCharArr = [];
    let maxFontSize = 20;
    let fontSize = maxFontSize;
    let maxColumns = cw / fontSize;
    let frames = 0;
    let mouseX = 0;
    let mouseY = 0;
  
    class FallingChar {
      constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.fontSize = maxFontSize - this.z * 10; 
      }
  
      draw(ctx) {
        this.value = charArr[Math.floor(Math.random() * charArr.length)].toUpperCase();
        this.speed = (Math.random() * this.fontSize * 3) / 4 + (this.fontSize * 3) / 4;
  
        ctx.fillStyle = "rgba(255,200,0)";
        ctx.font = this.fontSize + "px 'Handjet', sans-serif";
  
        let tiltX = this.x + (mouseX - cw / 2) * this.z / 50; 
        let tiltY = this.y + (mouseY - ch / 2) * this.z / 50; 
  
        ctx.fillText(this.value, tiltX, tiltY);
  
        this.y += this.speed;
  
        if (this.y > ch) {
          this.y = 0; 
          this.x = Math.floor(Math.random() * maxColumns) * this.fontSize;
        }
      }
    }
  
    const update = () => {
      if (fallingCharArr.length < maxCharCount) {
        fallingCharArr.push(new FallingChar(
          Math.floor(Math.random() * maxColumns) * fontSize,
          0,
          Math.random() * 5 
        ));
      }
  
      ctx.fillStyle = "rgba(0,0,0,0.05)";
      ctx.fillRect(0, 0, cw, ch);
  
      if (frames % 2 === 0) {
        fallingCharArr.forEach(char => char.draw(ctx));
      }
  
      frames++;
      requestAnimationFrame(update);
    };
  
    const resizeListener = () => {
      cw = window.innerWidth;
      ch = window.innerHeight;
      canvas.value.width = cw;
      canvas.value.height = ch;
      maxColumns = cw / maxFontSize;
    };
  
    const mouseMoveListener = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };
  
    window.addEventListener('resize', resizeListener, true);
    canvas.value.addEventListener('mousemove', mouseMoveListener);
  
    onUnmounted(() => {
      window.removeEventListener('resize', resizeListener, true);
      canvas.value.removeEventListener('mousemove', mouseMoveListener);
    });
  
    update();
  });
  
  </script>
  
  <style scoped>
  canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  </style>
  