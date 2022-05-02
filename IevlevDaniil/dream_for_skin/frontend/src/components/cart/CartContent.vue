<template>
    <div class="cart__content">
        <cart-header :cartItems="this.shortItemsInfo"/>

        <h3 v-if="isCartEmpty" class="empty__cart__alert">Корзина пуста</h3>
        <div v-else class="cart__content__items">
            <cart-item 
                v-for="item in this.shortItemsInfo"
                :key="item.id"
                :shortProductInfo="item"
                @reloadProducts="reloadCartItems"/>            
                
            
        </div>
    </div>
</template>

<script>

import CartHeader from './CartHeader.vue'
import CartItem from './CartItem.vue'

export default {
    name: 'CartContent',
    components: {
        CartItem,
        CartHeader
    },
    data() {
        return {
            shortItemsInfo : [],
            isCartEmpty: (this.$store.getters.getCartProductsCount == 0),
        }
    },
    created() {
        // получаем с сервера короткую инфу о товаре испльзуя $store.getters.getCartProducts
        
        this.shortItemsInfo = [{id: 1, title: "Пенка для умывания Baking Powder Pore Cleansing Foam от бренда Etude House", price: 200, amount: 2, balance: 16},
                               {id: 5, title: "Другая пенка для умывания Baking Powder Pore Cleansing Foam от бренда Etude House", price: 300, amount: 1, balance: 5}]
    },

    methods: {
        reloadCartItems(product) {
            // обновляем короткую инфу о товаре испльзуя запрос с сервера 

            // как заглушка пока нет обращения к серверу 
            console.log(product.id);
            
            let index = -1;
            for (let i = 0; i < this.shortItemsInfo.length; i++) {
                if (this.shortItemsInfo[i].id == product.id) {
                    index = i;
                    break;
                }
            }
    
            if (index == -1) { 
                return;
            } 

            this.shortItemsInfo.splice(index, 1);
        }
    },  


}
</script>

<style>
    
    .cart__content {
        width: 100%;
        height: 600px;

        margin: 10px 0px 0px 0px;

    }

    .cart__content__items {
        width: 100%;
        height: auto;

        margin: 20px 0px 0px 0px;
    }
    .empty__cart__alert {
        margin: 30px 0px 0px 0px;
        text-align: center;
        font-family: 'Playfair Display';
    }


</style>