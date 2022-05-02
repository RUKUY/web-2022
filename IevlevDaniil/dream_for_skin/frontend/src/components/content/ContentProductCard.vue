<template>
    <div class="product__card" :class="{hidden__product__card : isHidden}">
        <div class="product__card__content" 
            :class="{ display__none : isHidden }">
            <router-link :to="{name: 'product', params:{id: cardInfo.id}}" class="router__link">

                <img :src="require('@/assets/images/products/' + cardInfo.img)" alt="">
                
                <div class="product__card__price">
                    <h1>{{cardInfo.price}} ₽</h1>

                    <div class="main__product__available">
                        <img v-show="cardInfo.isAvailable" src="@/assets/icons/green_cicle.svg" alt="">
                        <img v-show="!cardInfo.isAvailable" src="@/assets/icons/gray_cicle.svg" alt="">
                        
                        <span v-show="cardInfo.isAvailable" id="available">в наличии</span>
                        <span v-show="!cardInfo.isAvailable" id="unavailable">не в наличии</span>
                    </div>
                </div>
                
                <h3 class="product__card__title">{{cardInfo.title}}</h3>
                <div class="card__rating">
                    Рейтинг: <span class="rating__index">{{cardInfo.rating}}</span>
                    <span class="rating__review__num">из {{cardInfo.reviewNum}} отзывов</span>
                </div>
                
            </router-link>

            <div class="product__card__buttons">
                <button v-if="!cardInfo.inCart" @click="addToCart()" :class="{'product__card__buy__btn' : cardInfo.isAvailable, 'product__card__buy__btn-gray': !cardInfo.isAvailable}" type="button" >В корзину</button>
                <button v-else @click="removeFromCart()" :class="{'product__card__buy__btn in__cart' : cardInfo.isAvailable, 'product__card__buy__btn-gray': !cardInfo.isAvailable}" type="button" >В корзине</button>
                <i :class="{'color__red': cardInfo.inFavorites}" @click="addToFavorites()" class="fa fa-heart product__card__addfavorite_btn" aria-hidden="true"></i>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "Card",
    props: {
        cardInfo: {},
        isHidden: {type: Boolean, defaut : false},
    },  
    methods: {
        removeFromFavorites() {
            this.cardInfo.inFavorites = !this.cardInfo.inFavorites;
            this.$store.commit('REMOVE_ITEM_FROM_WISHLIST', {id: this.cardInfo.id});

            // post на сервер об удалении
            console.log("Удалено из избранного");
        },

        addToFavorites() {
            if (this.cardInfo.inFavorites == false) {
                this.cardInfo.inFavorites = !this.cardInfo.inFavorites;
                this.$store.commit('ADD_ITEM_TO_WISHLIST', {id: this.cardInfo.id});
                // post на сервер о добавлении 
                console.log("Добавлено в избранное");
            } 
            else {
                return this.removeFromFavorites();
            }
        },

        addToCart() {
            this.cardInfo.inCart = true;
            this.$store.commit('ADD_ITEM_TO_CART', {id: this.cardInfo.id, amount: 1, price: this.cardInfo.price});
        },

        removeFromCart() {
            this.cardInfo.inCart = false;
            this.$store.commit('DELETE_ITEM_FROM_CART', {id: this.cardInfo.id, amount: 1, price: this.cardInfo.price});
        }
    }
}
</script>

<style>

    .product__card {
        width: calc(25% - 1px);
        
        height: auto;
        cursor: pointer;
        
        margin: 1px 1px 10px 0px;
        padding: 10px;

        border: 1px solid #e9e9e9;
        border-radius: 20px;
        /* background-color: gray; */
        
        transition: box-shadow 0.2s ease-in-out;
    }

    .product__card:hover {
        box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
        
    }

    .product__card a {
        display: block;
    }

    .product__card a:hover {
        text-decoration: none;
        color: #333;   
    }
    
    .product__card__content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        
    }

    .display__none {
        display: none;
    }

    .product__card__content img {
        border-radius: 30px;
        width: 100%;
        height: auto;
    }

    .product__card__price {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0px 15px;

    }

    .product__card__price h1 {
        margin: 6px 0px 0px 0px;
        font-family: 'Montserrat';
        font-size: 22px;
    }

    .main__product__available {
        display: flex;
        align-items: center;
        
        font-family: 'Playfair Display';
        font-size: 12px;
        color: #333;
    }

    .main__product__available    img {
        margin-left: 10px;
        width: 8px;
    }

    #available {
        margin: 0px 0px 3px 5px;
    }

    #unavailable {
        color: #9c9c9c;
        margin: 0px 0px 3px 5px;
    }

    .product__card__title {
        margin: 2px 15px 0px 15px;

        font-family: 'Playfair Display';
        font-size: 12px;

        flex: 1 1 auto;
    }

    .card__rating {
        font-family: 'Playfair Display';
        font-size: 12px;
        line-height: 16px;
        color: #9c9c9c;

        display: flex;
        align-items: flex-start;
        
        margin: 10px 15px 0px 15px;
    }

    .rating__review__num {
        margin: 0px 0px 0px 5px;

        color: #cbcbcb;
        font-size: 12px;
    }

    .rating__index {
        margin: 0px 0px 0px 5px;

        color: #D885B6;
        font-size: 14px;
    }

    .product__card__buttons {
        display: flex;
        justify-content: center;

        margin: 10px 0px 0px 0px;
        
    }

    .product__card__buy__btn {
        width: 100px;
        height: 32px;
        z-index: 2;

        margin: 0px 15px;
        font-family: 'Playfair Display';
        
        
        font-size: 14px;
        background-color: #fff;
        color: #D885B6;
        border: 1px solid #D885B6;
        border-radius: 30px;

        transition: all 0.2s linear;
    }

    .in__cart {
        background-color: #D885B6;
        color:white;

    }

    .product__card__buy__btn:hover {
        color:white;
        background-color: #D885B6;
    }


    .product__card__buy__btn-gray {
        width: 100px;
        height: 32px;
        margin: 0px 15px;

        font-family: 'Playfair Display';
        font-size: 14px;
        
        background-color: #fff;
        color: #9c9c9c;
        border: 1px solid #9c9c9c;
        border-radius: 30px;

        transition: all 0.2s linear;
    }

    .product__card__addfavorite_btn {
        z-index: 2;
        display: flex;
        align-items: center;
        font-size: 18px;
        width: 32px;
        height: 32px;
        color: #f1f1f1;

        
        transition: color 0.2s ease-in-out;
    }

    .color__red {
        color: red;
    }

    .product__card__addfavorite_btn:hover {
        color: #cdcdcd;
    }

    .color__red:hover {
        color: red;
    }


    @media (max-width: 1200px) {
        .product__card {
            width: auto;
            max-width: calc(33% - 1px);
            height: auto;
        }

    }

    @media (max-width: 890px) {
        .product__card {
            width: auto;
            max-width: calc(50% - 1px);
            height: auto;

        }
    }
    @media (max-width: 575px) {
        .product__card {
            width: auto;
            max-width: 100%;
            height: auto;
        }
    }
    

</style>