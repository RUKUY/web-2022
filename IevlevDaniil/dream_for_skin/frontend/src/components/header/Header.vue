<template>
    <header class="header__container ">
        <div class="header__content">
            <router-link :to="{name: 'home'}">    
                <div class="logo__container">
                    <img class="logo__icon" src="@/assets/images/main-logo.png">
                    <font class="logo__title">DREAM FOR SKIN</font>

                </div>
            </router-link>
            
            <header-search id="upper-search" :whichId="0" />
            <header-buttons :user="user" />
        </div>

        <header-narrow-content />

    </header>
    
</template>

<script>
import HeaderSearch from './HeaderSearch.vue'
import HeaderButtons from './HeaderButtons.vue'
import HeaderNarrowContent from './HeaderNarrowContent.vue'

export default {
    name: "Header",
    components: {
        HeaderSearch,
        HeaderButtons,
        HeaderNarrowContent
    },
    props: {
        user: {},

    }
}
</script>

<style>
    .header__container {
        width: 100%;
        border-bottom: 1px solid #EBC3DF;
    }

    .header__content {
        display: flex;
        height: 80px;
        width: 100%;
        max-width: 1200px;
        
        margin: 0px auto;
        padding: 0px 10px;
        justify-content: space-between;
    }

    .logo__container {
        height: 100%;
        display: flex;
        align-items: center;

        /* background-color: #D885B6; */
    }

    .logo__icon {
        width: 60px;
        height: 60px;
        
        margin: 10px 0px;
    }

    .logo__icon img {
        image-rendering: optimizeSpeed;
    }

    .logo__title {
        font-size: 18px;
        font-family: 'Maiandra GD';
        color: #333;
        margin-left: 10px;
    }
    @media (max-width: 1060px) {
        #upper-search {
            display: none;
        }

    } 
    @media (max-width: 500px) {
        .logo__title {
            display: none;
        }
    }   
</style>