<template>
    <div style="display:flex;flex-flow:wrap;perspective:1500px;justify-content:center;height:100vh;width:100vw;">
        <div class="video-wrapper" style="perspective:10000px;border:2px solid #001a3e;user-select:none;pointer-events:none;margin:auto 1rem ;overflow:hidden;height:400px;border-radius:10px;z-index:2;">
            <img class="video-wrapper-child" style="transform-origin:30% 50%;  opacity: 0.5;" src="sakuradiner.gif" alt="">
            <div class="roadmap" style="color:white;font-size:2rem;top:15%;position:absolute;width:100%;text-align:center;">
                <p>ROADMAP COMING SOON</p>
            </div>
            <div class="text-box" style="  ">
                <p style="text-shadow:1px 2px 0px pink;">STARRY NIGHT DAO</p>
                <p style="font-size:0.75rem;opacity:0.25;">STARRY CONTRACT</p>
                <p style="text-align:center;color:pink;font-size:0.75rem;opacity:0.5;text-shadow:1px 2px 0px #001a3e;">0x8f602ee5b1f8de67120c427717cbe2770f3cf320</p>
            </div>
        </div>
        <div class="video-wrapper2" style="perspective:1000px;position:absolute;  top: calc(50vh - 200px); margin-left:-640px;filter:blur(50px)brightness(1.5);user-select:none;pointer-events:none;margin:auto;overflow:hidden;height:400px;border-radius:10px;">
            <img class="video-wrapper-child2" src="sakuradiner.gif" alt="">
        </div>
    
        <div class="row">
            <a class="link" href="https://T.me/StarryERC20Channel">
                <div>TELEGRAM</div>
            </a>
            <a class="link link2" href="mailto:StarryNightDAO@protonmail.com">
                <div>
                    EMAIL</div>
            </a>
            <a class="link contract" href="https://etherscan.io/address/0x8f602ee5b1f8de67120c427717cbe2770f3cf320">
                <div>
                    ETHERSCAN</div>
            </a>
        </div>
        <canvas style="width:100vw;height:100vh;position:fixed;" ref="sakuraCanvas"></canvas>
    </div>
</template>

