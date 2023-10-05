<script>
export default{
    name: 'MainServices',
}
</script>

<template>
    <div>
      <div class="d-flex align-items-center">
      <div class="col-5">
        <h2>
            We Are Here To <br>
            Make Your <span>Website</span> <br> 
            Look More <span>Elegant</span> <br>
            And Stylish!
        </h2>

        <div class="d-flex mt-4 mb-5">
            <div id="separator1" class="me-2"></div>
            <div id="separator2"></div>
        </div>

        <button class="text-white me-5">VIEW ALL</button>
      </div>

      <div class="col-7 d-flex justify-content-between flex-wrap gap-3">
        <div class="card">
            <i class="fa-solid fa-gauge"></i>
            <h4>Speed Optimizazion</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, dolores sapiente incidunt repudiandae obcaecati.</p>
        </div>

        <div class="card">
            <i class="fa-solid fa-cloud"></i>
            <h4>Cloud Solutions</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, dolores sapiente incidunt repudiandae obcaecati.</p>
        </div>

        <div class="card">
            <i class="fa-solid fa-mobile-screen"></i>
            <h4>Website Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, dolores sapiente incidunt repudiandae obcaecati.</p>
        </div>

        <div class="card">
            <i class="fa-regular fa-clock"></i>
            <h4>Online Marketing</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, dolores sapiente incidunt repudiandae obcaecati.</p>
        </div>
      </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>

@use '../assets/colors/AppColors.scss' as *;

.col-5{
    padding: 3rem 0;
}

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

button{
    padding: 13px 40px;
    border: none;
    border-radius: 50px;
    font-size: small;
    background: $bg-gradient-yellow-green;  
    box-shadow: 2px 2px 15px $text-waterGreen;
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

    i{
        font-size: 50px;
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