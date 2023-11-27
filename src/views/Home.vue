<template>
    <div style="height:100vh;background:radial-gradient( farthest-corner at 40px 40px, #c0c0c0 0%, #8a8a8a 100%);width:100vw;position:fixed;">
        <div class="header" style="display:flex;flex-flow:row;justify-content:space-between;position:relative;top:0px;width:100vw;min-height:4rem;border-bottom: 1px solid  #000000aa;">
            <div @click="intro = true, docs = false, deal = false" class="icon" style="color:#000000aa;font-size:1rem;font-weight:300;height:4rem;width:4rem;display:flex;flex-flow:column;justify-content:center;text-align: center;border-right: 1px solid  #000000aa;">OTC</div>
            <div class="wallet" style="height:4rem;width:4rem;display:flex;flex-flow:column;justify-content:center;text-align: center;border-left: 1px solid  #000000aa;"><img src="metamask-thin.svg" style="width:3rem;margin:auto;"> </div>
        </div>
    
        <div v-if="intro" class="content" style="">
    
            <div class="module" style="height:min-content;margin:auto;padding:1rem;">
    
                <h1 style="color:#000000aa; font-weight:100;margin:1rem auto;line-height:1;text-align:center;font-size:8rem;">OTC</h1>
    
                <div style="text-align:center;font-weight:100;">
                    <p style="font-weight:300;">A Trustless Escrow Solution on Ethereum</p>
                    <div class="button-row" style="display:flex;flex-flow:row;gap:1rem;">
                        <div @click="docs = true, deal = false, intro = false" class="button">READ DOCS</div>
                        <div @click="deal = true, docs = false, intro = false" style="border-style:solid;" class="button">START DEAL</div>
                    </div>
    
                </div>
            </div>
    
        </div>
        <div v-if="deal" class="content" style="">
    
            <div class="module" style="height:min-content;margin:auto;padding:1rem; width:512px;max-width:100%;">
    
                <div class="deal-header" style="display:flex;flex-flow:row;justify-content:space-between;font-weight:300;">INITIATE OTC <b style="font-weight:500;">INBOX</b></div>
                <div class="deal-wrapper" style="">
                    <div class="deal-user" style="padding: 1rem;border-right:1px solid #0005;">
                        <h2>OFFER</h2>
                        <div class="inputs" style="border-top:1px solid #0001;">
                            <div class="input-module" style="margin-top:1rem;">
                                <div class="input-label" style="margin-bottom:0.25rem;">
                                    OFFER ASSET
                                </div>
                                <div class="input-wrapper" style="display:flex;flex-flow:row;justify-content: center;">
                                    <input type="text">
                                    <div class="dropdown" style="width:2rem;height:2rem;display:flex;flex-flow:row;justify-content: center;border:1px solid #000a;border-left:unset;"><img src="arrow-right4.svg" style="width:2rem;margin:auto;transform:rotate(90deg);" alt=""></div>
                                </div>
                            </div>
                            <div class="input-module" style="margin-top:1rem;">
                                <div class="input-label" style="margin-bottom:0.25rem;">
                                    QUANTITY
                                </div>
                                <div class="input-wrapper" style="display:flex;flex-flow:row;justify-content: center;">
                                    <input type="text">
                                </div>
                            </div>
                            <div class="input-module" style="margin-top:1rem;">
                                <div class="input-label" style="margin-bottom:0.25rem;">
                                    ADDRESS
                                </div>
                                <div class="input-wrapper" style="display:flex;flex-flow:row;justify-content: center;">
                                    <input type="text">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="deal-counter-party" style="padding: 1rem;">
                        <h2>REQUEST</h2>
                        <div class="inputs" style="border-top:1px solid #0001;">
                            <div class="input-module" style="margin-top:1rem;">
                                <div class="input-label" style="margin-bottom:0.25rem;">
                                    REQUEST ASSET
                                </div>
                                <div class="input-wrapper" style="display:flex;flex-flow:row;justify-content: center;">
                                    <input type="text">
                                    <div class="dropdown" style="width:2rem;height:2rem;display:flex;flex-flow:row;justify-content: center;border:1px solid #000a;border-left:unset;"><img src="arrow-right4.svg" style="width:2rem;margin:auto;transform:rotate(90deg);" alt=""></div>
                                </div>
                            </div>
                            <div class="input-module" style="margin-top:1rem;">
                                <div class="input-label" style="margin-bottom:0.25rem;">
                                    QUANTITY
                                </div>
                                <div class="input-wrapper" style="display:flex;flex-flow:row;justify-content: center;">
                                    <input type="text">
                                </div>
                            </div>
                            <div class="input-module" style="margin-top:1rem;">
                                <div class="input-label" style="margin-bottom:0.25rem;">
                                    ADDRESS
                                </div>
                                <div class="input-wrapper" style="display:flex;flex-flow:row;justify-content: center;">
                                    <input type="text">
                                </div>
                            </div>
                        </div>
    
                    </div>
                </div>
                <div class="submit-row">
                    <input type="submit" value="REQUEST OTC" style="border-color:transparent;height:3rem;font-size:1.5rem;background:#0005;color:#fff5;font-weight:500;border-top:unset;">
                </div>
    
                <p style="color:#111;background:indianred;text-align:center;font-weight:100;">THIS IS A PREVIEW AWAITING WEB3 INTEGRATION</p>
    
            </div>
    
        </div>
        <div v-if="docs" class="content" style="">
    
            <div class="module" style="height:min-content;margin:auto;padding:1rem; width:1200px;max-width:100%;">
    
                <h1 style="color:#000000aa; font-weight:300;margin:unset;line-height:1;font-size:2rem;">DOCS</h1>
                <div class="details" style="border-top:1px dashed #000a;margin-top:1rem;">
                    <p style="font-weight:300;margin-top:1rem;">
                        <b>DESCRIPTION</b> <br> $OTC has deployed the back-end code for a zero slippage token exchange which allows users to post limit buy and limit sell orders. 0/0 tax.
                        <br>By using the $OTC system you can have a trustless escrow so that you can never get scammed by an OTC.
                        <br>
    
                    </p>
                    <p style="font-weight:300;margin-top:1rem;">
                        <b>TOKENOMICS</b> <br>80% Liquidity (LP Locked) <br> 5% Team I (Development) <br> 5% Team II (Development) <br> 5% Team III (Operations) <br> 5% Team IV (Marketing) <br>
    
                    </p>
                    <p style="font-weight:300;margin-top:1rem;">
                        <b>FUNCTIONS</b> <br> Deal Request - A user can initiate a request to swap an asset over the counter with another user by inputting the counterparty address, requested asset, and provided asset, and the respective ammounts of each
                        asset.
                        <br> Deal Receipt - A user accumulates receipts with each successful OTC swap with another user. These swaps display in the receipts tab on the deal page.
                    </p>
                    <div style="display:flex;flex-flow:wrap; gap:4rem;">
                        <p style="font-weight:300;margin-top:1rem;">
                            <b>CHART</b> <br>
                            <a style="font-weight:200;" href="https://www.dextools.io/app/en/ether/pair-explorer/0x457c4ed7eed99644b410dd4fda7bb76e74b40ede">DEXTOOLS</a>
    
                        </p>
                        <p style="font-weight:300;margin-top:1rem;">
                            <b>LP LOCK</b> <br>
                            <a style="font-weight:200;" href="https://etherscan.io/tx/0x5ef56ffd03e998b694fbe6702e1c361bf53df1426abadcf8597ea7a79bfbba5e">LOCKED</a>
    
                        </p>
                        <p style="font-weight:300;margin-top:1rem;">
                            <b>UNISWAP</b> <br>
                            <a style="font-weight:200;" href="https://app.uniswap.org/swap?outputCurrency=0xe3b5a9dd772777cd32c155d6fe7715278755e118">ACQUIRE $OTC ERC20</a>
    
                        </p>
                        <p style="font-weight:300;margin-top:1rem;">
                            <b>CONTRACT</b> <br>
                            <a style="font-weight:200;" href="https://etherscan.io/address/0xe3B5a9Dd772777cD32c155D6Fe7715278755E118#code">0xe3B5a9Dd772777cD32c155D6Fe7715278755E118</a>
    
                        </p>
                    </div>
                </div>
    
            </div>
    
        </div>
        <div class="footer" style="display:flex;flex-flow:row;justify-content:space-between;position:relative;top:0px;width:100vw;min-height:4rem;border-top: 1px dashed  #000000aa;">
            <div @click="intro = true, docs = false, deal = false" class="icon" style="color:#000000aa;font-size:1.5rem;font-weight:100;height:4rem;padding: 0.5rem 0.5rem ;width:auto;display:flex;flex-flow:row;justify-content:center;text-align: center;border-right: 1px dashed  #000000aa;">
                <a href="https://twitter.com/otc_erc"> <img src="twitter-thin.svg" style="width:3rem;margin:auto;"> </a><a href="https://t.me/otc_erc"><img src="telegram-thin.svg" style="width:3rem;margin:auto;"></a> </div>
            <div class="email" style="height:4rem;width:4rem;display:flex;  padding: 0.5rem;flex-flow:row;justify-content:center;text-align: center;border-left: 1px dashed  #000000aa;"><a href="mailto:otc_erc@proton.me"><img src="email-thin.svg" style="width:3rem;margin:auto;"></a> </div>
    
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
            text: '0x8f602eE5b1F8DE67120c427717cbe2770F3cF320',
            textToCopy: '0x8f602eE5b1F8DE67120c427717cbe2770F3cF320',
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
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;500;700;900&display=swap');
p {
    color: #000000aa;
}

.button-row {
    margin-top: 1rem;
}

.button {
    cursor: pointer;
    width: 100%;
    padding: 1rem;
    border: 1px dashed #000a;
    font-weight: 300;
    &:hover {
        background: #0005;
        border-style: solid;
        border-color: #0005;
        color: #fff5;
    }
}

.deal-wrapper {
    display: flex;
    flex-flow: row;
    justify-content: center;
    border: 1px solid #0005; //box-shadow: 0px 0px 100px #0002;
}

input {
    border: 1px solid #000a;
    background: unset;
    color: #000a;
    font-weight: 300;
    font-size: 1rem;
    height: 2rem;
    width: 100%;
border-radius:0px!important;
    font-family: 'Raleway', sans-serif;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
    background: #0001;
}

* {
    font-family: 'Raleway', sans-serif;
    scrollbar-width: none;
}

.content {
    height: calc(100% - 10rem - 1px);
    display: flex;
    flex-flow: row;
    justify-content: center;
    margin: 1rem;
    padding: unset;
    overflow-y: auto;
    max-width: 100%;
    color: #000000aa;
}

@media (max-width: 900px) {}

/* Add styles for your video player here */
</style>
