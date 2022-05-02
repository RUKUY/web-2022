<template>
    <div class="main__shortcuts__container">
        <button class="main__pillow" v-for="pillow in pillows" :key="pillow.id">
            <img :src="require('../assets/icons/' + pillow.img)" alt="">
            <span>{{pillow.label}}</span>

        </button>
    </div>

</template>

<script>
export default {
    name: "MainPillows",
    data() {
        return {
            pillows: [
                {id: 1, img: "face.png", label: "Уход за кожей"},
                {id: 2, img: "hair.png", label: "Уход за волосами"},
                {id: 3, img: "make.png", label: "Макияж"},
                {id: 4, img: "box.png", label: "Наборы"},
                {id: 5, img: "parf.png", label: "Парфюмерия"},
                {id: 6, img: "instr.png", label: "Инструменты"},
            ],

        }
    },
    methods: {
        
    },
    

}
</script>

<style>

    .main__shortcuts__container {
        width: 100%;
        max-width: 1200px;
        height: 140px;
        /* background-color: #fafafa; */
        
        padding: 0px 10px;
        margin: 40px auto;
        display: flex;

        
        justify-content: space-between;
        
    }

    .main__pillow {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        height: 140px;
        width: 140px;

        background-color: #fff;
        border-radius: 30px;
        border: 1px dashed #EBC3DF;
        cursor: pointer;

        transition: border 0.1s ease-in;
        
    }   

    .main__pillow:hover {
        border: 3px solid #EBC3DF;

    }

    .main__pillow img {
        width: 75px;
    }

    .main__pillow span {
        font: 12px 'Playfair Display';
        margin-top: 10px;
        color: #333;
        
    }

    
    @media (max-width: 890px) {
        .main__shortcuts__container {
            width: 100%;
            height: auto;
            justify-content: space-around;
            flex-wrap: wrap;
        }

        .main__pillow {
            margin: 20px 40px;
        }
    }

    @media (max-width: 500px) {
        .main__pillow {
            margin: 20px 5px;
        }
    }

    @media (max-width: 335px) {
        .main__pillow {
            width: 100px;
            height: 100px;
        }

        .main__pillow img{
            width: 50px;
        }

        .main__pillow span {
            font-size: 10px;
        }
    }

</style>