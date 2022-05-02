<template>
    <div class="user__pillows__container">
        <div class="user__pillows">
            <div class="user__pillow">
                <p>Доставки<br><span class="pillow__highlighter">{{this.getDelivery()}}</span></p>
                <img src="@/assets/icons/Deliv.png" alt="">
            </div>

            <div class="user__pillow">
                <p>Покупки<br><span class="small__pillow__text">товаров в списке:</span><span class="pillow__highlighter">{{this.purchaseNumber}}</span></p>
                <img src="@/assets/icons/purch.png" alt="">
            </div>

            <div class="user__pillow favorite__pillow">
                <p>Избранное<br><span class="small__pillow__text">товаров в списке:</span><span class="pillow__highlighter">13</span></p>
                <img src="@/assets/icons/icon-wishlist.png" alt="">
            </div>
        </div>

        <div class="user__pillows">
            <div class="user__pillow__small">
                <p>Привязанные карты</p>
            </div>

            <div class="user__pillow__small">
                <p>Купоны</p>
            </div>
            
            <div class="user__pillow__small">
                <p>Электронные чеки</p>
            </div>

            <div class="user__pillow__small">
                <p>Настройки аккаунта</p>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    name: "UserPillows",
    props : {
        lowTextDelivery: {},
        purchaseNumber: {},
    },
    methods : {
        getDelivery() {
            if (this.lowTextDelivery == null) {
                return "Не ожидается"
            }

            //ищем доставку или она уже в переменной 
            return "Ожидается через день"
        },
    },
}
</script>

<style>

</style>