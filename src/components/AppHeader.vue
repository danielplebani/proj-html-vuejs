<script>
import HeaderNav from '../componentsFather/HeaderNav.vue';
import AppSocialIcon from '../components/utility/AppSocialIcon.vue'

export default{
    name: 'AppHeader',

    data(){
        return{
            navigation:[
    {
        text: 'HOME',
        active: true
    },
    {
        text: 'ABOUT',
        active: false
    },
    {
        text: 'SERVICES',
        active: false
    },
    {
        text: 'SHOWCASE',
        active: false
    },
    {
        text: 'BLOG',
        active: false
    },
    {
        text: 'CONTACT',
        active: false
    }
            ]
        }
    },

    components:{
        HeaderNav,
        AppSocialIcon
    },

    methods:{
        activePage(index){
            this.navigation.forEach((item) =>{
                item.active = false;
            })

            this.navigation[index].active = true;
        }
    }
}
</script>

<template>
    <div class="d-flex flex-column">
        <!--top of the header-->
        <div id="HeaderLine" class="d-flex justify-content-between align-items-center text-white">
            <span>(001) 88451234 88455438</span>
            <AppSocialIcon></AppSocialIcon>
        </div>

        <!--header body-->
        <div id="HeaderBody" class="d-flex justify-content-between align-items-center">
            <div class="col-3">
                <img src="../assets/img/cropped-Group-39-2x.png" alt="cropped">
            </div>

            <div class="col-4 d-flex justify-content-around">
                <HeaderNav v-for="(page, index) in navigation" :class="page.active ? 'pageSelected' : ''" @click="activePage(index)" :text="page.text"></HeaderNav>
            </div>

            <div class="col-3 d-flex justify-content-end align-items-center">
                <button class="greenButton text-white me-5">PURCHASE</button>
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/colors/AppColors.scss' as *;

#HeaderLine{
    background: $bg-gradient-white_black;
    height: 25%;
    padding: 0 80px;
    font-size: small;

    i{
        cursor: pointer;
    }

    span{
        color: $text-white_70;
    }
}

#HeaderBody{
    height: 75%;
    padding: 0 60px;
    z-index: 2;
    background-color: white;

    .pageSelected{
        font-weight: bold;
    }

    img{
        width: 50%;
    }

    i{
        color: $text-waterGreen;
        cursor: pointer;
    }
}
</style>