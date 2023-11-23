<template>
    <div class="header" style="z-index:10;position:fixed;top:0px;left:0px;width:100vw;display:flex;flex-flow:row;justify-content:center;height:4rem;">
        <div class="header-content" style="margin: auto;height:100%;width:1400px;max-width:calc(100vw - 4rem);border-bottom-right-radius:2rem;backdrop-filter:blur(10px)brightness(0.5);border-bottom-left-radius:2rem;border:3px solid lightpink;border-top:unset;display:flex;flex-flow:row;justify-content:space-between;">
    
            <div class="header-icon" style="height:100%;width:4rem;margin-left:1rem;display:flex;flex-flow:row;justify-content: center;"><img style="height:2rem;margin:1rem;margin-top:0.5rem;" src="starfall.svg" alt=""></div>
            <p class="contractaddy" style="margin:auto;opacity:0.5;font-weight:bold;cursor:pointer;" @click="copyTextToClipboard('0x1b117c931af91a298e8b91977500becc431281e7')">0x1b117c931af91a298e8b91977500becc431281e7</p>
            <div class="header-menu" style="display:flex;flex-flow:row;gap:1rem;margin-top:auto;margin-bottom:auto;margin-right:2rem;">
                <a style="line-height:1;" class="link" target="_blank" href="https://twitter.com/StarryNightDAO">
                                                                                                                                                   <img style="margin:auto;height:1.5rem;" src="logo.svg" alt="">
                                                                                                                                                </a>
                <a class="link" target="_blank" href="https://T.me/StarryERC20Channel">
                                                                                                                                                    <img style="margin:auto;height:1.5rem;" src="telegram.svg" alt="">
                                                                                                                                                    </a>
    
            </div>
        </div>
    </div>
    <div class="page-scroller" style="z-index:5;display:block;  overflow-x: hidden;height:100vh;width:100vw;position:fixed;overflow-y:auto;">
    
        <div class="hero" style="display:flex;flex-flow:column;height:100vh;width:100vw;">
            <div class="hero-center" style="width:1400px;max-width:calc(100vw - 4rem);text-align:center; ">
    
                <a style="margin:auto;  width:100%;display: flex;
                                          flex-flow: row;
                                          justify-content: center;" href="https://app.uniswap.org/swap?outputCurrency=0x1b117c931af91a298e8b91977500becc431281e7" target="_blank">
                    <div class="ticker" style="padding:0.5rem;border-radius:1rem;background:lightpink;display:flex;flex-flow:row;width:fit-content;margin:auto;margin-bottom:1rem;">
                        <div class="ticker-black" style="background:black;border-radius:0.5rem;padding-left:1rem;padding-right:1rem;width:auto;height;4rem;">
                            <p style="font-size:1.5rem;padding-top:0.5rem;padding-bottom:0.5rem;font-weight:800;">$STARRY</p>
                        </div>
                        <h2 style="margin:auto;color:black;font-weight:600;margin-left:2rem;margin-right:0.5rem;font-size:1.5rem;gap:1rem;display:flex;flex-flow:row;">SWAP <img style="margin:auto;height:2rem;" src="swap.svg" alt=""></h2>
                    </div>
                </a>
                <h1 style="font-size:6vw;font-weight:800;margin-bottom:2rem;">STARRY NIGHT DAO</h1>
                <div class="stars">
                    <img src="star.svg" alt="">
                    <img src="star.svg" alt="">
                    <img src="star.svg" alt="">
                    <img src="star.svg" alt="">
                    <img src="star.svg" alt="">
                    <img src="star.svg" alt="">
                </div>
                <div class="socialrow">
                    <a target="_blank" class="link" style="backdrop-filter:blur(10px)brightness(2);" href="https://dexscreener.com/ethereum/0x1b117c931af91a298e8b91977500becc431281e7">
                        <div>DEXSCREENER</div>
                    </a>
    
                    <a target="_blank" class="link contract" style="backdrop-filter:blur(10px)brightness(2);" href="https://etherscan.io/address/0x8f602ee5b1f8de67120c427717cbe2770f3cf320">
                        <div>
                            ETHERSCAN</div>
                    </a>
                </div>
            </div>
        </div>
    
        <div class="info" style="height:100vh;width:100vw;display:flex;flex-flow:column;justify-content:center;">
            <div class="info-box" style="width:1400px;max-width:calc(100vw - 4rem);margin:auto;display:flex;flex-flow:row;border-radius:2rem;padding:1rem;background:#bfb6ff;">
                <p style="font-size:1.5rem;opacity:0.9;padding-right:3rem;margin:auto;margin-bottom:0.75rem;margin-left:0.5rem;font-weight:600;color:black;">
                    <b style="font-size:3rem;font-weight:800;text-transform: uppercase;">
                                                                                                        $STARRY Token</b><br> is a token which will bring liquidity into the NFT market through acquisitions of NFTs for a Treasury based on proposals
                    suggested by $STARRY holders. A method of distribution will exist to send NFTs to community holders as well. Formulated by ex-LPs from Starry Night Capital the token and project is also focused on innovation in DeFi and memes.
    
                    <br>
                    <br>
                    <a class="link" target="_blank" href="mailto:StarryNightDAO@protonmail.com">
                                                                                     <b style="color:#bfb6ff;background:black;border-radius:1rem;padding:0.5rem 1rem;font-weight:600;">EMAIL US</b></a></p>
                <div class="wrapper" style="display:block;height:375px;min-width:500px;overflow:hidden;border-radius:1rem;position:relative;"> <img src="sakuradiner.gif" style="width:175%;margin-left:-21%;" alt="">
                </div>
            </div>
        </div>
    
        <div class="footer" style="height:100vh;width:100vw;display:flex;flex-flow:column;justify-content:center;">
            <div class="info-box" style="backdrop-filter:blur(10px)brightness(2);color:cornflowerblue!important;gap:1rem;text-align:center;width:1400px;max-width:calc(100vw - 4rem);margin:auto;display:flex;flex-flow:row;border-radius:2rem;padding:1rem 2rem; border:3px solid cornflowerblue;">
    
                <h1 style="font-weight:800;text-align:left;font-size:2rem;color:cornflowerblue!important;">$STARRY Token Distribution</h1>
                <p style="margin:auto;color:cornflowerblue!important;">15% Private</p>
                <p style="margin:auto;color:cornflowerblue!important;">5% Marketing</p>
                <p style="margin:auto;color:cornflowerblue!important;">5% Strategic</p>
                <p style="margin:auto;color:cornflowerblue!important;">5% Initial LP</p>
                <p style="margin:auto;color:cornflowerblue!important;">7.5% Reserve LP</p>
                <p style="margin:auto;color:cornflowerblue!important;">7.5% CEX/MM</p>
                <p style="margin:auto;color:cornflowerblue!important;">25% Ex-LP</p>
                <p style="margin:auto;color:cornflowerblue!important;">25% Ex-LP</p>
                <p style="margin:auto;color:cornflowerblue!important;">14% Development & Operations</p>
                <p style="margin:auto;color:cornflowerblue!important;">14% NFTs</p>
    
            </div>
        </div>
    
    
    
    </div>
    <canvas style="width:100vw;height:100vh;position:absolute!important;" ref="sakuraCanvas"></canvas>
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
            text: '0x1b117c931af91a298e8b91977500becc431281e7',
            textToCopy: '0x1b117c931af91a298e8b91977500becc431281e7',
        };
    },
    mounted() {

        (function() {
            var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
                window.setTimeout(callback, 1000 / 60);
            };
            window.requestAnimationFrame = requestAnimationFrame;
        })();

        // Terrain stuff.
        var background = document.getElementById("bgCanvas"),
            bgCtx = background.getContext("2d"),
            width = window.innerWidth,
            height = document.body.offsetHeight;

        (height < 400) ? height = 400: height;

        background.width = width;
        background.height = height;

        function Terrain(options) {
            options = options || {};
            this.terrain = document.createElement("canvas");
            this.terCtx = this.terrain.getContext("2d");
            this.scrollDelay = options.scrollDelay || 90;
            this.lastScroll = new Date().getTime();

            this.terrain.width = width;
            this.terrain.height = height;
            this.fillStyle = options.fillStyle || "#191D4C";
            this.mHeight = options.mHeight || height;

            // generate
            this.points = [];

            var displacement = options.displacement || 140,
                power = Math.pow(2, Math.ceil(Math.log(width) / (Math.log(2))));

            // set the start height and end height for the terrain
            this.points[0] = this.mHeight; //(this.mHeight - (Math.random() * this.mHeight / 2)) - displacement;
            this.points[power] = this.points[0];

            // create the rest of the points
            for (var i = 1; i < power; i *= 2) {
                for (var j = (power / i) / 2; j < power; j += power / i) {
                    this.points[j] = ((this.points[j - (power / i) / 2] + this.points[j + (power / i) / 2]) / 2) + Math.floor(Math.random() * -displacement + displacement);
                }
                displacement *= 0.6;
            }

            document.body.appendChild(this.terrain);
        }

        Terrain.prototype.update = function() {
            // draw the terrain
            this.terCtx.clearRect(0, 0, width, height);
            this.terCtx.fillStyle = this.fillStyle;

            if (new Date().getTime() > this.lastScroll + this.scrollDelay) {
                this.lastScroll = new Date().getTime();
                this.points.push(this.points.shift());
            }

            this.terCtx.beginPath();
            for (var i = 0; i <= width; i++) {
                if (i === 0) {
                    this.terCtx.moveTo(0, this.points[0]);
                } else if (this.points[i] !== undefined) {
                    this.terCtx.lineTo(i, this.points[i]);
                }
            }

            this.terCtx.lineTo(width, this.terrain.height);
            this.terCtx.lineTo(0, this.terrain.height);
            this.terCtx.lineTo(0, this.points[0]);
            this.terCtx.fill();
        }


        // Second canvas used for the stars
        bgCtx.fillStyle = '#05004c';
        bgCtx.fillRect(0, 0, width, height);

        // stars
        function Star(options) {
            this.size = Math.random() * 2;
            this.speed = Math.random() * .05;
            this.x = options.x;
            this.y = options.y;
        }

        Star.prototype.reset = function() {
            this.size = Math.random() * 2;
            this.speed = Math.random() * .05;
            this.x = width;
            this.y = Math.random() * height;
        }

        Star.prototype.update = function() {
            this.x -= this.speed;
            if (this.x < 0) {
                this.reset();
            } else {
                bgCtx.fillRect(this.x, this.y, this.size, this.size);
            }
        }

        function ShootingStar() {
            this.reset();
        }

        ShootingStar.prototype.reset = function() {
            this.x = Math.random() * width;
            this.y = 0;
            this.len = (Math.random() * 80) + 10;
            this.speed = (Math.random() * 10) + 6;
            this.size = (Math.random() * 1) + 0.1;
            // this is used so the shooting stars arent constant
            this.waitTime = new Date().getTime() + (Math.random() * 3000) + 500;
            this.active = false;
        }

        ShootingStar.prototype.update = function() {
            if (this.active) {
                this.x -= this.speed;
                this.y += this.speed;
                if (this.x < 0 || this.y >= height) {
                    this.reset();
                } else {
                    bgCtx.lineWidth = this.size;
                    bgCtx.beginPath();
                    bgCtx.moveTo(this.x, this.y);
                    bgCtx.lineTo(this.x + this.len, this.y - this.len);
                    bgCtx.stroke();
                }
            } else {
                if (this.waitTime < new Date().getTime()) {
                    this.active = true;
                }
            }
        }

        var entities = [];

        // init the stars
        for (var i = 0; i < height; i++) {
            entities.push(new Star({
                x: Math.random() * width,
                y: Math.random() * height
            }));
        }

        // Add 2 shooting stars that just cycle.
        entities.push(new ShootingStar());
        entities.push(new ShootingStar());
        entities.push(new Terrain({ mHeight: (height / 2) + 100 }));
        entities.push(new Terrain({ displacement: 120, scrollDelay: 50, fillStyle: "rgb(17,20,40)", mHeight: (height / 2) + 150 }));
        entities.push(new Terrain({ displacement: 100, scrollDelay: 20, fillStyle: "rgb(10,10,5)", mHeight: height / 2 + 200 }));

        //animate background
        function animate() {
            bgCtx.fillStyle = '#110E19';
            bgCtx.fillRect(0, 0, width, height);
            bgCtx.fillStyle = '#ffffff';
            bgCtx.strokeStyle = '#ffffff';

            var entLen = entities.length;

            while (entLen--) {
                entities[entLen].update();
            }
            requestAnimationFrame(animate);
        }
        animate();
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
        async copyTextToClipboard(text) {
            try {
                await navigator.clipboard.writeText(text);
                console.log('Text copied to clipboard');
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
        },
        handleMouseMove(event) {
            this.mouseX = event.clientX;
            this.mouseY = event.clientY;
            this.applyRotation();
        },

    },
    beforeUnmount() {
        // Remove event listener when component is destroyed
        window.removeEventListener('mousemove', this.handleMouseMove);
    },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
