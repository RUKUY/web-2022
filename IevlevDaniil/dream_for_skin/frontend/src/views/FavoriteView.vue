<template>
    <div class="favorite">
        <h3 class="favorite__title">Избранное</h3>
        <favorite-header />

        <content-card-container :cards="favoriteCards"/>
    </div>
</template>

<script>
import ContentCardContainer from '../components/content/ContentCardContainer.vue'
import FavoriteHeader from '../components/favorite/FavoriteHeader.vue'

export default {
    name: 'Favorite',
    components: {
        FavoriteHeader,
        ContentCardContainer
    },
    data() {
        return {
            favoriteCards: [{id: 3, img: "bakin_pow.png", price: 200, isAvailable: true, title: "Пенка для умывания Baking Powder Pore Cleansing Foam от бренда Etude House", reviewNum: 13, rating: "4.5", inCart: false, inFavorites: true}]
        }
    },
}   

</script>

<style>
    .favorite {
        display: table;
        
        width: 100%;
        max-width: 1200px;
        
        margin: 10px auto 0px auto;
        padding: 10px;
    }
    .favorite__title {
        margin: 0px 0px 0px 30px;
        font-family: 'Playfair Display';
        font-weight: 500;
        font-size: 28px;
    }

</style>