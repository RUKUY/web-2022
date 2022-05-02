<template>
    <div class="unlogined">
        <img src="@/assets/images/user_icons/default.png" alt="">
        <p>Привет, Гость!</p>
        <div class="narrow__account__menu">
            <router-link  :to="{name: 'auth', params : {name: 'login'}}"><button type="button">Войти</button></router-link>
            <router-link  :to="{name: 'auth', params : {name: 'registration'}}"><button type="button">Регистрация</button></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "AccountMenuUnlogined",
    props: {

    },

}
</script>

<style>
    .unlogined {
        display: inherit;
        flex-direction: column;
        align-items: center;
    }
</style>