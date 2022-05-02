<template>
    <div class="registration">
        <router-link :to="{name: 'home'}" class="register__logo">
            <div>
                <img src="@/assets/images/main-logo.png" alt="">
                <font>DREAM FOR SKIN</font>
            </div>
        </router-link>

        <div class="registration__container">
            <h1 class="register__title">Регистрация</h1>
            

            <div id="login-container" class="access__input">
                <input type="text" placeholder="Логин">
            </div>
            <div id="email-container" class="access__input">
                <input type="email" placeholder="E-mail">
            </div>
            <div id="password-container" class="access__input ">
                <input type="password" placeholder="Пароль">
            </div>
            <div id="re-password-container" class="access__input ">
                <input type="password" placeholder="Пароль еще раз">
            </div>

            <div class="btn__and__ask">
                <button class="registration__btn" type="button">Зарегистрироваться</button>    
            </div>
            
            <div class="low-asking__text">
                <span>Уже есть аккаунт? <router-link :to="{name: 'auth', params : {name: 'login'}}" id="swap-btn">Войти!</router-link></span>
            </div>

        </div>   
    </div>
</template>

<script>
export default {
    name: "Registration",
    

}
</script>

<style>
    .registration {
        display: table;
        min-width: 250px;
        
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.16);
        border-radius: 30px;
        padding: 15px 10px;
        background-color: #fff;
    }

    .register__logo div {
        position: relative;
        
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 100%;
            
    }

        
    .register__logo font {
        font-family: 'Maiandra GD';
        font-size: 20px;
        color: #333;

        margin: 10px 0px 0px 0px;
    }

    .register__logo img {
        width: 70px;
        height: 70px;
        
    }   

    .register__title {
        font-size: 32px;
        font-weight: 400;
        margin: 20px 0px 40px 0px;
    }
        
        
    .registration__container {
        display: flex;    
        flex-direction: column;

        align-items: center;
    }

    .registration__btn {
        font-size: 18px;
        cursor: pointer;
        
        width: 200px;
        height: 50px;
        margin: 30px 0px 0px 0px;

        border: 1px solid #EBC3DF;
        border-radius: 25px;
        background-color: #fff;
        
        transition: color 0.2s linear;
        transition: background-color 0.1s linear;
        
    }

    .registration__btn:hover {
        background-color: #EBC3DF;
        color: #fff;
    }

    .registration__btn:active {
        background-color: #D885B6;
        color: #fff;
    }

    @media (max-width: 360px) {
        .registration {
            border: none;
            box-shadow: none;
            padding: 15px 5px;
        }

    }

</style>