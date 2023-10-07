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
    let maxCharCount = 300;
    let fallingCharArr = [];
    let fontSize = 20;
    let maxColumns = cw / fontSize;
    let frames = 0;
    let mouseX = 0;
    let mouseY = 0;
  
    class FallingChar {
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }
  
      draw(ctx) {
        this.value = charArr[Math.floor(Math.random() * charArr.length)].toUpperCase();
        this.speed = (Math.random() * fontSize * 3) / 4 + (fontSize * 3) / 4;
  
        const distance = Math.hypot(this.x - mouseX, this.y - mouseY);
  
        ctx.fillStyle = "rgba(255,200,0)";
        ctx.font = fontSize + "px 'Handjet', sans-serif";
  
        if (distance < 50) {
          ctx.shadowBlur = 25;
          ctx.shadowColor = "rgba(255,200,0,1)";
        } else {
          ctx.shadowBlur = 15;
          ctx.shadowColor = "rgba(255,200,0,0.8)";
        }
  
        ctx.fillText(this.value, this.x, this.y);
        ctx.shadowBlur = 0;
  
        this.y += this.speed;
  
        if (this.y > ch) {
          this.y = (Math.random() * ch) / 2 - 50;
          this.x = Math.floor(Math.random() * maxColumns) * fontSize;
        }
      }
    }
  
    const update = () => {
      if (fallingCharArr.length < maxCharCount) {
        fallingCharArr.push(new FallingChar(
          Math.floor(Math.random() * maxColumns) * fontSize,
          (Math.random() * ch) / 2 - 50
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
      maxColumns = cw / fontSize;
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
  