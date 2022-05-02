<template>
  <div type="button" class="hidden__menu__container">
        <div class="hiden__menu__content">
            <div class="logo__and__close">
                <img class="logo__icon" src="@/assets/images/main-logo.png">
                <div @click="$store.commit('INVERT_MENU_CONDITION')" class="close__btn__container">
                    <img id="close-menu-btn" src="@/assets/icons/close.png" alt="">
                </div>
            </div>
            <div class="hidden__menu__list">
                <router-link v-for="item in menuItems" :key="item.id" :to="{name: item.href}">{{item.name}}</router-link>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HiddenSideMenu",
    data() {
        return {            
            menuItems: [
                {id: 1, name: "Главная", href: "home"},
                {id: 2, name: "Эксклюзив", href: ''},
                {id: 3, name: "Быстрая доставка", href: ''},
                {id: 4, name: "Подарки", href: ''},
                {id: 5, name: "Бренды", href: ''},
                {id: 6, name: "Распродажа", href: ''}
            ]
        }
    },
    methods: {
       
    },
}
</script>

<style>

    .hidden__menu__container {
        position: fixed;
        top: 0;
        left: 0;

        height: 100%;
        width: 350px;
        z-index: 11;
        padding: 0px 10px;

        background-color: #fff;
        box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.3);

        font-family: 'Playfair Display';
        font-size: 22px;
    }

    .hidden__menu__content {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;

    }

    .logo__and__close {
        display: flex;
        justify-content: space-between;
        align-items: center;

        border-bottom: 1px solid #EBC3DF;
    }

    .close__btn__container {
        display: flex;
        align-items: center;

        width: 20px;
        height: 50px;
    }

    #close-menu-btn {
        width: 100%;
        cursor: pointer;

    }

    .hidden__menu__list {
        display: flex;
        flex-direction: column;

    }

    .hidden__menu__list a {
        color: #333;
        display: block;
        
        cursor: pointer;
        padding: 0px 0px 0px 0px;
        line-height: 40px;
        text-align: center;
    }

    .hidden__menu__list a:hover {
        background-color: #f1f1f1;
    }

    .menu__opened {
        overflow-y: hidden;
    }

    @media (max-width: 350px) {
        .hidden__menu__container {
            width: 100%;
        }
    }
</style>