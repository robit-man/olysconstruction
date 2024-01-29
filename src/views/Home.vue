<template>
    <header>
        <a href="">
            <div class="icon-header"><img src="olyicon.svg" alt=""></div>
        </a>
        <div class="menu-header">
            <a href="">
                <div class="button">
                    <h3>GET A QUOTE</h3>
                </div>
            </a>
            <div class="button-ham"><img src="menu.png" alt="">
            </div>
        </div>
    </header>
    <div class="bg">
    
        <div class="hero" @mousemove="moveImage" ref="hero">
            <div class="image-wrapper"><img :style="imageStyle" src="tile2.jpg" alt=""></div>
            <div class="cta-row">
                <div class="text-wrapper">
                    <h1>OLYS CONSTRUCTION</h1>
                    <h2>RESIDENTIAL AND COMMERCIAL RENOVATION EXPERTS</h2>
                </div>
                <a href="">
                    <div class="arrow"><img src="Arrow 1.svg" alt=""></div>
                </a>
            </div>
        </div>
    
    
        <div class="residential">
            <div class="content-wrapper">
                <div class="row-image-first">
                    <div class="image"><img src="image 6.png" alt=""></div>
                    <div class="text-block">
                        <h2>water-tight WORK</h2>
                        <p>
                            A variety of environments call for a range of materials. With years of completed projects under our belt, we are well versed in balance of form and function. </p>
                        <div class="button">
                            <h3>UPGRADE BATHROOM</h3>
                        </div>
                    </div>
                </div>
                <div class="row-image-last"></div>
                <div class="row-image-first"></div>
                <div class="row-image-last"></div>
            </div>
        </div>
    
    </div>
    <footer>
    </footer>
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
            text: '0x8D991cf25Db977Ad2d4da61C48373a69E4CD514d',
            textToCopy: '0x8D991cf25Db977Ad2d4da61C48373a69E4CD514d ',
            imageUrl: 'path_to_your_image.jpg', // Your image URL here
            imageStyle: {},
            container: null,
        };
    },
    mounted() {

    },
    methods: {
        moveImage(event) {
            const heroElement = this.$refs.hero;
            const rect = heroElement.getBoundingClientRect();
            const x = event.clientX - rect.left - rect.width / 2;
            const y = event.clientY - rect.top - rect.height / 2;

            // Calculate rotation angles
            const rotateX = y / rect.height * 5; // Maximum rotation in degrees
            const rotateY = -x / rect.width * 5;

            // Apply rotation
            this.imageStyle = {
                transform: `perspective(600px) scale(1.1) rotateX(${rotateX}deg) rotateY(${rotateY}deg `,
            };
        },
        getImageDimensions() {
            const imageElement = this.$refs.image;
            if (imageElement) {
                const rect = imageElement.getBoundingClientRect();
                return { width: rect.width, height: rect.height };
            } else {
                return { width: 0, height: 0 };
            }
        },
        async copyToClipboard(text) {
            try {
                await navigator.clipboard.writeText(text);
                console.log('Text copied to clipboard');
                // Optionally, implement a notification to the user
            } catch (err) {
                console.error('Failed to copy: ', err);
                // Optionally, handle the error, like showing an error message
            }
        },
    },
    beforeUnmount() {

    },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Koulen&family=Maven+Pro:wght@400;600;700;900&display=swap');
h1,
h2,
h3 {
    font-family: 'Koulen', sans-serif;
}

p {
    font-family: 'Maven Pro', sans-serif;
}

.content-wrapper {
    width: 1920px;
    margin: auto;
    padding: 4rem 0rem;
    max-width: calc(100vw - 8rem);
}

.row-image-first {
    display: flex;
    flex-flow: row;
}

.button {
    border: 4px solid rgba(0, 0, 0, 0.50);
    background: #FFF59F;
    padding: 0.5rem;
    width: fit-content;
    transition: all 0.2s ease;
    cursor: pointer;
    &:hover {
        background: black;
        color: white;
    }
}

