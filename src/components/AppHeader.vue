<script>

export default{
    name: 'AppHeader',
}
</script>

<template>
    <div class="d-flex flex-column">
        <!--top of the header-->
        <div id="HeaderLine" class="d-flex justify-content-between align-items-center text-white">
            <span>(001) 88451234 88455438</span>
            <div>
                <i class="fa-brands fa-facebook-f me-4"></i>
                <i class="fa-brands fa-twitter me-4"></i>
                <i class="fa-brands fa-pinterest-p"></i>
            </div>
        </div>

        <!--header body-->
        <div id="HeaderBody" class="d-flex justify-content-between align-items-center">
            <div class="col-3">
                <img src="../assets/img/cropped-Group-39-2x.png" alt="cropped">
            </div>

            <div class="col-4 d-flex justify-content-around">
                <span><strong>HOME</strong></span>
                <span>ABOUT</span>
                <span>SERVICES</span>
                <span>SHOWCASE</span>
                <span>BLOG</span>
                <span>CONTACT</span>
            </div>

            <div class="col-3 d-flex justify-content-end align-items-center">
                <button class="text-white me-5">PURCHASE</button>
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
}

#HeaderBody{
    height: 75%;
    padding: 0 60px;

    img{
        width: 50%;
    }

    span{
        font-size: small;
        color: $text-white_70;
        font-family: 'AR One Sans', sans-serif;
        cursor: pointer;
    }

    button{
        padding: 13px 40px;
        border: none;
        border-radius: 50px;
        font-size: small;
        background: rgb(152,225,94);
        background: $bg-gradient-yellow-green;  
        box-shadow: 2px 2px 15px $text-waterGreen;
    }

    i{
        color: $text-waterGreen;
        cursor: pointer;
    }
}
</style>