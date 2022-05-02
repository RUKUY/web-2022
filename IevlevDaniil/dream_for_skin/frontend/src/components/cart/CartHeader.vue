<template>
    <div class="cart__content__header">
        <div class="cart__content__header__block">
            <span class="cart__product__header__item">Товаров в корзине: <span>{{$store.getters.getCartProductsCount}} </span>шт.</span>
            <span class="cart__product__header__item">Доставка: <span>{{totalDelivPrice}} ₽</span></span>
            <span class="cart__product__header__item cart_price">Итого: <span>{{$store.getters.getCartTotalPrice}} ₽</span></span>
        </div>

        <div class="cart__content__header__block right__cart__header">
            <span class="class__header__paymethod">Способ оплаты: <span>картой</span></span>
            <button class="class__header__paybutton" type="button">Оплатить заказ</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "CartHeader",
    data() {
        return {
            totalDelivPrice: 0,
            totalPrice: 0,
        }
    },
    props : {
        cartItems: [],
    },
    created() {
        this.calculateDeliveryPrice();
        this.calculateTotalPrice();
    },
    methods : {
        calculateDeliveryPrice() {
            let price = 0;

            return 0;
        },

        calculateTotalPrice() {
            let vm = this;

            this.cartItems.forEach(item => {
                vm.totalPrice += item.price * item.amount;
            });
            console.log(this.totalPrice);
        },
    },

}
</script>

<style>
    .cart__content__header {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        width: 100%;
        min-height: 100px;
        max-height: 300px;
        padding: 10px 30px; 


        border-radius: 30px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        background-color: #fff;
    }

    .cart__content__header__block {
        display: flex;
        flex-direction: column;
        justify-content: center;

        font-family: 'Montserrat';
    }

    .right__cart__header {
        align-items: center;
    }

    .cart__product__header__item {
        font-weight: 500;
        font-size: 14px;
        
        color: #8c8c8c;

        width: 200px;
        margin: 0px 0px 0px 0px;

    }

    .cart__product__header__item span {
        margin: 0px 0px 0px 10px;
        color: #EBC3DF;
    }
    
    .cart_price {
        font-weight: 600;

        margin-top: 5px;
        font-size: 20px;
        color: #333;
    }
    
    .cart_price span{
        color: #D885B6;
    }   

    .class__header__paymethod {
        margin: 0px 0px 10px 0px;
        font-size: 14px;
    }

    .class__header__paymethod span {
        text-decoration: underline #D885B6;
        
    }

    .class__header__paybutton {
        color: #fff;
        width: 180px;
        height: 40px;

        border: none;
        border-radius: 20px;
        background-color: #D885B6;
    }

    .class__header__paybutton:active {
        
        background-color: #D885B6;

    }
    
    @media (max-width: 473px) {
        .cart__content__header {
            width: 90%;
            margin: 0px auto;
            justify-content: space-around;
        }

        .cart__product__header__item {
            text-align: center;
        }

        .right__cart__header {
            margin-top: 20px;

        }
    }

</style>