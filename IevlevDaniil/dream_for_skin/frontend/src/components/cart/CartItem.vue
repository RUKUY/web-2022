<template>
    <div class="cart__content__item">
        <router-link :to="{name: 'product', params: {id: shortProductInfo.id}}">
            <div class="cart__item__leftside">
                <img src="@/assets/images/products/bakin_pow.png" alt=""> 
                <div class="cart__item__info">
                    <span class="cart__item__title">{{shortProductInfo.title}}</span>
                </div>
            </div>
        </router-link>

        <div class="cart__item_adder">
            <button @click="minusProduct" type="button" class="cart__item__btn"><i class="fa fa-minus" aria-hidden="true"></i></button>
            <span>{{shortProductInfo.amount}}</span>
            <button @click="addProduct" type="button" class="cart__item__btn"><i class="fa fa-plus" aria-hidden="true"></i></button>
        </div>

        <div class="cart__item__buttons">
            <span class="cart__item__price">{{this.totalCost}}&nbsp;₽</span>


            <button @click="deleteFromCart" class="cart__item__btn cart-bin-btn" type="button"><img src="@/assets/icons/bin.png" alt=""></button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CartItem',
    props: {
        shortProductInfo : {},
    },  
    data(){
        return {
             totalCost: 0,
        }
    },
    created() {
        this.recalculateСost();
    },
    methods : {
        addProduct() {
            if (this.shortProductInfo.amount >= this.shortProductInfo.balance) {
                return;
            }

            this.$store.commit('PLUS_ITEM', {id: this.shortProductInfo.id, price: this.shortProductInfo.price});
            this.shortProductInfo.amount++;
            this.recalculateСost();
        },
        minusProduct() {
            if (this.shortProductInfo.amount <= 1) {
                return;
            }

            this.$store.commit('MINUS_ITEM', {id: this.shortProductInfo.id, price: this.shortProductInfo.price});
            this.shortProductInfo.amount--;
            this.recalculateСost();
        }, 

        deleteFromCart() {
            this.$store.commit('DELETE_ITEM_FROM_CART', {id: this.shortProductInfo.id, price: this.shortProductInfo.price});
            this.$emit('reloadProducts', {id: this.shortProductInfo.id});           
        },

        recalculateСost() {
            this.totalCost = this.shortProductInfo.price * this.shortProductInfo.amount;  
        }
    },
}
</script>

<style>
    .cart__content__item {
        display: flex;
        justify-content: space-between;

        width: 100%;
        min-height: 150px;

        margin: 0px 0px 10px 0px;
        padding: 10px;

        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        border-radius: 30px;
        background-color: #fff;
        
    }

    .cart__item__leftside {
        display: flex;

        position: relative;
        width: auto;
        height: 100%;
    }

    .cart__item__leftside img {
        width: 130px;
        height: 130px;
        border-radius: 30px;
        height: 100%;
    }  
    

    .cart__item__info {
        margin: 10px 0px 10px 10px;
    }

    .cart__item__title {
        font-family: 'Playfair Display';
        font-size: 16px;
    }

    .cart__item__buttons {
        display: flex;
        flex-direction: column;

        align-items: center;
        
        margin: 5px 0px 5px 10px;

    }    
    
    .cart__item__price {
        font-family: 'Montserrat';
        font-size: 20px;
        text-align: center;
        flex: 1 1 auto;
    }
    
    .cart__item_adder {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .cart__item_adder span {
        margin: 0px 10px 0px 10px;
    }

    .cart__item__btn {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 30px;
        height: 30px;

        font-family: 'Montserrat';

        color: #d885b6;
        border: 1px solid #d885b6;
        border-radius: 50%;
        background-color: white;
    }
    
    .cart-bin-btn { 
        align-self: center;
        
        border: 1px solid #fff;
        width: 40px;
        height: 40px;
    }

    .cart-bin-btn:active { 
        background-color: #f2f2f2;
    }

    .cart-bin-btn:hover { 
        background-color: #f2f2f2;
    }

    .cart-bin-btn img { 
        opacity: 0.2;

        border-radius: 0px;
        width: 20px;
        height: 20px;
    }

    @media (max-width: 600px) {
        .cart__content__item {
            flex-wrap: wrap;
        } 
    }

    @media (max-width: 600px) {
        .cart__item__title {
            font-size: 12px;
        }
        .cart__item__leftside img {
            width: 100px;
        }
    }


</style>