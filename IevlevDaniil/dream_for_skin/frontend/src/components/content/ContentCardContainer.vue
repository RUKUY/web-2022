<template>
    <div class="product__container">
        <content-product-card 
            v-for="card in cards"
            :key="card.id"
            :cardInfo="card"/>

    </div>
        
</template>

<script>

import ContentProductCard from "./ContentProductCard.vue";

export default {
    name: "ContentContainer",
    components: {
        ContentProductCard,

    },
    props: {
        cards: {},
    },
    data() {
        return {
            
        }
    },
}
</script>

<style>
    .product__container {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        width: 100%;
    }


    @media (max-width: 1200px) {
        .product__container {
            width: 100%;
        }
    }

    @media (max-width: 890px) {
        .product__container {
            justify-content: space-between;

        }
    }
</style>