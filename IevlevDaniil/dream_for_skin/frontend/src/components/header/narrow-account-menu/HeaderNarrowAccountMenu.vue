<template>
    <div class="narrow__account__container">
        <account-menu-logined :user="user" v-if="$store.getters.getAuthCondition" />
        <account-menu-unlogined v-else />
    </div>
</template>

<script>
import AccountMenuLogined from './AccountMenuLogined.vue'
import AccountMenuUnlogined from './AccountMenuUnlogined.vue'
export default {
    name: 'HeaderNarrowAccountMenu',
    components : {
        AccountMenuLogined,
        AccountMenuUnlogined
        
    },
    props: {
        user: {},
    },
}
</script>

<style>
    
    .narrow__account__container {
        font-family: 'Playfair Display';

        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;

        z-index: 1;
        width: 100%;
        height: auto;
        padding: 10px;

        background-color: #fff;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.16);
        border-radius: 15px;
    }

    .narrow__account__container p {
        margin: 0px 0px 10px 0px;
        text-align: center;
    }

    .narrow__account__container img {
        width: 60px;
        height: 60px;

        margin: 0px 0px 5px 0px;

        border-radius: 50%;
    }

    #narrow__account__menu__nickname {
        color: #D885B6;
    }

    .narrow__account__menu {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        
    }

    .narrow__account__menu a {
        margin: 0px 0px 5px 0px;
    }

    .narrow__account__menu a {
        display: block;
    }

    .narrow__account__menu button {
        cursor: pointer;
        font-size: 14px;

        background-color: #fff;
        
        padding: 4px 8px;
        border: 1px solid #EBC3DF;
        border-radius: 20px;
    }

    .narrow__account__menu button:hover { 
        background-color: #EBC3DF;
        color: #fff;
    }

</style>