<script>
export default{
    name: 'MainCitation',
}
</script>

<template>
    <div>
        <div id="blackScreen" class="d-flex flex-column justify-content-center align-items-center">
            <i class="fa-solid fa-quote-left mb-5"></i>

            <p class="mb-5"><em>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, modi? Quas, pariatur autem molestiae illum ipsa corrupti, magni inventore in, commodi veniam perspiciatis nam sequi! Asperiores quasi recusandae magnam sit?</em></p>

            <img class="mb-4" src="../assets/img/immagine-mancante1.avif">

            <h5 class="mb-2">LISSA DURBIN</h5>

            <span>Client</span>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
#blackScreen{
    width: 100%;
    height: 100%;
    background: rgb(13,13,13,0.6);
    background: linear-gradient(56deg, rgba(13,13,13,0.9) 0%, rgba(30,30,30,0.9) 40%, rgba(41,41,41,0.9) 60%, rgba(55,55,55,0.9) 72%, rgba(111,110,110,0.9) 100%);

    i{
        color: #00d9a6;
        font-size: 50px;
    }

    p{
        color: white;
        width: 40%;
        margin: 0 auto;
        line-height: 35px;
        font-family: 'AR One Sans', sans-serif;
    }

    img{
        width: 5%;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        border: 3px solid white;
        object-fit: cover;
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.371);
    }

    h5{
        color: #00d9a6;
        font-family: 'AR One Sans', sans-serif;
    }

    span{
        color: white;
        font-family: 'AR One Sans', sans-serif;
    }
}
</style>