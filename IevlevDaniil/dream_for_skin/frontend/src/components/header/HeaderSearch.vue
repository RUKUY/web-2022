<template>
    <div class="header__search">
        <div class="header__input">
            <img class="header__input__icon__container" src="@/assets/icons/search.png">
            
            <div class="header__input__container">
                <input 
                    :id="inputId[whichId]"  
                    @focus="$emit('hide-btn')" 
                    @blur="$emit('show-btn')" 
                    type="text" 
                    placeholder="Поиск товара">
            </div>

            <span class="header__input__clear" onclick="document.getElementById('input-search').value = ''"></span>
        </div>
        
    </div>
</template>

<script>
export default {  
    name: "HeaderSearch",
    data() {
        return {
            inputId : ["input-search", "input-narrow-search"],
        }
    },
    props : {
        whichId : {
            type: Number,
        },
    },

}
</script>


<style>
    .header__search {
        display: flex;
    }

    .header__input {
        position: relative;

        width: 600px;
        height: 40px;
        margin: auto 0px;
        border-radius: 20px;  
        border: 1px solid #cbcbcb;  

    }

    .header__input__icon__container {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 10px;
        top: 9px;

        width: 20px;
        height: 20px;
        /* background-color: red; */
        
    }

    .header__input__container {
        overflow: hidden;
        position: relative;
        width: 520px;
        height: 38px;
        left: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #input-search {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        border: none;

    }

    #input-narrow-search {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        border: none;
    
    }

    .header__input__clear {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        
        top: 50%;
        right: 9px;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
        /* background-color: violet; */
        cursor: pointer;

    }

    .header__input__clear::before {
        content: '';
        position: absolute;
        width: 1px;
        height: 20px;
        background-color: #333;
        transform: rotate(45deg);
    }

    .header__input__clear::after {
        content: '';
        position: absolute;
        width: 1px;
        height: 20px;
        background-color: #333;
        transform: rotate(315deg);
    }
    
    @media (max-width: 1060px) {

        .header__search {
            display: flex;
            width: 100%;
        }

        .header__input {
            width: 100%;
            max-width: 1200px;
        }

        .header__input__container {
            width: calc(100% - 80px);
        }

    }

    

</style>