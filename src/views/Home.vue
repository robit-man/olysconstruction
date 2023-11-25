<template>
   <div style="height:100vh;background:#222333;width:100vw;position:fixed;">
   <div class="header" style="display:flex;flex-flow:row;justify-content:space-between;position:relative;top:0px;width:100vw;min-height:4rem;border-bottom: 1px solid  #0000004c;">
<div class="icon" style="color:#000a;font-size:1.5rem;letter-spacing:-6px;height:4rem;width:4rem;display:flex;flex-flow:column;justify-content:center;text-align: center;border-right: 1px solid  #0000004c;">OTC</div>
<div class="wallet"></div>
</div>
   </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            mouseX: 0,
            mouseY: 0,
            centerX: window.innerWidth / 2,
            centerY: window.innerHeight / 2,
            text: '0x8f602eE5b1F8DE67120c427717cbe2770F3cF320',
            textToCopy: '0x8f602eE5b1F8DE67120c427717cbe2770F3cF320',
        };
    },
    mounted() {

    },
    methods: {
    },
    beforeUnmount() {
    
    },
}
</script>

<style lang="scss">
 @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;500;700;900&display=swap');

*{    font-family: 'Raleway', sans-serif;}


 @media (max-width: 900px) {

}

/* Add styles for your video player here */
</style>
