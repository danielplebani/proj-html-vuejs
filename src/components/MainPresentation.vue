<script>

import AppSeparator from './utility/AppSeparator.vue';

export default{
    name: 'MainPresentation',

    components: {
        AppSeparator
    },

    data(){
        return{
            mouseOver: true,

            slides: [
                {
                    number : '01',
                    image: 'src/assets/img/1bg.png'
                },
                {
                    number : '02',
                    image: 'src/assets/img/2bg.png'
                },
                {
                    number : '03',
                    image: 'src/assets/img/3bg.png'
                }
            ],

            activeSlide : 0,

            autoplayInterval: null
        }
    },

    methods: {
    prev() {
        this.activeSlide--
        if (this.activeSlide < 0) {
            this.activeSlide =  this.slides.length - 1;
        }
    },

    next() {
        this.activeSlide++
        if (this.activeSlide > this.slides.length - 1) {
            this.activeSlide = 0
        }
    },

    autoplay() {
        this.autoplayInterval = setInterval(() => {
        this.next();
    }, 3000)
    },

    stopAutoplay() {
        clearInterval(this.autoplayInterval);
    }
  },

  mounted() {
    this.autoplay()
  }
    }

</script>

<template>
    <div>
        <div id="container">
            <span id="experience"><strong>17 YEARS OF EXPERIENCE</strong></span>

            <h1 class="mt-1"><strong>We Are a <br> Web Design <span>Agency</span></strong></h1>

            <AppSeparator class="my-4"></AppSeparator>

            <p>Far far dolor sit amet consectetur adipisicing elit. Nobis, ducimus eligendi? Eligendi distinctio adipisci, provident fugiat temporibus, impedit quasi labore soluta consequuntur sed reiciendis qui, nisi exercitationem consectetur.</p>

            <button class="blackButton my-5" @mouseenter="mouseOver = false"  @mouseleave="mouseOver = true">
                <span v-if="mouseOver">READ MORE</span>
                <span v-if="mouseOver == false">VIEW ALL</span>
            </button>

            <div class="d-flex align-items-center">
                <div id="social"><strong>FACEBOOK - INSTAGRAM - YOUTUBE - TWITTER</strong></div>
                <div class="blackButtonBg" @mouseenter="stopAutoplay()" @mouseleave="autoplay()">
                    <button v-for="(slide, index) in slides" :class="activeSlide == index ? 'bg-gradient-yellow-green' : ''" @click="activeSlide = index;"><strong>{{slide.number}}</strong></button>
                </div>
            </div>
        </div>

        <img :src="slides[activeSlide].image">
    </div>
</template>


<style lang="scss" scoped>

@use '../assets/colors/AppColors.scss' as *;

#container{
    padding: 8rem;
    padding-bottom: 13.5rem;

    #experience{
        color: $text-waterGreen;
        font-family: 'Roboto Mono', monospace;
        letter-spacing: 5px;
        font-size: small;
    }

    h1{
        font-size: 60px;

        span{
            font-size: 60px; 
        }
    }

    p{
        width: 50%;
        color: $text-gray_80;
        font-family: 'Rubik', sans-serif;
    }

    .blackButtonBg{
        border: none;
        padding: 3px;
        border-radius: 50px;
        background: $bg-gradient-white_black;
        z-index: 1;

        button{
            padding: 10px 20px;
            border: none;
            border-radius: 50px;
            font-size: large;
            background-color: transparent;
            color: $text-white_70;
        }
    }

    #social{
        font-size: 13px;
        letter-spacing: 1px;
        color: $text-darkGray;
        margin-right: 170px;
    }
}

img{
    position: absolute;
    width: 153vh;
    top: 4rem;
    right: -13rem;
}
</style>