<template>
    <footer class="footer__container">
        <div class="footer__content__container">
            <div class="footer__lists">
                <ul class="footer__list">
                    <span class="footer__list__title">Покупателям</span>

                    <li><a href="#">Как сделать заказ</a></li>
                    <li><a href="#">Способы оплаты</a></li>
                    <li><a href="#">Доставка</a></li>
                    <li><a href="#">Возврат товара и средств</a></li>
                </ul>
                <ul class="footer__list">
                    <span class="footer__list__title">Компания</span>

                    <li><a href="#">О нас</a></li>
                    <li><a href="#">Вакансии</a></li>
                    <li><a href="#">Реквизиты</a></li>
                </ul>
            </div>

            <div class="footer__contacts">
                <ul class="footer__list">
                    <span class="footer__list__title">Контакты</span>
                    <li>
                        <div class="footer__contacts__links">
                            <a href="#"><img src="@/assets/icons/vk.svg" alt=""></a>
                            <a href="#"><img src="@/assets/icons/telega.svg" alt=""></a>
                            <a href="#"><img src="@/assets/icons/YT.svg" alt=""></a>
                            <a href="#"><img src="@/assets/icons/insta.svg" alt=""></a>
                        </div>
                    </li>
                    <li>Телефон: <span id="telephones-number">{{companyInfo.phoneNumber}}</span></li>
                    <li><span class="footer__copyright">{{companyInfo.year}}, © {{companyInfo.copyright}}</span></li>
                    <li><span class="footer__copyright">All rights reserved.</span></li>
                </ul>   
                
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
    data() {
        return {
            companyInfo: {phoneNumber: "+7 (987) 654-32-10", year: "2022", copyright: "Dream for skin."}
        }
    },
}
</script>

<style>
        
    .footer__container {
        display: table;
        width: 100%;
        height: 180px;

        margin-top: 100px;
        border-top: 1px solid #EBC3DF;
        
    }

    .footer__content__container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        width: 100%;
        max-width: 1200px;
        height: 100%;
        margin: 0px auto;
        padding: 10px;

        /* background-color: #40C9A2; */
    }

    .footer__lists {
        display: flex;
        height: 100%;
    }

    .footer__list {
        list-style: none;
        text-decoration: none;
        font-family: 'Playfair Display';

        padding: 0px 0px 0px 10px;
    }

    .footer__list__title {
        color: #000;
        font-weight: 600;
    }


    .footer__list a {
        color: #333;
        font-size: 14px;

        transition: color 0.1s linear;
    }

    .footer__list a:hover {
        color: #D885B6;
    }

    .footer__contacts {
        height: 100%;
        margin-right: 32px;
    }


    .footer__contacts__links {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .footer__list li {
        color: #333;
        font-size: 14px;

        margin: 5px 0px 0px 0px; 
        transition: color 0.1s linear;
    }

    #telephones-number{
        font-family: 'Maiandra GD';
        font-size: 14px;   
    }

    .footer__copyright {
        font-family: 'Maiandra GD';
    }

</style>