.row-image-last,
.row-image-first {
    display: flex;
    flex-flow: row;
    gap: 8rem;
    justify-content: center;
    .image {
        overflow: hidden;
        width: 40vw;
        height: 40vw;
        max-width: 100%;
        line-height: 1;
        transition: all 0.2s ease;
        &:hover {
            transform: translatey(10px);
            box-shadow: 0px 10px 50px;
        }
        img {
            line-height: 1;
            min-height: 100%;
            min-width: 100%;
        }
        border-radius: 4px;
        box-shadow:0px 10px 100px;
    }
    .text-block {
        margin: auto 0px;
        display: flex;
        flex-flow: column;
        width: 400px;
        max-width: 50vw;
        h2 {
            color: #FFF;
            font-family: Koulen;
            font-size: 3rem;
            font-style: normal;
            font-weight: 400;
            line-height: 1;
        }
        p {
            color: #FFF;
            font-family: "Maven Pro";
            font-size: 1rem;
            margin: 2rem 0rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
    }
}

header {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    width: 100vw;
    height: 6rem;
    position: relative;
    border-bottom: 5px solid #000;
    background: #FFF59F;
    box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.25);
    a {
        .icon-header {
            img {
                margin: auto;
                height: 48px;
            }
            width: 6rem;
            display:flex;
            flex-flow:column;
            height:6rem;
        }
    }
    .menu-header {
        display: flex;
        flex-flow: row;
        margin: auto 1rem;
        gap: 1rem;
        .button-ham {
            border: 4px solid #EEE;
            background: #FFF;
            color: #000;
            font-family: 'Koulen', sans-serif;
            font-size: 30px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            padding: 10px;
            margin: auto;
            height: 4rem;
            width: 4rem;
            display: flex;
            flex-flow: column;
            justify-content: center;
            img {
                height: auto;
            }
        }
        a {
            .button {
                border: 4px solid #EEE;
                background: #FFF;
                color: #000;
                font-family: 'Koulen', sans-serif;
                font-size: 30px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                display: flex;
                flex-flow: column;
                padding: 10px;
                margin: auto;
                height: 4rem;
                justify-content: center;
                h3 {
                    font-size: 30px;
                    padding: unset;
                    margin: unset;
                    line-height: 1;
                }
            }
        }
    }
}

.bg {
    .residential {
        background: linear-gradient(180deg, #141414 0%, #2B2B2B 100%);
    }
    .hero {
        perspective: 600px;
        height: calc(100vh - 6rem);
        position: relative;
        width: 100vw;
        overflow: hidden;
        .image-wrapper {
            transform-style: preserve-3d;
            position: absolute;
            width: 100%;
            height: inherit;
            display: flex;
            flex-flow: column;
            justify-content: center;
            img {
                display: flex;
                position: relative;
                width: inherit;
                height: auto;
                width: auto;
            }
        }
        .cta-row {
            padding: 2rem;
            display: flex;
            flex-flow: row;
            justify-content: space-between;
            height: 100%;
            position: absolute;
            width: 100vw;
            .text-wrapper {
                margin-top: auto;
                h1 {
                    color: #FFF59F;
                    text-shadow: 0px 10px 20px rgba(0, 0, 0, 0.50);
                    font-family: 'Koulen', sans-serif;
                    font-size: 10vw;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    line-height: 1;
                }
                h2 {
                    color: #BABABA;
                    text-shadow: 0px 10px 20px rgba(0, 0, 0, 0.50);
                    font-family: 'Koulen', sans-serif;
                    font-size: 3.83vw;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    line-height: 1;
                }
            }
            a {
                margin-top: auto;
                .arrow {
                    img {
                        height: 13vw;
                    }
                }
            }
        }
    }
}

@media (max-width: 900px) {
    .row {}
}

/* Add styles for your video player here */
</style>
