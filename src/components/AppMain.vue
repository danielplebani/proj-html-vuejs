<script>

import MainPresentation from './MainPresentation.vue';
import MainServices from './MainServices.vue';
import MainLearnMore from './MainLearnMore.vue';
import MainExample from './MainExample.vue';
import MainCitation from './MainCitation.vue';
import MainNews from './MainNews.vue';
import MainStartProject from './MainStartProject.vue';

export default{
    name: 'AppMain',

    components:{
        MainPresentation,
        MainServices,
        MainLearnMore,
        MainExample,
        MainCitation,
        MainNews,
        MainStartProject
    }
}
</script>

<template>
    <MainPresentation id="MainPresentation"></MainPresentation>
    <MainServices id="MainServices"></MainServices>
    <MainLearnMore id="MainLearnMore"></MainLearnMore>
    <MainExample id="MainExample"></MainExample>
    <MainCitation id="MainCitation"></MainCitation>
    <MainNews id="MainNews"></MainNews>
    <MainStartProject id="MainStartProject"></MainStartProject>
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

#MainExample{
    padding: 10rem 10px;
}

#MainCitation{
    height: 100vh;
    background: url(../assets/img/four-businesspeople-in-a-boardroom-with-paperwork-PC4V8H4.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top -120px right 0;
}

#MainNews{
    padding: 10rem 5px;
    background-color: #f5f5f5;
}

#MainStartProject{
    padding: 0 5px;
    background-color: #f5f5f5;
}
</style>