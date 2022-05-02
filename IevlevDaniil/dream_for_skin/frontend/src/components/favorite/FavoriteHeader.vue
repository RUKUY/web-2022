<template>
    <div class="favorite__header">
        <div class="favorite__header__block">
            <span class="favorite__header__item">Товаров в списке: <span>{{$store.getters.getWishListProductsCount}}</span> шт.</span>
        </div>

    </div>
</template>

<script>
export default {
    name: "FavoriteContent",
    data() {
        return {

        }
    },
    props: {

    }
}
</script>

<style>
    .favorite__header {
        display: flex;

        width: 100%;
        min-height: 80px;
        padding: 10px 30px;
        margin: 10px 0px 20px 0px;

        border-radius: 30px ;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

        /* background-color: #addadd; */
    }
    .favorite__header__block {
        display: flex;
        align-items: center;
    }

    .favorite__header__item {
        font-size: 20px;
        font-family: 'Montserrat';

    }
    .favorite__header__item span {
        color: #D885B6;
        margin-left: 10px;
    }
    
    @media (max-width: 473px) {
        .favorite__header__item {
            font-size: 16px;
        }

    }

    @media (max-width: 320px) {
        .favorite__header__item {
            font-size: 14px;
        } 
    }


</style>