<script>
export default {
    name: 'AutoPlayVideo',
    data() {
        return {
            mouseX: 0,
            mouseY: 0,
            centerX: window.innerWidth / 2,
            centerY: window.innerHeight / 2,
        };
    },
    mounted() {

        const requestAnimFrame = (function() {
            return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function(callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
        })();

        function random(n) {
            return Math.floor(Math.random() * n) + 1;
        }

        function Canvas(elm) {
            this.elm = elm;
            this.canvasCtx = this.elm.getContext('2d');
            this.width = this.elm.width;
            this.height = this.elm.height;
            this.children = [];

            this.init();
        }

        Canvas.prototype = {
            resize: function(booleam) {
                this.width = this.elm.width = booleam ? this.elm.parentNode.clientWidth * 2 : window.innerWidth * 2;
                this.height = this.elm.height = booleam ? this.elm.parentNode.clientHeight * 2 : window.innerHeight * 2;
            },
            clear: function() {
                this.canvasCtx.clearRect(0, 0, this.width, this.height);
            },
            addChild: function(child) {
                this.children.push(child);
            },
            removeChild: function(num) {
                this.children.splice(num, 1);
            },
            rendering: function() {
                this.clear();

                var limit = this.children.length;
                for (var i = limit - 1; i >= 0; i--) {
                    var child = this.children[i];
                    if (child.draw(this.canvasCtx)) {
                        this.removeChild(i);
                    }
                }
            },
            createSakura: function(num, x1, y1, x2, y2) {
                for (var i = 0; i < num; i++) {
                    var x_pos = Math.floor(Math.random() * (x2 - x1)) + x1;
                    var y_pos = Math.floor(Math.random() * (y2 - y1)) + y1;
                    this.addChild(new Sakura(
                        this,
                        x_pos,
                        y_pos,
                        Math.random() + 0.5, { x: random(360), y: random(360), z: random(360) }, { x: random(10), y: random(10), z: random(10) },
                        random(5)
                    ));
                }
            },
            animate: function() {
                var _this = this;

                if (Math.random() > 0.15 && this.children.length < 30) {
                    this.createSakura(1, 1, 1, this.width, 0);
                }

                this.rendering();

                requestAnimFrame(function() {
                    _this.animate();
                });
            },
            init: function() {
                this.resize(true);
                this.animate();
            }
        };

        function Sakura(parent, x, y, scale, direction, rotate, wind) {
            this.parent = parent;
            this.x_pos = x;
            this.y_pos = y;
            this.scale = scale;
            this.direction = direction;
            this.rotate = rotate;
            this.wind = wind;
            this.gr = 5;
            this.phase = 0;
        }

        Sakura.prototype = {
            draw: function(ctx) {
                ctx.save();
                ctx.beginPath();
                ctx.translate(this.x_pos, this.y_pos);

                ctx.rotate(this.direction.y / 100 * Math.PI);
                ctx.scale(this.scale, this.scale);

                var grad = ctx.createRadialGradient(0, 0, 0, 0, 0, 10);
                grad.addColorStop(0, '#fbe0ef');
                grad.addColorStop(0.1, '#f8c1d5');
                grad.addColorStop(1, '#f3d3e2');
                ctx.fillStyle = grad;

                var x_rad = Math.cos(this.direction.x * Math.PI / 100);
                var z_rad = Math.cos(this.direction.z * Math.PI / 100);
                ctx.moveTo(-6 * z_rad, -10 * x_rad);
                ctx.bezierCurveTo(-10 * z_rad, 0 * x_rad, -5 * z_rad, 10 * x_rad, 0 * z_rad, 10 * x_rad);
                ctx.bezierCurveTo(5 * z_rad, 10 * x_rad, 10 * z_rad, 0 * x_rad, 6 * z_rad, -10 * x_rad);
                ctx.bezierCurveTo(0 * z_rad, -10 * x_rad, 0 * z_rad, -7 * x_rad, 0 * z_rad, -5 * x_rad);
                ctx.bezierCurveTo(0 * z_rad, -7 * x_rad, 0 * z_rad, -10 * x_rad, -6 * z_rad, -10 * x_rad);
                ctx.fill();
                ctx.restore();

                return this.moveSakura();
            },
            moveSakura: function() {
                if (this.phase === 0) {
                    var ground = 1 + (this.scale / 10);
                    if (this.y_pos > this.parent.height * ground) {
                        this.gr = 0;
                        this.wind = 0;
                        this.rotate.x = 0;
                        this.rotate.y = 0;
                        this.rotate.z = 0;
                        this.phase = 1;
                        this.parent.fallenSakura++;
                    }
                } else if (this.phase === 2) {
                    if (this.gr > -3) this.gr += this.gr / 10;
                }

                this.y_pos += (this.gr * this.scale) / 2;
                this.x_pos += this.wind / 2;
                this.direction.x += this.rotate.x / 2;
                this.direction.y += this.rotate.y / 2;
                this.direction.z += this.rotate.z / 2;

                if (this.x_pos > this.parent.width) return true;
                return this.y_pos > this.parent.height ? true : false;
            }
        };

        // Initialize the canvas

        const canvasElm = this.$refs.sakuraCanvas;
        // eslint-disable-next-line no-unused-vars
        const sakuraCanvas = new Canvas(canvasElm);
        window.addEventListener('mousemove', this.handleMouseMove);
    },
    methods: {
        // Your existing methods...

        handleMouseMove(event) {
            this.mouseX = event.clientX;
            this.mouseY = event.clientY;
            this.applyRotation();
        },
        applyRotation() {
            const dx = (this.mouseX - this.centerX) / this.centerX;
            const dy = (this.mouseY - this.centerY) / this.centerY;
            const rotationX = dy * 20; // Max rotation around X-axis
            const rotationY = dx * 20; // Max rotation around Y-axis

            // Apply the rotation to the first video-wrapper
            const videoWrapperChild = this.$el.querySelector('.video-wrapper-child');
            if (videoWrapperChild) {
                videoWrapperChild.style.transform = `scale(1.5)  translatey(${rotationX / 4}%)  translatex(${rotationY / 4}%) rotateX(${rotationX / 4}deg) rotateY(${rotationY / 4}deg)`;
            }
            const videoWrapper = this.$el.querySelector('.video-wrapper');
            if (videoWrapper) {
                videoWrapper.style.transform = `scale(1) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
            }
            // Apply the rotation to the first video-wrapper
            const videoWrapperChild2 = this.$el.querySelector('.video-wrapper-child2');
            if (videoWrapperChild2) {
                videoWrapperChild2.style.transform = `scale(1.5) translatey(-5%) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
            }
            const videoWrapper2 = this.$el.querySelector('.video-wrapper2');
            if (videoWrapper2) {
                videoWrapper2.style.transform = `scale(1) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
            }
        }
    },
    beforeUnmount() {
        // Remove event listener when component is destroyed
        window.removeEventListener('mousemove', this.handleMouseMove);
    },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
.link2 {}

.contract {}

.row {
    position: absolute;
    z-index: 5;
    text-align: center;
    bottom: calc(50vh - 280px);
    display: flex;
    flex-flow: row;
    margin: auto;
    gap: 1rem;
    a {
        transition: all 0.5s ease;
        padding: 0.5rem 1rem;
        display: flex;
        flex-flow: column;
        text-align: center;
        border-radius: 8px;
        backdrop-filter: blur(10px)brightness(1.5);
        background: rgba(255, 192, 203, 0.8);
        box-shadow: 0px 2px 50px #00000066;
        border: 2px solid #001a3e;
        &:hover {
            background: #001a3e;
            color: white !important;
            border: 2px solid #001a3e;
        }
    }
}

p {
    opacity: 0.9;
    font-family: 'Quicksand', sans-serif;
}

.text-box {
    position: absolute;
    top: calc( 50% - 4rem);
    padding: 2rem;
    border-radius: 2rem;
    backdrop-filter: blur(10px);
    text-align: center;
    width: 70%;
    left: 15%;
    border: 2px solid #001a3e;
    font-size: 3rem !important;
    p {
        color: #001a3e;
        font-weight: 800;
        font-size: 3rem;
    }
}

.link {
    height: auto;
    font-size: 1.2rem;
    color: #001a3e;
    font-family: 'Quicksand', sans-serif;
    font-weight: 800;
}

body {
    background: rgb(62, 46, 94);
    &:after {
        content: '';
        background-image: url(/parallax3.png);
        width: 100vw;
        height: 100vh;
        left: 0px;
        position: absolute;
        background-repeat: no-repeat;
        background-position: bottom;
        filter: hue-rotate(180deg);
        background-size: contain;
        opacity: 0.25;
        z-index:-1;
    }
}
@media (max-width: 900px) {


    .row {
    position: absolute;
    z-index: 5;
    text-align: center;
    bottom: calc(50vh - 280px);
    display: flex;
    flex-flow: row;
    margin: auto;
    gap: 0.5rem;
    a {
        transition: all 0.5s ease;
        padding: 0.5rem 1rem;
        display: flex;
        flex-flow: column;
        text-align: center;
        border-radius: 8px;
        backdrop-filter: blur(10px)brightness(1.5);
        background: rgba(255, 192, 203, 0.8);
        box-shadow: 0px 2px 50px #00000066;
        border: 2px solid #001a3e;
        &:hover {
            background: #001a3e;
            color: white !important;
            border: 2px solid #001a3e;
        }
    }
}
    .text-box {
    position: absolute;
    top: calc( 50% - 4rem);
    padding: 2rem;
    border-radius: 2rem;
    backdrop-filter: blur(10px);
    text-align: center;
    width: 70%;
    left: 15%;
    border: 2px solid #001a3e;
    font-size: 2rem !important;
    p {
        color: #001a3e;
        font-weight: 800;
        font-size: 2rem;
        &:nth-child(3){line-height:1;font-size:0.5rem!important;}
        &:nth-child(2){line-height:2;font-size:0.5rem!important;}
    }
}

}
/* Add styles for your video player here */
</style>
