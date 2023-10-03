<script>

import MainPresentation from './MainPresentation.vue';
import MainServices from './MainServices.vue';

export default{
    name: 'AppMain',

    components:{
        MainPresentation,
        MainServices,
    }
}
</script>

<template>
    <MainPresentation id="MainPresentation"></MainPresentation>
    <MainServices id="MainServices"></MainServices>
</template>

<style scoped>
#MainServices{
    padding: 7rem 10px;
    height: 100vh;
}
</style>