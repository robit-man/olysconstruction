<template>
    <header>
        <a href="">
            <div class="icon-header"><img src="olyicon.svg" alt=""></div>
        </a>
        <div class="menu-header">
            <a href="#formsec">
                <div class="button">
                    <h3>GET A QUOTE</h3>
                </div>
            </a>
            <a href="tel:5039074820">
                <div class="button">
                    <h3>CALL US</h3>
                </div>
            </a>
        </div>
    </header>
    <div class="bg">
    
        <div class="hero" ref="hero">
            <div class="image-wrapper"><img :style="imageStyle" src="tile2.jpg" alt=""></div>
            <div class="cta-row">
                <div class="text-wrapper">
                    <h1>OLYS CONSTRUCTION</h1>
                    <h2>RESIDENTIAL RENOVATION EXPERTS</h2>
                </div>
                <a href="#formsec">
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
                        <a href="#formsec">
                            <div class="button">
                                <h3>UPGRADE BATHROOM</h3>
                            </div>
                        </a>
    
                    </div>
                </div>
                <div class="row-image-last">
                    <div class="text-block">
                        <h2>COOKING AND CLEANING AREAS</h2>
                        <p>
                            Upgrading high use areas is needed as homes age. We build the most resilient back-splashes while matching or improving the desired aesthetic. </p>
                        <a href="#formsec">
                            <div class="button">
                                <h3>UPGRADE BACK-SPLASH</h3>
                            </div>
                        </a>
    
                    </div>
                    <div class="image"><img src="image 1(1).png" alt=""></div>
    
                </div>
                <div class="row-image-first">
                    <div class="image"><img src="image 6(1).png" alt=""></div>
                    <div class="text-block">
                        <h2>TEMPERATURE VARIATION</h2>
                        <p>
                            Both indoor and outdoor fireplace upgrades bring new life to an already cozy room or patio. We ensure high temp areas are up to code, and ready for countless fireside conversations. </p>
                        <a href="#formsec">
                            <div class="button">
                                <h3>UPGRADE FIREPLACE</h3>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="commercial">
            <div class="content-wrapper">
                <div class="row-image-last">
                    <div class="text-block">
                        <h2>High Humidity and Water</h2>
                        <p>
                            Ensuring long lasting surfaces for both wet and dry environments. </p>
                        <a href="#formsec">
                            <div class="button">
                                <h3>UPGRADE BATHROOM</h3>
                            </div>
                        </a>
    
                    </div>
                    <div class="image"><img src="image 8.png" alt=""></div>
    
                </div>
                <div class="row-image-first">
                    <div class="image"><img src="image 7(1).png" alt=""></div>
                    <div class="text-block">
                        <h2>Precision at every scale</h2>
                        <p>
                            For performance and beauty, every project we engage gets machine level implementation. </p>
                        <a href="#formsec">
                            <div class="button">
                                <h3>EXPLORE UPGRADES</h3>
                            </div>
                        </a>
    
                    </div>
                </div>
    
            </div>
        </div>
        <div class="zip-code-checker">
            <div class="input-title">
                <div style="display:flex;flex-flow:column;">
                    <h2>Put in your zip code to SEE IF WE service Your Area!</h2>
                </div>
            </div>
            <p style="color:white;text-align:center;  height: 2rem;color:#aed6f1;">{{ resultMessage }}</p>
    
            <div class="input-row">
                <input type="number" v-model="zipInput" placeholder="Enter ZIP code" style="                font-family: Koulen;font-size:2rem;
                ">
                <div @click="checkZipCode(zipInput)" class="button">
                    <h3>CHECK ZIP CODE </h3>
                </div>
            </div>
    
        </div>
    
        <div class="form-section" id="formsec">
            <div class="form-row-wrapper">
                <div class="form-desc-column">
                    <h3>LETS BUILD SOMETHING NEW!</h3>
                    <p>Reach out to us during business hours over the phone, or any time through text or email. We will respond shortly and see how to best move forward in realizing your updrades!</p>
                    <div class="button-row">
                        <a href="tel:5039074820">
                            <div class="button">
                                <h3>CALL US</h3>
                            </div>
                        </a>
                        <a href="sms:5039074820">
                            <div class="button">
                                <h3>TEXT US</h3>
                            </div>
                        </a>
                        <a href="mailto:olysconstruction@gmail.com">
                            <div class="button">
                                <h3>EMAIL US</h3>
                            </div>
                        </a>
                    </div>
                    <div class="info" style="padding:2rem 0rem;">
                        <h3 style="cursor:pointer;" @click="copyToClipboard(5039074820)">503-907-4820</h3><br>
                        <h4 style="cursor:pointer;" @click="copyToClipboard('olysconstruction@gmail.com')">olysconstruction@gmail.com</h4>
                    </div>
                </div>
                <div class="form-column">
                    <form id="fs-frm" name="survey-form" accept-charset="utf-8" action="https://formspree.io/f/mzbndqbb" method="post">
                        <fieldset id="fs-frm-inputs">
                            <input type="text" name="name" id="full-name" placeholder="NAME" required="">
                            <input type="email" name="_replyto" id="email-address" placeholder="EMAIL" required="">
                            <input type="telephone" name="telephone" id="telephone" placeholder="PHONE">
                            <input type="address" name="address" id="address" placeholder="ADDRESS">
    
                            <textarea rows="3" name="message" id="message" placeholder="PROJECT DETAILS" required=""></textarea>
                            <input type="hidden" name="_subject" id="email-subject" value="Project Details">
                        </fieldset>
                        <input type="submit" class="submit" value="SEND MESSAGE">
                    </form>
                </div>
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
            text: '',
            textToCopy: '5039074820',
            imageUrl: 'path_to_your_image.jpg', // Your image URL here
            imageStyle: {},
            container: null,
            zipInput: '',
            resultMessage: '',
            servedZipCodes: [
                97225, 97223, 97224, 97210, 97203, 97217, 97214, 97232, 97258, 97051, 97027, 97267,
                97068, 97007, 97005, 97008, 97229, 97301, 97305, 97304, 97006, 97071, 97303, 97080,
                97030, 97062, 97070, 97381, 97204, 97205, 97209, 97212, 97133, 97124, 97113, 97213,
                97220, 97218, 97128, 97201, 97219, 97064, 97048, 97112, 97101, 97016, 97132, 97141,
                97107, 97136, 97045, 97227, 97221, 97146, 97338, 97056, 97362, 97032, 97344, 97138,
                97131, 97102, 97396, 97385, 97392, 97325, 97114, 97137, 97049, 97011, 97067, 97103,
                97002, 97360, 97378, 97140, 97230, 97148, 97203, 97210, 97217, 97229, 97225, 97221,
                97205, 97204, 97209, 97214, 97232, 97212,
                97213, 97220, 97218, 97140, 97070, 97062, 97068, 97227, 97219, 97201, 97258, 97211,
                97216, 97008, 97007, 97006, 97013, 97123, 97124, 97223, 97224, 97005, 97301, 97304,
                97303, 97028, 97103, 97107, 97305, 97016, 97302, 97141, 97136, 97080, 97030, 97023,
                97112, 97122, 97149, 97015, 97116, 97051, 97131, 97128, 97374, 97048, 97108, 97338,
                97064, 97113, 97133, 97138, 97125, 97381, 97392, 97385, 97325, 97132, 97027, 97267,
                97383, 97004, 97035, 97034, 97056, 97045, 97236, 97049, 97011, 97067, 97002, 97038,
                97351, 97019, 97231, 97137, 97071, 97032, 97362, 97022, 97148, 97266, 97114, 97144,
                97233, 97215, 97206, 97344, 97026, 97017, 97101, 97378, 97111, 97342, 97358, 97146,
                97396, 97347, 97360, 97086,
            ],
        };
    },
    mounted() {

    },
    methods: {
        checkZipCode(zipInput) {
            let areaServed = this.servedZipCodes.includes(zipInput);
            this.resultMessage = areaServed ? "Area Served!" : "Area Not Served, You can still ask!";
        },
        moveImage(event) {
            const heroElement = this.$refs.hero;
            const rect = heroElement.getBoundingClientRect();
            const x = event.clientX - rect.left - rect.width / 8;
            const y = event.clientY - rect.top - rect.height / 8;

            // Calculate rotation angles
            const rotateX = y / rect.height * 5; // Maximum rotation in degrees
            const rotateY = -x / rect.width * 5;

            // Apply rotation
            this.imageStyle = {
                transform: `perspective(600px) scale(1.4) translatez(-40px) rotateX(${rotateX}deg) rotateY(${rotateY}deg `,
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
h3,
h4 {
    font-family: 'Koulen', sans-serif;
}

p {
    font-family: 'Maven Pro', sans-serif;
}

.form-section {
    background: black;
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding: 4rem;
    padding-bottom: 8rem;
    .form-row-wrapper {
        display: flex;
        flex-flow: row;
        justify-content: center;
        gap: 4rem;
        .form-desc-column {
            width: 600px;
            h3 {
                color: #aed6f1;
                font-size: 3rem;
                line-height: 1;
            }
            h4 {
                color: #aed6f1;
                font-size: 1.5rem;
                line-height: 1;
            }
            p {
                margin-top: 2rem;
                color: white;
            }
            .button-row {
                margin-top: 2rem;
                display: flex;
                flex-flow: row;
                width: 100%;
                gap: 2rem;
                justify-self: space-beween;
                a {
                    display: flex;
                    .button {
                        h3 {
                            color: black;
                            font-size: 1.5rem;
                        }
                    }
                }
            }
        }
        .form-column {
            form {
                font-family: Koulen;
                display: flex;
                flex-flow: column;
                color: white;
                border: unset !important;
                background: transparent;
                min-width: 250px;
                .submit {
                    width: 100%;
                    padding: 0.5rem 0.5rem;
                    height: auto;
                    font-size: 1.5rem;
                    font-family: Koulen;
                    border: 4px solid rgba(0, 0, 0, 0.50);
                    background: #aed6f1;
                }
                fieldset {
                    display: flex;
                    border: unset !important;
                    background: transparent;
                    flex-flow: column;
                    display: flex;
                    padding: unset;
                    flex-flow: column;
                    gap: 1rem;
                    input {
                        width: 100%;
                        background: #1a1a1a;
                        color: white;
                        padding: 2rem 1rem;
                        height: 3rem;
                        font-size: 1.5rem;
                        font-family: Koulen;
                        border: 4px solid rgba(73, 73, 73, 0.50);
                    }
                    textarea {
                        background: #1a1a1a;
                        color: white;
                        padding: 1rem 1rem;
                        height: auto;
                        width: 100%;
                        font-size: 1.5rem;
                        font-family: Koulen;
                        border: 4px solid rgba(73, 73, 73, 0.50);
                        margin-bottom: 1rem;
                    }
                    fieldset {
                        color: white;
                        font-size: 1rem;
                        background: #1a1a1a;
                        padding: 1rem;
                        border: 4px solid rgba(73, 73, 73, 0.50) !important;
                        label {
                            opacity: 0.5;
                            font-size: 1rem;
                        }
                        select {
                            border-radius: unset;
                            font-size: 1rem;
                            font-family: Koulen;
                            background: #fff5;
                            border: unset;
                            option {
                                p {
                                    font-family: "Maven Pro";
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

.zip-code-checker {
    height: 400px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    background: linear-gradient(0deg, #000 0%, #B6B6B6 100%);
    .input-row {
        margin-top: unset;
    }
    div {
        margin: auto;
        display: flex;
        flex-flow: row;
        &:nth-child(1) {
            color: #aed6f1;
            margin-bottom: 1rem;
            margin-top: auto;
            h2 {
                font-size: 2.25rem;
            }
        }
        input {
            background: #B9B9B9;
            height: 4rem;
            width: 8rem;
            border: 4px solid rgba(0, 0, 0, 0.50);
            padding: 0.5rem 1rem;
            width: fit-content;
            transition: all 0.2s ease;
            &:nth-child(1) {
                width: 500px;
                max-width: 50vw;
            }
        }
        .button {
            max-width: 50vw;
            background: #aed6f1;
        }
    }
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
    background: #aed6f1;
    padding: 0.5rem 1rem;
    width: fit-content;
    transition: all 0.2s ease;
    cursor: pointer;
    line-height: 1.2;
    font-size: calc(1.5rem + 0.2vw);
    &:hover {
        opacity: 0.5;
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
        width: 512px;
        max-width: 100%;
        h2 {
            color: #FFF;
            font-family: Koulen;
            font-size: calc(3rem + 0.2vw);
            font-style: normal;
            font-weight: 400;
            line-height: 1;
        }
        p {
            color: #FFF;
            font-family: "Maven Pro";
            font-size: calc(1rem + 0.2vw);
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
    width: 100%;
    height: 6rem;
    position: relative;
    border-bottom: 5px solid #000;
    background: #aed6f1;
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
                padding: 0.5rem 1rem;
                flex-flow: column;
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
    .commercial {
        background: linear-gradient(180deg, #FFF 0%, #B6B6B6 100%);
        padding-bottom: 10rem;
        .content-wrapper {
            gap: 8rem;
            display: flex;
            flex-flow: column;
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
                box-shadow:0px 10px 100px #555;
            }
            .text-block {
                margin: auto 0px;
                display: flex;
                flex-flow: column;
                width: 512px;
                max-width: 100%;
                h2 {
                    color: #000;
                    font-family: Koulen;
                    font-size: calc(3rem + 0.2vw);
                    font-style: normal;
                    font-weight: 400;
                    line-height: 1;
                }
                p {
                    color: #000;
                    font-family: "Maven Pro";
                    font-size: calc(1rem + 0.2vw);
                    margin: 2rem 0rem;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                }
            }
        }
    }
    .residential {
        background: linear-gradient(180deg, #141414 0%, #2B2B2B 100%);
        .content-wrapper {
            gap: 8rem;
            display: flex;
            flex-flow: column;
        }
    }
    .hero {
        perspective: 600px;
        height: calc(70vh - 6rem);
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
            transition: all 0.1s ease;
            img {
                display: block;
                position: absolute;
                height: auto;
                transition: all 0.1s ease;
                width: 100vw;
                transform: perspective(600px) scale(1.4) rotateX(0) rotateY(0);
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
            background: linear-gradient(45deg, #111, #fff0);
            .text-wrapper {
                margin-top: auto;
                h1 {
                    color: #aed6f1;
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
    .form-section {
        background: black;
        display: flex;
        flex-flow: column;
        justify-content: center;
        padding: 4rem;
        padding-bottom: 8rem;
        .form-row-wrapper {
            display: flex;
            flex-flow: column;
            justify-content: center;
            gap: 2rem;
            .form-desc-column {
                width: 512px;
                max-width: 100%;
                h3 {
                    color: #aed6f1;
                    font-size: 3rem;
                    line-height: 1;
                }
                p {
                    margin-top: 2rem;
                    color: white;
                }
                .button-row {
                    margin-top: 2rem;
                    display: flex;
                    flex-flow: row;
                    width: 100%;
                    gap: 1rem;
                    justify-self: space-beween;
                    a {
                        display: flex;
                        .button {
                            h3 {
                                color: black;
                                font-size: 1rem;
                            }
                        }
                    }
                }
            }
            .form-column {
                form {
                    font-family: Koulen;
                    display: flex;
                    flex-flow: column;
                    color: white;
                    border: unset !important;
                    background: transparent;
                    .submit {
                        width: 100%;
                        padding: 0.5rem 0.5rem;
                        height: auto;
                        font-size: 1.5rem;
                        font-family: Koulen;
                        border: 4px solid rgba(0, 0, 0, 0.50);
                        background: #aed6f1;
                    }
                    fieldset {
                        display: flex;
                        border: unset !important;
                        background: transparent;
                        flex-flow: column;
                        display: flex;
                        padding: unset;
                        flex-flow: column;
                        gap: 1rem;
                        input {
                            width: 100%;
                            background: #1a1a1a;
                            color: white;
                            padding: 2rem 1rem;
                            height: 3rem;
                            font-size: 1.5rem;
                            font-family: Koulen;
                            border: 4px solid rgba(73, 73, 73, 0.50);
                        }
                        textarea {
                            background: #1a1a1a;
                            color: white;
                            padding: 1rem 1rem;
                            height: auto;
                            width: 100%;
                            font-size: 1.5rem;
                            font-family: Koulen;
                            margin-bottom: 1rem;
                            border: 4px solid rgba(73, 73, 73, 0.50);
                        }
                        fieldset {
                            color: white;
                            font-size: 1rem;
                            background: #1a1a1a;
                            padding: 1rem;
                            border: 4px solid rgba(73, 73, 73, 0.50) !important;
                            label {
                                opacity: 0.5;
                                font-size: 1rem;
                            }
                            select {
                                border-radius: unset;
                                font-size: 1rem;
                                font-family: Koulen;
                                background: #fff5;
                                border: unset;
                                option {
                                    p {
                                        font-family: "Maven Pro";
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .zip-code-checker {
        padding: 4rem;
        height: auto;
        line-height: 1;
        div {
            flex-flow: column;
            justify-content: center;
            width: 100%;
            input:nth-child(1) {
                margin: auto;
                margin-bottom: 1rem;
                width: 100%;
                max-width: unset !important;
            }
            .button {
                width: 100%;
                justify-content: center;
                display: flex;
                flex-flow: row;
                max-width: unset !important;
            }
        }
    }
    .row-image-last,
    .row-image-first {
        .image {
            width: 80vw !important;
            height: 80vw !important;
            margin: auto;
            margin-bottom: -4rem;
        }
        flex-flow: column !important;
        img {
            width: 100%;
        }
    }
    .row-image-last {
        flex-flow: column-reverse !important;
    }
    .commercial {
        padding-bottom: 2rem !important;
    }
    .hero {
        height: calc(60vh - 3rem) !important;
    }
    .cta-row {
        padding-bottom: 20% !important;
    }
    header {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        width: 100vw;
        height: 3rem;
        position: relative;
        border-bottom: 5px solid #000;
        background: #aed6f1;
        box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.25);
        a {
            .icon-header {
                img {
                    margin: auto;
                    height: 24px;
                }
                width: 3rem;
                display:flex;
                flex-flow:column;
                height:3rem;
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
                padding: 2px;
                margin: auto;
                height: 2rem;
                width: 2rem;
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
                    padding: 0.5rem 0.5rem;
                    flex-flow: column;
                    margin: auto;
                    height: 2rem;
                    justify-content: center;
                    h3 {
                        font-size: 20px;
                        padding: unset;
                        margin: unset;
                        line-height: 1;
                    }
                }
            }
        }
    }
}

/* Add styles for your video player here */
</style>
