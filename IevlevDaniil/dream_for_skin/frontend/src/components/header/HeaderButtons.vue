<template>
    <div class="header__buttons">
        <router-link :to="{name: 'favorites'}" class="header__buttons__link"><button class="button__rounded" type="button"><img class="button__icon" src="@/assets/icons/icon-wishlist.png"></button></router-link>
        <router-link :to="{name: 'cart'}" class="header__buttons__link"><button class="button__rounded" type="button"><img class="button__icon" src="@/assets/icons/icon-cart.png"></button></router-link>
        <button @click="showAccountNarrowMenu" class="button__rounded header__buttons__link" type="button"><img class="button__icon" src="@/assets/icons/icon-user.png"></button>
        
        <header-narrow-account-menu :user="user" v-show="isUserHiddenPanelVisible"/>

    </div>
</template>

<script>
import HeaderNarrowAccountMenu from './narrow-account-menu/HeaderNarrowAccountMenu.vue'
export default {
    name: 'HeaderButtons',
    components : {
        HeaderNarrowAccountMenu,

    },
    props: {
        user: {},
    },
    data() {
        return {
            isUserHiddenPanelVisible: false,
        }
    },
    methods : {
        showAccountNarrowMenu() {
            this.isUserHiddenPanelVisible = !this.isUserHiddenPanelVisible;
        },
    },


    
}
</script>

<style>
    
    .header__buttons {
        position: relative;
        height: 100%;
        /* background-color: aqua; */
    }

    .button__rounded {
        height: 50px;
        width: 50px;
        margin: 15px 0px;
        cursor: pointer;
        border: 2px solid #fff;
        border-radius: 25px;
        background-color: #fff;

        transition: all 0.4s linear;  
    }

    .header__buttons__link + .header__buttons__link {
        margin-left: 15px;
    }

    .button__rounded:hover {
        border: 2px solid #f1f1f1;
        background-color: #fafafa;
    }

    .button__icon {
        width: 30px;
        height: 30px;
    }
    
    @media (max-width: 430px){
    .header__buttons__link + .header__buttons__link {
        margin-left: 8px;
    }

    }
</style>