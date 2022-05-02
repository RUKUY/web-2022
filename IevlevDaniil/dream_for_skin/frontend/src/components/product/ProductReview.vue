<template>
    <div class="review__container">
        <img class="user__review__image" :src="require('@/assets/images/user_icons/' + review.img)" alt="">
        <div class="review__data">
            <div class="review__top">
                <div class="review__left__side">
                    <div class="reviewer__name"><a href="">{{review.nickname}}</a></div>
                    <div class="reviewer__mark">Оценка: <span>{{review.mark}}</span> из 5</div>
                </div>  

                <div class="review__date">{{review.date}}</div>
            </div>

            <div class="review__text">
                {{review.text}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Review",
    props: {
        review: {},
    },

}
</script>

<style>
    .review__container {
        display: flex;
        
        min-height: 140px;
        height: auto; 
        width: 100%;   
        padding: 20px;
        margin: 20px 0px 0px 0px;

        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        border-radius: 30px;
    }

    .user__review__image {   
        border-radius: 50%;

        width: 90px;
        height: 90px;
    }

        
    .review__data {
        width: 100%;
        margin: 0px 0px 0px 20px;
    }

    .review__top {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .review__left__side {
        display: flex;
        flex-wrap: wrap;
    }

    .reviewer__name {
        font-weight: 600;    
    }

    .reviewer__name a {
        color:#333;

        transition: color 0.2s ease-in-out;
    }

    .reviewer__name a:hover {
        color: #D885B6;
    }

    .reviewer__mark {
        margin: 0px 0px 0px 20px;

        font-size: 14px;
    }

    .reviewer__mark span {
        color: #D885B6;

        font-size: 20px;
        font-weight: 500;
    }


    .review__date {
        font-family: 'Montserrat';
        font-size: 14px;
        color: #9c9c9c;
    }

    .review__text {
        font-size: 16px;
        margin: 15px 0px 0px 0px;
    }


    @media (max-width: 575px) {
        .user__review__image {
            width: 60px;        
            height: 60px;        
        }

        
    }

    @media (max-width: 575px) {
        .user__review__image {
            width: 40px;
            height: 40px;
        }
        .reviewer__name {
            font-size: 14px;
            width: 100%;
        }
        
        .reviewer__mark {
            font-size: 14px;
            margin: 0px 0px 0px 0px;
        }
        
        .review__text {
            font-size: 14px;
            
        }
        
        .review__date {
            font-size: 12px;
        }

    }

</style>