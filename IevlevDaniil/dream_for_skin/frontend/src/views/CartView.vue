<template>
    <div class="cart__container">
        <h3 class="cart__title">Корзина</h3>
        <cart-content />
    </div>
</template>

<script>
import CartContent from '../components/cart/CartContent.vue'
export default {
    name: "Cart",
    components: {
        CartContent

    },
    data() {
        return {
            
        }
    },

}
</script>

<style>
    .cart__container {
        display: table;
        
        width: 100%;
        max-width: 1200px;
        
        margin: 10px auto 0px auto;
        padding: 10px;

    }

    .cart__title {
        margin: 0px 0px 0px 30px;
        font-family: 'Playfair Display';
        font-size: 28px;
    }


    
</style>