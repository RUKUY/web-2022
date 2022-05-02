<template>
    <div class="login">
        <div class="login__content">
                <router-link :to="{name: 'home'}" class="login__logo">
                    <div>
                        <img src="@/assets/images/main-logo.png" alt="">
                        <font>DREAM FOR SKIN</font>
                    </div>
                </router-link>
                    
                    
                <div class="login-password__container">

                    <h1 class="login__title">Авторизация</h1>
                    
                    <div id="email-container" class="access__input">
                        <input type="text" placeholder="Логин">
                    </div>
                    <div id="password-container" class="access__input ">
                        <input type="password" placeholder="Пароль">
                    </div>
                </div>

                <div class="btn__and__ask">
                    <button @click="getLoginResult()" class="login__btn" type="button">Войти</button>    
                </div>
                
                <span class="low-asking__text"><a href="">Забыли пароль?</a></span>
                <div class="low-asking__text">
                    <span>Новый пользователь? <router-link :to="{name: 'auth', params: {name: 'registration'}}">Зарегистрироваться</router-link></span>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    methods: {
        getLoginResult() {
            // запрос к серверу 
            
            this.$store.commit('LOGIN', {id: 2, token: "DA_ETO_ON"});
            console.log("Вы типа вошли");
            location.href = '/';
        },
    },
}
</script>

<style>
    .login {
        display: table;
        min-width: 280px;
        
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.16);
        border-radius: 30px;

        background-color: #fff;
    }
    .login__content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        
        width: 100%;
        height: 100%;

        padding: 15px;
    }

    .login__logo div {
        position: relative;
        
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 100%;
    }

        
    .login__logo font {
        font-family: 'Maiandra GD';
        font-size: 20px;
        color: #333;

        margin: 10px 0px 0px 0px;
    }

    .login__logo img {
        width: 70px;
        height: 70px;
        
    }   

    
    .login__title {
        font-size: 32px;
        font-weight: 400;
        margin: 20px 0px 40px 0px;
    }

    .login-password__container {
        display: flex;    
        flex-direction: column;

        align-items: center;
        
    }

    .access__input {
        width: 260px;
        height: 40px;
        
        border: 1px solid #cdcdcd;
        border-radius: 12px;
        padding: 0px 10px 0px 10px; 

        transition: border 0.2s ease-in-out;
        
    }

    .access__input + .access__input{
        margin: 15px 0px 0px 0px;   
    }

    .access__input input {
        font-size: 16px;
        line-height: 16px;

        width: 100%;
        height: 100%;
        

        border: none;
    }

    .btn__and__ask {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .low-asking__text{
        display: block;

        margin: 30px 0px 0px 0px;

        color: #707070;
        text-align: center;
    }

    .low-asking__text a {
        color: #D885B6;
    }

    .low-asking__text a:hover {
        text-decoration: underline solid;
    }

    .login__btn {
        font-size: 18px;
        cursor: pointer;
        
        width: 140px;
        height: 50px;
        margin: 30px 0px 0px 0px;

        border: 1px solid #EBC3DF;
        border-radius: 25px;
        background-color: #fff;
        
        transition: color 0.2s linear;
        transition: background-color 0.1s linear;
        
    }

    .login__btn:hover {
        background-color: #EBC3DF;
        color: #fff;
    }

    .login__btn:active {
        background-color: #D885B6;
        color: #fff;
    }

    @media (max-width: 360px) {
        .login {
            border: none;
            box-shadow: none;
        }

        .login__content {
            padding: 15px 5px;
        }
    }
</style>