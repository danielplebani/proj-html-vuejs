<script>

import MainPresentation from './MainPresentation.vue';
import MainServices from './MainServices.vue';
import MainLearnMore from './MainLearnMore.vue';

export default{
    name: 'AppMain',

    components:{
        MainPresentation,
        MainServices,
        MainLearnMore,
    }
}
</script>

<template>
    <MainPresentation id="MainPresentation"></MainPresentation>
    <MainServices id="MainServices"></MainServices>
    <MainLearnMore id="MainLearnMore"></MainLearnMore>
</template>

<style scoped>
#MainPresentation{
    background-color: #f5f5f5;
}

#MainServices{
    padding: 10rem 10px;
}

#MainLearnMore{
    padding: 10rem 0;
    background-color: #f5f5f5;
}
</style>