<template>
    <div class="main-layout">
        <main-header :user="user"/>
        <underheader-menu />
    
        <slot />
        
        <main-footer />
    </div>
</template>

<script>
import MainHeader from "../components/header/Header.vue"
import UnderheaderMenu from '../components/UnderheaderMenu.vue'
import MainFooter from '../components/Footer.vue'

export default {
    name: "MainLayout",
    components: {
        MainHeader,
        UnderheaderMenu,
        MainFooter,
    },
    data() {
        return {
            user: null,
        }
    },
    created() {
        this.user = JSON.parse(localStorage.getItem('user'));
        if (this.user != null)  
            this.$store.commit('LOGIN', this.user);
    },

}
</script>

<style>

</style>