<template>
    <div class="auth">
        <login v-if="isLogin()"/>        
        <registration v-else/>        
    </div>
</template>

<script>
import Login from '../components/Login.vue'
import Registration from '../components/Registration.vue'


export default {
    name: "Auth",
    components: {
        Login,
        Registration,

    },
    data() {
        return {
            pageName: "",
        }
    },
    created() {
        this.pageName = this.$route.params.name;
        // console.log(this.pageName); 
    },
    methods : {
        isLogin() {
            if (this.$route.params.name == "login") return true;   
            return false;
        },
    }
}
</script>

<style>
    .auth {
        position: absolute;
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        font-family: 'Playfair Display';
        /* background-color: #40C9A2; */

    }
</style>