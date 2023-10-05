<script>

import AppSocialIcon from '../components/utility/AppSocialIcon.vue'
export default{
    name: 'FooterBar',

    data(){
        return{
            assistancePresent: true
        }
    },

    components:{
        AppSocialIcon
    }
}
</script>

<template>
    <div class="position-relative">
        <div class="d-flex justify-content-between align-items-center text-white">
            <span>
                <i class="fa-regular fa-copyright"></i> 
                2020 PHLOX BUSINESS TEAM.
            </span>
    
            <AppSocialIcon></AppSocialIcon>
        </div>

        <div class="assistance d-flex align-items-center" v-if="assistancePresent">
            <i class="fa-solid fa-arrow-up arrow me-3"></i>
            <i class="fa-regular fa-comment liveChat"></i>
            <i class="fa-solid fa-x close" @click="assistancePresent = false"></i>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/colors/AppColors.scss' as *;

span{
    color: $text-white_70;
    font-size: small;
}

span{
    font-family: 'Rubik', sans-serif;
}

.assistance{
    position: absolute;
    top: 10px;
    right: 2rem;

    .arrow{
        background-color: white;
        color: black;
        padding: 9px 10px;
        border-radius: 50%;
        border: 0.5px solid $text-white_70;
        cursor: pointer;
    }

    .liveChat{
        background-color: #527ceb;
        color: white;
        padding: 17px;
        border-radius: 50%;
        border: none;
        font-size: medium;
        cursor: pointer;
        margin-right: 10px;
    }

    .close{
        cursor: pointer;
        background-color: gray;
        color: white;
        padding: 4px 5px;
        border-radius: 50%;
        border: none;
        font-size: xx-small;
        align-self: self-start;
    }
}
</style>