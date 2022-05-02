<template>
    <div class="logined">
        <img src="@/assets/images/user_icons/me.png" alt="">
        <p>Привет, <span id="narrow__account__menu__nickname">{{userData.nickname}}</span>!</p>
        <div class="narrow__account__menu logined__menu">
            <router-link :to="{name: 'user', params : {id: userData.id}}">Аккаунт</router-link>
            <a href="#">Настройки</a>
        </div>
        <button @click="logout()" class="narrow__account__menu__quit">Выйти</button>
    </div>
</template>

<script>
export default {
    name: "AccountMenuLogined",
    data() { 
        return {
            userData: {},
        }
    },
    props: {
        user: {},
    },
    created() {
        // обращаемся к серверу что-то там происходит, и получаем данные юзера

        this.userData = {id: this.user.id, nickname: "Филиппок"}

    },

    methods: {
        logout(){
            this.$store.commit('LOGOUT');
            console.log("Вы типа вошли");
        },

    },

}
</script>

<style >
    .logined {
        display: inherit;
        flex-direction: column;
        align-items: center;
    }


    .logined__menu {
        display: block;
        cursor: pointer;
        text-align: center;
        margin: 0px 0px 8px 0px;

        border-bottom: 1px solid #EBC3DF;
    }

    .logined__menu a {
        width: 100%;
        padding: 2px;
        color: #333;
    }

    .logined__menu a:hover {
        background-color: #f1f1f1;
    }
    
    .narrow__account__menu__quit {

        background-color: #fff; 
        border: none;
        color: #333;

    }

    .narrow__account__menu__quit:hover {
        color: #D885B6;
    }


</style>