<template>
    <nav class="underheader__menu">
        <ul class="underheader__menu__list">
            <router-link :to="{name: 'home'}"><li class="underheader__menu__list__item">Главная</li></router-link>
            <a href="#"><li class="underheader__menu__list__item">Эксклюзив</li></a>
            <a href="#"><li class="underheader__menu__list__item">Быстрая доставка</li></a>
            <a href="#"><li class="underheader__menu__list__item">Подарки</li></a>
            <a href="#"><li class="underheader__menu__list__item">Бренды</li></a>
            <a href="#"><li class="underheader__menu__list__item">Распродажа</li></a>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "UnderheaderMenu", 
}
</script>

<style>  
    .underheader__menu {
        display: table;
        max-width: 1200px;
        width: 100%;
        height: 40px;
        
        padding: 0px;
        margin: 0px auto;
        
        /* background-color: #f7f7f7; */
    }

    .underheader__menu__list {
        font-size: 16px;
        font-family: 'Playfair Display';

        margin: 8px 10px;
        padding: 0px;

        list-style: none;
        display: flex;
        justify-content: space-between;

    }

    .underheader__menu__list__item {
        text-decoration: none;


    }

    .underheader__menu__list__item:hover {
        color: #D885B6;
    }

    @media (max-width: 1060px) {
        .underheader__menu {
            display: none;
        }
    }

</style>