p,
h1,
h2,
h3,
h4,
a {
    font-family: 'Quicksand', sans-serif;
    color: lightpink;
}

.hero-center {
    margin: auto;
    padding: 0rem 3rem;
    border-radius: 2rem;
    margin: auto;
}

body {
    background-color: #000;
    color: #fff;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

.socialrow {
    display: flex;
    flex-flow: row;
    gap: 1rem;
    justify-content: center;
    a {
        border: 1px solid lightpink;
        border-radius: 2rem;
        padding: 1rem 2rem;
        &:hover {
            color: black;
            background: lightpink;
        }
    }
}

#app {
    z-index: 10;
    overflow-x: hidden;
}

.stars {
    position: absolute;
    width: 100%;
    img {
        &:nth-child(1) {
            height: 1.4rem;
            top: -3rem;
            left: -10rem;
        }
        &:nth-child(2) {
            height: 1.9rem;
            top: -11rem;
            right: -5rem;
        }
        &:nth-child(3) {
            height: 1rem;
            left: -8rem;
            top: -12rem;
        }
        &:nth-child(4) {
            height: 2rem;
            right: -8rem;
            top: -12rem;
        }
        &:nth-child(5) {
            height: 2.2rem;
            right: -15rem;
            top: -2rem;
        }
        &:nth-child(6) {
            height: 1.6rem;
            left: -25rem;
            top: -1rem;
        }
    }
}

canvas {
    position: absolute;
    top: 0;
    left: 0;
}

@media (max-width: 900px) {
    .contractaddy {
        font-size: 1.2rem !important;
        max-width: 40%;
        margin-top: 1rem !important;
        overflow: hidden;
        &:after {
            content: '';
            position: absolute;
            right: 0px;
            height: 100%;
            background: linear-gradient(to right, transparent, black);
            width: 40px;
        }
    }
    .socialrow {
        a{padding:0.5rem 1rem!important;}
    }
    .hero-center {
        padding: unset !important;
        h1 {
            font-size: 8vw !important;
            margin-top: 0.5rem;
        }
    }
    .ticker {
        width: 100%;
    }
    .info-box {
        flex-flow: column !important;
        .wrapper {
            min-width: 100% !important;
            height: 200px !important;
            margin-top: 1rem;
        }
        p {
            margin: unset !important;
            text-align: left !important;
            font-size: 1rem !important;
            &:nth-child(1) {
                b {
                    line-height: 2;
                    margin-top: -1rem;
                    &:nth-child(1) {
                        font-size: 1.5rem !important;
                    }
                }
            }
        }
    }
}

/* Add styles for your video player here */
</style>
