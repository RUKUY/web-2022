<template>
  <div class="header__narrow__content">
        <button 
            :style="{display: catalogButtonDisplay}" 
            @click="$store.commit('INVERT_MENU_CONDITION')" 
            type="button" 
            class="header__narrow__menu__btn">

            <img src="@/assets/icons/burger_line_list_menu_nav_navigation_option_icon_123231.svg" alt="">
            Каталог
        </button>
        <header-search 
            @hide-btn="hideButton" 
            @show-btn="showButton" 
            :whichId="1"  />

        <hidden-side-menu v-show="this.$store.getters.getSideMenuCondition" />

        
    </div>
</template> 

<script>

import HiddenSideMenu from '../HiddenSideMenu.vue'
import HeaderSearch from './HeaderSearch.vue'


export default {
    name: "NarrowContent",
    components: {
        HeaderSearch,
        HiddenSideMenu,
    },
    data() {
        return {
            catalogButtonDisplay: "flex",
        }
    },
    methods: {
        showButton() {
            this.catalogButtonDisplay = "flex"
        },
        hideButton() {
            this.catalogButtonDisplay = "none"
        }
    },
    computed: {
        
    },
}
</script>

<style>
    .header__narrow__content {
        display: none;
    }
    
    @media (max-width: 1060px){
        .header__narrow__content {
            display: flex;
            width: 100%;
            height: 50px;
            padding: 0px 10px;
            /* background-color: beige; */
        }

        .header__narrow__menu__btn {
            display: flex;
            justify-content: center;
            align-items: center;
            
            position: relative;
            width: 120px;
            margin: 0px 10px 0px 0px;

            color: #333;
            background-color: #fff;
            border: 2px solid #fff;
            border-radius: 25px;

            transition: all 0.4s linear;
            cursor: pointer;

            font-family: 'Playfair Display';
        }

        .header__narrow__menu__btn:hover {
            border: 2px solid #f1f1f1;
            background-color: #fafafa;
        }

        .header__narrow__menu__btn img {
            width: 20px;
            margin-right: 5px;
        }

    }
</style>