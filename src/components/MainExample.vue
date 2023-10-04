<script>
export default{
    name: 'MainExample',
}
</script>

<template>
    <div class="d-flex flex-column align-items-center">
      <div class="d-flex">
        <div class="col-6">
            <div class="d-flex mb-5">
              <div id="separator1" class="me-2"></div>
              <div id="separator2"></div>
            </div>

            <h2>
              Our recent <span>web design</span> & <br>
              some examples of <br> 
              past <span>projects</span>
            </h2>

            <div class="d-flex mt-5">
              <div id="separator1" class="me-2"></div>
              <div id="separator2"></div>
            </div>
        </div>

        <div class="col-6">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aspernatur quisquam ullam error cupiditate enim eligendi accusantium numquam assumenda atque facere ipsum laborum nesciunt perferendis, non nobis totam at cumque? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum suscipit officiis consequuntur quisquam quas placeat quae. Odio quis quibusdam, minus tempora aliquid fuga dolores, accusamus laudantium ex praesentium unde perferendis?</p>
        </div>
      </div>

      <div class="d-flex justify-content-center flex-wrap gap-1 my-5 position-relative">
        <img src="../assets/img/ina-soulis-227104-unsplash-1024x1024.jpg">
        <img src="../assets/img/sunisa-misa-531163-unsplash-1024x1024.jpg">
        <img src="../assets/img/scarpegialle.jpeg">
        <img src="../assets/img/photo-1448932252197-d19750584e56-1024x1024.jpg">
        <img src="../assets/img/origami.avif">
        <img src="../assets/img/cozy-sofa-in-living-room-PQR5AB9-1024x1024.jpg">
        <img src="../assets/img/mongolfiera.jpg">
        <img src="../assets/img/cody-davis-253928-unsplash-1024x1024.jpg">

        <div id="quickCommands" class="d-flex flex-column">
            <button class="mb-2">
                <img src="../assets/img/menu.png">
                Browse Demons
            </button>

            <button class="mb-2">
                <img src="../assets/img/1311.png">
                Buy Now!
            </button>

            <button>
                <img src="../assets/img/322.png">
                Export Section
            </button>
        </div>
      </div>

      <button class="text-white greenButton">READ MORE</button>
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

#separator1, #separator2{
    height: 4px;
    border-radius: 10px;
    background: $bg-gradient-yellow-green;  
}

#separator1{
    width: 15px;
}

#separator2{
    width: 35px;
}

p{
    color: $text-gray_80;
    padding-top: 10rem;
    font-size: small;
    font-family: 'Rubik', sans-serif;
}

img{
    width: calc(99% / 4);
}

#quickCommands{
    position: absolute;
    top: 200px;
    right: -80px;

    button{
        background-color: rgba(0, 0, 0, 0.5);
        border: none;
        border-radius: 10px;
        padding: 10px 20px;
        color: white;
        width: 250px;
        display: flex;
        justify-content: start;
        align-items: center;
        font-family: 'Rubik', sans-serif;

        img{
            width: 10%;
            filter: invert(100%);
            margin-right: 5px;
        }
    }
}

.greenButton{
    width: 10%;
    padding: 13px 30px;
    border: none;
    border-radius: 50px;
    font-size: small;
    background: $bg-gradient-yellow-green;  
    box-shadow: 2px 2px 15px $text-waterGreen;
}
</style>