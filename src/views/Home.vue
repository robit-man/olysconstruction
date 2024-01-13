<template>
    <header>
        <div class="name-title">
            <img src="/S.svg" alt="">
            <img src="/A.svg" alt="">
            <img src="/M.svg" alt="">
        </div>
        <div class="social">
            <a href="https://T.me/JOINSAMTG"><img src="/TG.svg" alt=""></a>
            <a href="https://witter.com/ethereum_sam"><img src="/XT.svg" alt=""></a>
            <a href="https://etherscan.io/address/0x8D991cf25Db977Ad2d4da61C48373a69E4CD514d">
                <p>Etherscan</p>
            </a>
        </div>
    </header>
    <div class="bg">
        <div class="main-stack">
            <div class="hero-title">
                <img src="/S.svg" alt="">
                <img src="/A.svg" alt="">
                <img src="/M.svg" alt="">
            </div>
            <div class="row">
                <div class="supply-info">
                    <p>Total supply: <b>100,000,000</b></p>
                    <p>Tax on Buy-Sell: <b>5/5</b></p>
                </div>
                <div class="contract-info" @click="copyToClipboard('0x8D991cf25Db977Ad2d4da61C48373a69E4CD514d')">
                    <p>Contract address: </p>
                    <p><b>0x8D991cf25Db977Ad2d4da61C48373a69E4CD514d</b> <img src="/copy.svg" alt=""></p>
                </div>
            </div>
            <div class="row">
                <a href="https://T.me/JOINSAMTG">
                    <div class="button">
                        <p>BUY</p><img src="/Arrow(2).svg" alt=""></div>
                </a>
                <a href="https://T.me/JOINSAMTG">
                    <div class="button">
                        <p>CHART</p><img src="/Arrow(2).svg" alt=""></div>
                </a>
                <a href="https://T.me/JOINSAMTG">
                    <div class="button">
                        <p>TELEGRAM</p><img src="/Arrow(2).svg" alt=""></div>
                </a>
                <a href="https://twitter.com/ethereum_sam">
                    <div class="button">
                        <p>TWITTER</p><img src="/Arrow(2).svg" alt=""></div>
                </a>
            </div>
        </div>
    </div>
    <footer>
        <p>2024 SAM</p>
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
        };
    },
    mounted() {

    },
    methods: {
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
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
* {
    font-family: 'Inter', sans-serif;
}

p {
    font-family: 'Inter', sans-serif;
}

.bg {
    display: flex;
    flex-flow: column;
    margin: 0rem 5.5vw;
}

.row {
    width: 100%;
    gap: 2rem;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    margin-bottom: 2rem;
}

.hero-title {
    gap: 2vw;
    display: flex;
    flex-flow: row;
    justify-content: center;
    margin: 4rem;
    img {
        height: 30vw;
    }
}

b {
    font-weight: 700;
    font-family: 'Inter', sans-serif;
}

.supply-info,
.contract-info {
    display: flex;
    width: calc(50% - 16px);
    padding: 1rem 1rem;
    flex-flow: column;
    gap: 10px;
    height: autol;
    border-radius: 10px;
    border: 1px solid #000;
    user-select: none;
    cursor: pointer;
    p {
        line-height: 1;
    }
}

.button {
    display: flex;
    justify-content: space-between;
    padding: 8px 16px;
    align-items: center;
    gap: 2rem;
    width: 100%;
    cursor: pointer;
    border-radius: 10px;
    border: 1px solid #000;
    p {
        font-weight: 700;
    }
    &:hover {
        background: black;
        p {
            color: white;
        }
        img {
            filter: invert(1);
        }
    }
}

header {
    height: auto;
    margin: 2rem 6vw;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    .name-title {
        margin: auto 0px;
        img {
            height: 32px;
        }
    }
    .social {
        display: flex;
        flex-flow: row;
        margin: auto 0px;
        gap: 1rem;
    }
}

footer {
    margin-top: auto;
    text-align: center;
    p {
        font-size: 0.75rem;
    }
}

@media (max-width: 900px) {
    .row {
        width: 100%;
        gap: 1rem;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        margin-bottom: 1rem;
    }
}

header {
    margin-bottom: unset;
}

.supply-info,
.contract-info {
    display: flex;
    width: 100%;
    padding: 1rem 1rem;
    flex-flow: column;
    gap: 10px;
    height: autol;
    border-radius: 10px;
    border: 1px solid #000;
    p {
        line-height: 1;
        word-break: break-all;
    }
}

a {
    width: 100%;
}

.button {
    display: flex;
    justify-content: space-between;
    padding: 8px 16px;
    align-items: center;
    gap: 2rem;
    width: 100%;
    cursor: pointer;
    border-radius: 10px;
    border: 1px solid #000;
    p {
        font-weight: 700;
    }
    &:hover {
        background: black;
        p {
            color: white;
        }
        img {
            filter: invert(1);
        }
    }
}

.hero-title {
    gap: 2vw;
    display: flex;
    flex-flow: row;
    justify-content: center;
    margin: 2rem;
    img {
        height: 30vw;
    }
}

.contract-info {
    img {
        margin-bottom: -5px;
    }
}

/* Add styles for your video player here */
</style>
