<script>

import servicesCard from '../componentsChild/ServicesCard.js';
import AppSeparator from './utility/AppSeparator.vue';

export default{
    name: 'MainServices',

    components: {
        AppSeparator
    },

    data(){
        return{
            servicesCard
        }
    }
}
</script>

<template>
    <div class="d-flex align-items-center">
      <div class="col-5">
        <h2>
            We Are Here To <br>
            Make Your <span>Website</span> <br> 
            Look More <span>Elegant</span> <br>
            And Stylish!
        </h2>

        <AppSeparator class="my-4"></AppSeparator>

        <button class="greenButton text-white me-5">VIEW ALL</button>
      </div>

      <div class="col-7 d-flex justify-content-between flex-wrap gap-3">
        <div class="card" v-for="card in servicesCard">
            <div v-html="card.icon"></div>
            <h4>{{card.title}}</h4>
            <p>{{card.text}}</p>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>

@use '../assets/colors/AppColors.scss' as *;

.col-5{
    padding: 3rem 0;
}

.card{
    width: 49%;
    height: 15rem;
    border: none;
    box-shadow: 0 0 30px $shadow-gray;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;

    div{
        font-size: 40px;
    }

    h4{
        font-family: 'Roboto', sans-serif;
    }

    p{
        font-size: small;
        color: gray;
        font-family: 'Rubik', sans-serif;
    }
}

.card:hover{
    box-shadow: 0 0 30px $shadow-green;
    background: $bg-gradient-yellow-green;
    color: white;

    p{
        color: white;
    }

    i{
        color: white;
    }
}
</style>