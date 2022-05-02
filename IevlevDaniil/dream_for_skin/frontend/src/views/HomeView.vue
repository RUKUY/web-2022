<template>
  <div class="home">
      <main class="main__container">
        <main-slider />
        <main-pillows />
          <div class="main__content__container">
           
            <h1 class="content__title">Новинки</h1>
            <content-card-container :cards="cards" />

          </div>

          <div class="main__content__container">

            <h1 class="content__title">Специальные предложения</h1>
            <special-suggestions />

          </div>

      </main>
  </div> 
</template>

<script>
import ContentCardContainer from '../components/content/ContentCardContainer.vue'
import SpecialSuggestions from '../components/content/SpecialSuggestions.vue'
import MainPillows from '../components/MainPillows.vue'
import MainSlider from '../components/MainSlider.vue'



export default {
  name: "Home",
  components: {
    MainSlider,
    MainPillows,
    ContentCardContainer,
    SpecialSuggestions,
  },
  data() {
    return {
      cards: [{id: 1, img: "bakin_pow.png", price: 200, isAvailable: true, title: "Пенка для умывания Baking Powder Pore Cleansing Foam от бренда Etude House", reviewNum: 13, rating: "4.5", inCart: false, inFavorites: false},
              {id: 2, img: "bakin_pow.png", price: 200, isAvailable: true, title: "Пенка для умывания Baking Powder Pore Cleansing Foam от бренда Etude House", reviewNum: 13, rating: "4.5", inCart: false, inFavorites: false},
              {id: 3, img: "bakin_pow.png", price: 200, isAvailable: true, title: "Пенка для умывания Baking Powder Pore Cleansing Foam от бренда Etude House", reviewNum: 13, rating: "4.5", inCart: false, inFavorites: true},
              {id: 4, img: "bakin_pow.png", price: 200, isAvailable: true, title: "Пенка для умывания Baking Powder Pore Cleansing Foam от бренда Etude House", reviewNum: 13, rating: "4.5", inCart: false, inFavorites: false},
              {id: 5, img: "bakin_pow.png", price: 200, isAvailable: true, title: "Пенка для умывания Baking Powder Pore Cleansing Foam от бренда Etude House", reviewNum: 13, rating: "4.5", inCart: false, inFavorites: false},
              {id: 6, img: "bakin_pow.png", price: 200, isAvailable: true, title: "Пенка для умывания Baking Powder Pore Cleansing Foam от бренда Etude House", reviewNum: 13, rating: "4.5", inCart: false, inFavorites: false},
              {id: 7, img: "bakin_pow.png", price: 200, isAvailable: true, title: "Пенка для умывания Baking Powder Pore Cleansing Foam от бренда Etude House", reviewNum: 13, rating: "4.5", inCart: false, inFavorites: false},
              {id: 8, img: "bakin_pow.png", price: 200, isAvailable: true, title: "Пенка для умывания Baking Powder Pore Cleansing Foam от бренда Etude House", reviewNum: 13, rating: "4.5", inCart: false, inFavorites: false},
              {id: 9, img: "bakin_pow.png", price: 200, isAvailable: true, title: "Пенка для умывания Baking Powder Pore Cleansing Foam от бренда Etude House", reviewNum: 13, rating: "4.5", inCart: false, inFavorites: false},
              {id: 10, img: "bakin_pow.png", price: 200, isAvailable: true, title: "Пенка для умывания Baking Powder Pore Cleansing Foam от бренда Etude House", reviewNum: 13, rating: "4.5", inCart: false, inFavorites: false},
              {id: 11, img: "bakin_pow.png", price: 200, isAvailable: false, title: "Недоступная пенка для умывания Baking Powder Pore Cleansing Foam от бренда Etude House", reviewNum: 13, rating: "4.5", inCart: false, inFavorites: false},
              {id: 12, img: "bakin_pow.png", price: 200, isAvailable: false, title: "Недоступная пенка для умывания Baking Powder Pore Cleansing Foam от бренда Etude House", reviewNum: 13, rating: "4.5", inCart: false, inFavorites: false}],
    }
  }
}
</script>



<style>  
  .main__content__container {
    display: block;
    width: 100%;
    max-width: 1200px;

    margin: 80px auto 0px auto;
    padding: 0px 10px;
  } 
    
  .content__title {
    font-size: 28px;
    font-family: 'Playfair Display';
    
    margin: 0px 0px 30px 30px;

}
</style>
