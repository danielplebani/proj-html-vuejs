<script>

import NewsCard from '../componentsChild/NewsCard.js'
import AppSeparator from './utility/AppSeparator.vue';

export default{
    name: 'MainNews',

    components: {
        AppSeparator
    },

    data(){
        return{
            NewsCard
        }
    }
}
</script>

<template>
    <div class="d-flex flex-column align-items-center">
        <h2 class="mb-3">
            Latest news & our <span>blog</span>
        </h2>

        <AppSeparator class="mb-5"></AppSeparator>


        <div class="d-flex">
            <div class="col-4 p-2 position-relative" v-for="news in NewsCard">
                <img :src="news.img">

                <div class="newsTitle">
                    <span>{{news.author}}</span>

                    <h5 class="mt-2 ps-5 d-flex align-items-center">
                        <i class="fa-solid fa-circle me-2"></i>
                        <strong>{{news.title}}</strong>
                    </h5>
                </div>
            </div>
        </div>


        <button class="blackButton">VIEW ALL POST</button>
    </div>
</template>


<style lang="scss" scoped>

@use '../assets/colors/AppColors.scss' as *;

h2{
    font-family: 'Rubik', sans-serif;
    font-size: 50px;
    
    span{
        font-family: 'Rubik', sans-serif;
        font-size: 50px;
        color: $text-waterGreen;
    }
}

img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0 0 30px $shadow-black;
}

.newsTitle{
    background-color: white;
    width: 80%;
    height: 30%;
    border-radius: 5px;
    position: absolute;
    bottom: -3rem;
    left: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;

    span{
        color: gray;
        font-size: small;
        font-family: 'Rubik', sans-serif;
        padding-left: 67px;
    }

    h5{
        font-family: 'Rubik', sans-serif;

        i{
            color: $text-waterGreen;
            font-size: x-small;
        }
    }
}
.newsTitle:hover{
    transform: scale(1.1);
    box-shadow: 0 0 30px black;
}

button{
    margin-top: 6rem;
}
</style>