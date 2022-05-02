<template>
    <div class="product__representation__container">
        <div class="product__representation">
            <div class="product__image__container">
                <img :src="require('@/assets/images/products/' + product.img)" alt="">
            </div>

            <div class="product__data__container">
                <div class="product__title">{{product.title}}</div>

                <div class="product__rating-and-code">
                    <div class="product__rating">Рейтинг: <span>{{product.rating}}</span></div>

                    <div class="product__code">код товара: {{product.productCode}}</div>
                </div>

                <div class="product__price">{{product.price}} ₽</div>

                <div v-if="product.isAvailable" class="product__available">
                    <img id="product-available" src="@/assets/icons/green_cicle.svg" alt="">
                    <span>В наличии</span>
                </div>

                <div v-else class="product__available">
                    <img id="product-available" src="@/assets/icons/gray_cicle.svg" alt="">
                    <span>Нет в наличии</span>
                </div>

                <div class="product__number__container">
                    <span @click="minusProduct" class="minus-product"><button class="zero__style">-</button></span>
                    <span  class="product-number">{{currentProductNumber}}</span>
                    <span @click="plusProduct" class="plus-product"><button class="zero__style">+</button></span>
                </div>
                
                <div class="product__buttons">
                    <button v-if="!product.inCart" 
                        type="button"
                        class="add-to-cart-btn" 
                        @click="addToCart"  
                        :class="{'' : product.isInCart}">
                        <span>В корзину</span>
                    </button>
                    <router-link :to="{name: 'cart'}"  v-else>
                        <button type="button"
                            class="add-to-cart-btn incart-btn" 
                            :class="{'' : product.isInCart}">
                            <span>В корзине</span>
                        </button>
                    </router-link>
                    <button @click="addToFavorites" class="add__to__favorite-btn" :class="{'favorite__active': product.inFavorites}" type="button">
                        <span v-if="!product.inFavorites">В избранное {{product.inFavorites}}</span>
                        <span v-else>В избранном {{product.inFavorites}}</span>
                    </button>                
                    <i @click="addToFavorites" :class="{'favorite__narrow__active': product.inFavorites }" class="fa fa-heart add-to-favorite-narrow-btn" aria-hidden="true"></i>
                </div>
            </div>
        </div>
        
        <div class="product__about">
            <h3 class="product_headliner">О товаре</h3>
            <p>
                {{product.about}}
            </p>
        </div>  

        <product-reviews :reviews="product.comments" />
    </div>
</template>

<script>
import ProductReviews from './ProductReviews.vue'


export default {
    name: "ProductRepresentation",
    components: { 
        ProductReviews, 
    },
    props: {
        product: {},
        
    },
    data() {
        return {
            currentProductNumber: 1,
        }
    },
    created() {

    }, 
    methods: {
        addToCart() {
            this.product.inCart = true;

            console.log("Добавлено в корзину");
            this.$store.commit('ADD_ITEM_TO_CART', {id: this.product.id, amount: this.currentProductNumber, price: this.product.price});
            // post на бек
        },

        removeFromFavorites() {
            this.product.inFavorites = !this.product.inFavorites;
            this.$store.commit('REMOVE_ITEM_FROM_WISHLIST', {id: this.product.id});

            // post на сервер об удалении
            console.log("Удалено из избранного");
        },

        addToFavorites() {
            if (this.product.inFavorites == false) {
                this.product.inFavorites = !this.product.inFavorites;
                this.$store.commit('ADD_ITEM_TO_WISHLIST', {id: this.product.id});
                // post на сервер о добавлении 
                console.log("Добавлено в избранное");
            } 
            else {
                return this.removeFromFavorites();
            }
        },

        minusProduct() {
            if (this.currentProductNumber < 2) return;
            else {
                this.currentProductNumber--;
            }
        },

        plusProduct() {
            if (this.currentProductNumber >= this.product.balance) return;
            else {
                this.currentProductNumber++;
            }
        },


    },
}
</script>

