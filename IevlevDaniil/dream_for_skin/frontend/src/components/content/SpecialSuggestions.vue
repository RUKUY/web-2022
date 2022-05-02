<template>
    <div class="special__suggestions__container">
        <div class="special__suggestion" v-for="suggestion in suggestionList" :key="suggestion.id">
            <img :src="require('@/assets/images/special_suggestions/' + suggestion.img)" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: "SpecialSuggestions",
    data() {
        return {
            suggestionList: [{id: 1, img: "sugg1.jpg"},
                             {id: 2, img: "sugg2.jpg"},
                             {id: 3, img: "sugg1.jpg"},
                             {id: 4, img: "sugg2.jpg"},
                             {id: 5, img: "sugg1.jpg"},
                             {id: 6, img: "sugg2.jpg"}],

        }    
    },
}
</script>

<style>

    .special__suggestions__container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .special__suggestion {
        display: flex;
        cursor: pointer;
        
        width: 100%;
        height: 100%;
        max-width: 360px;
        max-height: 120px;
        margin: 30px 5px 0px 5px;

        border-radius: 25px;
        background-color: #A3F7B5;

    }

    .special__suggestion img {
        width: 100%;
        height: auto;
        border-radius: 25px;
    }

    @media (max-width: 1200px){
        .special__suggestions__container {
            justify-content: space-around;
        }

    }

</style>