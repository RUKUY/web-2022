<template>
    <div class="user">
        <div class="user__container__content">
            <div class="user__data__container">
                <img src="@/assets/images/user_icons/me.png" alt="">
                <div class="user__info">
                    <h3>{{userShortInfo.nickname}}</h3>
                    <span>{{userShortInfo.phoneNumber}}</span>
                    <a href="">Личные данные</a>
                </div>
            </div>
            
            <user-pillows 
                :purchaseNumber="this.userShortInfo.purchaseNumber"
                :lowTextDelivery="this.userShortInfo.nearestDelivery"/>
        </div>
     
    </div>    
</template>

<script>
import UserPillows from '../components/UserPillows.vue'
export default {
    name: "App",
    components: {
        UserPillows,
    },
    data() { 
        return {
            userShortInfo: {id: 1, nickname: 'Филиппок', phoneNumber: '+7 (999) 999-99-99', nearestDelivery: null, purchaseNumber: 4},    
        }
    },

    created() {
        // запрос о короткой инфе
    }

}

</script>

<style>
    .user {
        display: table;
        
        width: 100%;
        max-width: 1200px;
        
        /* border: 1px solid #40C9A2; */
        margin: 30px auto 0px auto;
        padding: 0px 10px;

        font-family: 'Playfair Display';
    }
       
    .user__container__content {
        display: flex;
        flex-direction: column;
        
        /* border: 1px solid black; */

    }

    .user__data__container {
        display: flex;
        align-items: center;
        justify-content: center;

        height: 140px;
        padding: 0px 15px;
        border-radius: 25px;
    }

    .user__data__container img {
        width: 120px;
        height: 120px;

        border-radius: 50%;
    }

    .user__info {
        display: flex;
        flex-direction: column;
        margin: 0px 0px 0px 20px;
    
    }

    .user__info h3 {
        font-size: 24px;
        margin: 0px 0px 10px 0px;
    }

    .user__info span {
        font-size: 14px;
        margin: 0px 0px 10px 0px;
    }

    .user__info a {
        font-size: 14px;
    }

    .user__info a:hover {
        color: #D885B6;
    }

    .user__pillows {
        display: flex;
        flex-wrap: wrap;    
        justify-content: space-between;

        margin: 30px 0px 0px 0px;
        width: 100%;
    }

    .user__pillow {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        cursor: pointer;

        height: 200px;
        width: 100%;
        max-width: calc(33% - 10px);
        min-width: 300px;
        padding: 20px;
        margin: 0px 10px 0px 0px;
        

        border-radius: 25px;
        background-color: #fff;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);

        transition: box-shadow 0.4s ease-in-out;
    } 

    .user__pillow:last-child {
        margin: 0px 0px 0px 0px;
    }

    .user__pillow:hover {
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
    }

    .user__pillow img {
        width: 60px;
        height: 60px;

        margin: 0px 0px 0px 0px;
    }

    .user__pillow p {
        font-weight: 600;
        font-size: 18px;

        margin: 0px 0px 0px 0px;
    }

    .pillow__highlighter {
        margin: 0px 0px 0px 10px;
        font-size: 18px;

        color: #D885B6;
    }

    .favorite__pillow {
        color: #333;

        box-shadow: 0px 0px 4px rgba(245, 95, 95, 0.5);
    }

    .favorite__pillow:hover {
        box-shadow: 0px 0px 15px rgba(245, 95, 95, 0.5);
    }

    .user__pillow__small {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        cursor: pointer;

        height: 100px;
        width: 100%;
        max-width: calc(25% - 10px);
        min-width: 100px;
        padding: 20px;
        margin: 0px 10px 0px 0px;
        

        border-radius: 25px;
        background-color: #fff;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);

        transition: box-shadow 0.4s ease-in-out;
    }

    .user__pillow__small:hover {
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
    }

    .user__pillow__small p {
        margin: 0px;   
    }

    .small__pillow__text {
        color: #cbcbcb ;
    }

        
    @media (max-width: 970px) {
        .user__pillow {
            height: 160px;
            max-width: calc(50% - 10px);
            min-width: 300px;

        }
        .user__pillow:last-child {
            margin: 10px 0px 0px 0px;
            max-width: 100%;
        }

        .user__pillow:nth-child(2) {
            margin: 0px 0px 0px 0px;
        }

    }
    
    @media (max-width: 640px) {
        .user__pillow {
            height: 100px;
            max-width: calc(50%-10px);
            min-width: 150px;

            margin: 0px 5px 0px 0px;

        }
        .user__pillow:last-child {
            margin: 10px 0px 0px 0px;
        }
        .user__pillow img {
            width: 40px;
            height: 40px;
        
            margin: 0px 0px 0px 0px;
        }
        
        .user__pillow p {
            font-weight: 600;
            font-size: 16px;
        
            margin: 0px 0px 0px 0px;
        }

        .user__pillow__small {
            height: 80px;

            padding: 10px;
        }

        .small__pillow__text {
            font-size: 12px;
        }

        .user__pillow__small {
            font-size: 12px;
        }

    }

    @media (max-width: 500px) {
        .user__pillow {
            padding: 10px;
        }

        .user__pillow p {
            font-weight: 600;
            font-size: 14px;
        
            margin: 0px 0px 0px 0px;
        }

        .user__pillow__small {
            min-width: 80px;
            max-width: calc(50% - 10px);
        }

        .user__pillow__small:nth-child(3)
        {
            margin-top: 10px;
        }

        .user__pillow__small:nth-child(4)
        {
            margin-top: 10px;
        }

        .small__pillow__text {
            font-size: 10px;
        }
        
        .pillow__highlighter {
            margin: 0px 0px 0px 5px;
            font-size: 12px;
        }
    }

    @media (max-width: 430px) {        
        .user__data__container img {
            width: 100px;
            height: 100px;
        }

        .user__info h3 {
            font-size: 20px;
        }

        .user__info span {
            font-size: 12px;
        }

        .user__info a {
            font-size: 12px;
        }

        .user__pillow {
            min-width: 120px;
        }

        .user__pillow img {
            display: none;
        }
    }

</style>