<style>
    .zero__style {
        border: none;
        background-color: #fff;
    }

    .product__representation__container {
        display: block;
        width: 100%;
        max-width: 1200px;

        margin: 10px auto 0px auto;
        padding: 10px 25px;
        
        /* background-color: bisque;    */
    }
    .product__representation {
        position: relative;
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: auto;
    }

    .product__image__container {
        flex-shrink: 0;
        margin: 0px 20px 0px 0px;
        width: 460px;
        height: 460px;
    }
    
    .product__image__container img {
        width: 100%;
        border-radius: 30px;
    }   

    .product__data__container {
        display: flex;
        flex-direction: column;
        width: 100%;         
    }

    
    .product__title {
        /* flex: 1 1 auto; */
        text-align: justify;

        font-family: 'Playfair Display';
        font-size: 28px;
        width: 100%;
        
    }

    .product__rating-and-code {
        margin: 10px 10px 0px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

    }

    .product__rating {
        font-family: 'Playfair Display';
        font-size: 18px;
        height: 30px;    
        width: 210px;
        /* background-color: beige; */

    }

    .product__rating span {
        font-family: "Playfair Display";
        font-style: italic;
        font-size: 22px;
        color: #D885B6;

        margin: 0px 0px 0px 5px;
        
    }

    .product__code {
        font-family: "Montserrat";
        font-size: 14px;
        color: #CBCBCB;

        /* background-color: #A3F7B5; */
    }


    .product__price {
        font-family: 'Montserrat';
        font-size: 48px;
        
        margin: 30px 10px;
        line-height: 48px;

        /* background-color: cadetblue; */

    }

    .product__available {
        margin: 0px 0px 0px 10px;
        display: flex;
        align-items: center;
    }

    .product__available img {
        width: 17px;
        height: auto;
    }

    .product__available span {
        font-size: 16px;
        font-family: 'Playfair Display';
        margin: 0px 0px 0px 10px;
    }

    .product__number__container {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        width: 160px;
        height: 55px;
        margin: 10px 0px 0px 10px;

        border: 1px solid #9c9c9c;
        border-radius: 30px;

        font-family: 'Montserrat';
        font-size: 24px;
    }

    .minus-product {
        position: absolute;
        cursor: pointer;
        left: 15px;
    }


    .plus-product {
        position: absolute;
        cursor: pointer;
        right: 15px;
    }

    .product-number {
        cursor:default;
    }

    .product__buttons {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin: 30px 10px 0px 10px;

        font-family: 'Playfair Display';
        font-size: 18px;

        background-color: #fff;
    }

    .add-to-cart-btn {
        width: 160px;
        height: 55px;

        border: none;
        border-radius: 30px;

        color: #fff;
        background-color: #D885B6;

        transition: box-shadow 0.2s ease-in-out;
        
    }

    .add-to-cart-btn:hover {
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.4);
    }

    .incart-btn {
        color: #333;
        border: 1px solid #D885B6;
        background-color: #fff;
    }

    .add__to__favorite-btn {
        width: 200px;
        height: 55px;

        border: 1px solid #9c9c9c;
        border-radius: 30px;

        color: #333;
        background-color: #fff;
        
        transition: box-shadow 0.3s ease-in-out;
        /* transition: border 0.9s linear; */
    }

    .add__to__favorite-btn:hover {
        color: #F55F5F;
        border-color: #F55F5F;
        box-shadow: 0px 0px 8px rgba(245, 95, 95, 0.5);
    }


    .add-to-favorite-narrow-btn {
        display: none;

        margin: 0px 0px 0px 20px;
        font-size: 30px;
    }

    .favorite__active {
        color: #F55F5F;
        border-color: #F55F5F;
        box-shadow: 0px 0px 8px rgba(245, 95, 95, 0.5);
    }

    .favorite__narrow__active {
        color: #F55F5F;
    }

    .product__about {
        position: relative;
        text-align: justify;

        width: 100%;
        height: auto;
        
        margin: 40px 0px 0px 0px;
        padding: 5px 0px;
            
        font-family: 'Playfair Display';
    }

    .product_headliner {
        font-size: 20px;
        margin: 0px 0px 0px 25px;
        
        color: #333;
    }

    .product__about p {
        font-size: 16px;
        margin: 5px 0px 0px 0px;

        color: #9c9c9c;
    }


    @media (max-width: 1200px) {
        .product__image__container {
            /* flex-shrink: 0; */
            margin: 0px 20px 0px 0px;
            width: 400px;
            height: 400px;
        
            /* background-color:thistle; */
        }
    }

    @media (max-width: 890px) {
        
        .product__representation {
            flex-wrap: wrap;
        }

        .product__image__container {
            flex-shrink: 0;
            margin: 0px auto 0px auto;
            width: 90%;
            height: auto;

        }

        .product__rating {
            font-size: 18px;
        }

    }

    @media (max-width: 575px) {
        .product__card {
            width: auto;
            max-width: 100%;
            height: auto;
        }

        .product__image__container {
            width: 100%;
        }

        .product__title {
            font-size: 24px;        
        }

        .product__rating {
            font-size: 16px;
        }   

        .product__rating span {
            font-size: 18px;

        }

    }

    @media (max-width: 500px) {
        .product__representation__container {
            padding: 10px 10px;
        }

        .product__title {
            font-size: 18px;        
        }    

        .product__price {
            font-size: 34px;
        }   

        .product__rating {
            font-size: 14px;
        }   

        .product__rating span {
            font-size: 16px;

        }

    }

    @media (max-width: 430px) {
        .add__to__favorite-btn {
            display: none;
        }

        .add-to-favorite-narrow-btn {
            display: block;
            color: #f1f1f1;
        }

        .favorite__narrow__active {
            color: #F55F5F;
        }

    }


</style>