<template>
    <div class="product">
        <!-- <h1>Product {{fullProductInfo.id}}</h1> -->
        <product-representation :product="fullProductInfo" />

    </div>
</template>

<script>
import ProductRepresentation from '../components/product/ProductRepresentation.vue';


export default {
    name: "Product",
    components: {
        ProductRepresentation

    },
    data() {
        return {
            fullProductInfo: {id: null, 
                              img: "bakin_pow.png",
                              title: "Пенка для умывания Baking Powder Pore Cleansing Foam от бренда Etude House", 
                              about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nemo ducimus itaque expedita! Qui dolorem, officia nemo dignissimos labore modi culpa distinctio debitis atque libero, reprehenderit aliquid perferendis aliquam doloribus adipisci at vero in mollitia cumque earum molestiae sunt exercitationem. Modi hic esse soluta dignissimos veritatis optio, autem maxime odit!",
                              price: "200", rating: "4.5", productCode: "2089808", 
                              isAvailable : true, inCart: false, inFavorites: false, 
                              balance: 16, 
                              comments : [{id: 3, img: "phil.png", nickname: "Phil2002", mark: 4, date: "17.03.2022", text: "Моя не смочь оплатить товар, моя не понимать куда деться деньги?"},
                                          {id: 2, img: "vlard.jpg", nickname: "Wladislave", mark: 2, date: "11.02.2022", text: "На вкус не очень((((("},
                                          {id: 1, img: "Nikitosik.png", nickname: "Nikitosik_sladkii", mark: 5, date: "23.01.2021", text: "Мне понравилось, хороший крем! Всем советую!"}],},
        }
    },
    created() {
        this.fullProductInfo.id = this.$route.params.id;

        // Подгрузи полную инфу о продукте
    },

}
</script>

<style>

</style>