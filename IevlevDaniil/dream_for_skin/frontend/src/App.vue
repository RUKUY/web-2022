<template>
  <div id="app">
    
    <component :is="layout">
        <router-view />
    </component>

  </div>
</template>

<script>

import AuthLayout from '@/layouts/AuthLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'

export default {
    name: "App",
    components: {
        AuthLayout,
        MainLayout,
        
    },
    computed: {
        layout() {
            return this.$route.meta.layout;
        }
    },
} 
  

</script>
    


<style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap');
    
    
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: #333;
    }

    :active, :hover, :focus {
        outline: 0;
        outline-offset: 0;
    }   

    .overfl-hid {
        overflow: hidden;
    } 



</style>

