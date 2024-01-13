<template>
    <div class="bg">
        <div class="name">
            <h2>SteakFI</h2>
        </div>
        <div class="row">
            <div class="steak">
                <img src="/SteakFiLogoALPHA.png" alt="">
            </div>
            <div class="text">
                <h1>You better get <b>cookin'</b></h1>
                <h3>Earn rewards by holding your Steak longer <br>How well? You decide.</h3>
            </div>
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
            intro: true,
            deal: false,
            docs: false,
            centerX: window.innerWidth / 2,
            centerY: window.innerHeight / 2,
            text: '',
            textToCopy: '',
        };
    },
    mounted() {

    },
    methods: {},
    beforeUnmount() {

    },
}
</script>

<style lang="scss">
@font-face {
    font-family: 'eurostile-bold';
    src: url('/EurostileLTStd-BoldEx2.otf') format('opentype');
}

@font-face {
    font-family: 'eurostile';
    src: url('/EurostileLTStd-Ex2.otf') format('opentype');
}

b {
    font-family: 'eurostile-bold', sans-serif;
}

h1,
h2,
h3 {
    font-family: 'eurostile', sans-serif;
    color: white;
}

h1 {}

.bg {
    display: flex;
    flex-flow: column;
    justify-content: center;
    position: fixed;
    height: 100vh;
    background-size: cover;
    width: 100vw;
    background-image: url(/Background-1.png);
}

.name {
    height: 4rem;
    top: 0px;
    position: fixed;
    left: 0px;
    padding: 1rem 2rem;
    h2 {
        font-size: 2rem;
    }
}

.row {
    display: flex;
    flex-flow: wrap;
    justify-content: center;
}

@keyframes float {
    0% {
        transform: translatey(0px);
    }
    50% {
        transform: translatey(15px);
    }
    100% {
        transform: translatey(0px);
    }
}

.steak {
    width: 300px;
    max-width: 90vw;
    margin: auto 5vw;
    img {
        animation: float 5s ease infinite;
        width: 100%;
    }
}

.text {
    margin: auto 2rem;
}

@media (max-width: 900px) {}

/* Add styles for your video player here */
</style>
