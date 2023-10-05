<script>
export default{
    name: 'MainCitation',
}
</script>

<template>
    <div>
        <div id="blackScreen" class="d-flex flex-column justify-content-center align-items-center">
            <i class="fa-solid fa-quote-left mb-5"></i>

            <p class="mb-5"><em>When it dolor sit amet consectetur, adipisicing elit. Molestias, modi? Quas, pariatur autem molestiae illum ipsa corrupti, magni inventore in, commodi veniam perspiciatis nam sequi! Lorem ipsum dolor sit.</em></p>

            <img class="mb-4" src="../assets/img/immagine-mancante1.avif">

            <h5 class="mb-2">LISSA DURBIN</h5>

            <span>Client</span>
        </div>
    </div>
    
</template>


<style lang="scss" scoped>

@use '../assets/colors/AppColors.scss' as *;

#blackScreen{
    width: 100%;
    height: 100%;
    background: $bg-gradient-black_white;

    i{
        color: $text-waterGreen;
        font-size: 50px;
    }

    p{
        color: white;
        width: 40%;
        margin: 0 auto;
        line-height: 35px;
        font-family: 'AR One Sans', sans-serif;
        letter-spacing: 1px;
    }

    img{
        width: 5%;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        border: 3px solid white;
        object-fit: cover;
        box-shadow: 0 0 20px $shadow-gray;
    }

    h5{
        color: $text-waterGreen;
        font-family: 'AR One Sans', sans-serif;
    }

    span{
        color: $text-white_70;
        font-family: 'Rubik', sans-serif;
    }
}
</style>