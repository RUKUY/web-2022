<template>
    <div class="product__reviews__container">
        <div class="review__banner">
            <h3 class="product_headliner">Отзывы</h3>
            <button @click="openReviewEditor" class="add-review-btn">Написать отзыв</button>
        </div>
    
        <product-review 
            v-for="review in reviews"
            :key="review.id"
            :review="review"/>  



    </div>
</template>

<script>
import ProductReview from './ProductReview.vue'


export default {
    name: "ProductReviews",
    components: { 
        ProductReview 
    },
    props: {
        reviews: {}
    },
    data() {
        return {

        }
    },
    methods : {
        openReviewEditor() {
            console.log('Открыл окно для создания отзыва')
        },

        addNewReview() {
            console.log('Добавил отзыв')
        }
    },
}
</script>

<style>
    .product__reviews__container {
        margin: 40px 0px 0px 0px;
        
        font-family: 'Playfair Display';
    }

    
    .review__banner {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }


    .add-review-btn {
        font-size: 18px;
        
        width: 200px;
        height: 50px;
        margin: 0px 0px 0px 20px;

        background-color: #40C9A2;
        color: #fff;
        border: none; 
        border-radius: 25px;

        transition: box-shadow 0.2s ease-in-out;

    }

    .add-review-btn:hover {
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.4);
    }

    @media (max-width: 500px) {
        .add-review-btn {
            width: 160px;
            height: 50px;
            font-size: 16px;
        }
    }

</style>