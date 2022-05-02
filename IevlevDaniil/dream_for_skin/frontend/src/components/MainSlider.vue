<template>
    <div class="slider__container">
        <div class="slider__main">
            <img class="slider__item" alt="" 
                v-for="item in sliderItems"
                :src=" require('../assets/images/' + sliderItemsFolder[currentFolder] + item.img)" 
                :key="item.id">            
        </div>
        
        <i @click="slidePrevious" id="prev-button" class="fa fa-chevron-left" aria-hidden="true"></i>
        <i @click="slideNext" id="next-button" class="fa fa-chevron-right" aria-hidden="true"></i>
    </div>
    
</template>

<script>


export default {
    name: "MainSlider",
    components: {
    },
    data() {
        return {
            swipeCounter: 0,
            width: {},
            sliderLine: {},

            sliderItemsFolder: ["main_slider/", "main_slider_mobile/"],
            currentFolder: 0,

            sliderItems: [{id: 1, img: "slider1.jpg"},
                          {id: 2, img: "slider2.jpg"},
                          {id: 3, img: "slider3.jpg"},
                          {id: 4, img: "slider4.jpg"},
                          {id: 5, img: "slider5.jpg"}],
            
        }
    }, 
    props : {
        interval : {
            type: Number,
            default: 0,
        }
    },

    created(){
        this.width = document.documentElement.clientWidth;
        if (this.width > 1920){
            this.width = 1920;
        }
        this.sliderCustomizer();

        window.addEventListener('resize', this.sliderCustomizer);
    },

    mounted() {
        if (this.interval > 0) {
            let mainThis = this;
            setInterval(() => {
                mainThis.slideNext()
            }, mainThis.interval)
        }
    },
 
    computed: {

    },

    methods: {
        sliderCustomizer(){
            this.width = document.documentElement.clientWidth; 
            if (this.width > 1920){
                this.width = 1920;
            }

            (this.width < 600) ? this.currentFolder = 1 : this.currentFolder = 0;

            if (this.swipeCounter > 0) {
                this.rollSlider()
            }
        },

        slideNext(){
            this.swipeCounter = (this.swipeCounter + 1) % 5;
            this.rollSlider();

            // console.log("Нажал вперед");
        },

        slidePrevious(){
            this.swipeCounter = (this.swipeCounter - 1) % 5;
            if (this.swipeCounter == -1) {
                this.swipeCounter = 4;

            }
            this.rollSlider();

            // console.log("Нажал назад");
        },

        rollSlider() {
            this.width = document.documentElement.clientWidth;
            this.sliderLine = document.querySelector('.slider__main');
            this.sliderLine.style.transform = 'translate(-' + this.swipeCounter * this.width + 'px)';

        }
    }, 
    
}

</script>

<style>

    .slider__container {
        position: relative;
        overflow: hidden;

        width: 100%;
        max-width: 1920px;
        margin: 0px auto;
    }

    .slider__main {
        display: flex;
        
        
        transition: all 0.8s ease;
    }

    .slider__item {
        width: 100%;
    }

    #prev-button {

        position: absolute;
        cursor: pointer;
        
        left: 20px;
        top: 50%;
        z-index: 10;
        
        font-size: 20px;
        opacity: 75%;
        color: #fff;
    }

    #next-button {
        position: absolute;
        cursor: pointer;

        right: 20px;
        top: 50%;
        z-index: 10;
        
        font-size: 20px;
        opacity: 75%;
        color: #fff;
    }


</style>