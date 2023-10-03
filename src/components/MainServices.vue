<script>
export default{
    name: 'MainServices',
}
</script>

<template>
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
            <img src="../assets/img/23.png">
            <h4>Speed Optimizazion</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, dolores sapiente incidunt repudiandae obcaecati.</p>
        </div>

        <div class="card">
            <img src="../assets/img/24.png">
            <h4>Cloud Solutions</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, dolores sapiente incidunt repudiandae obcaecati.</p>
        </div>

        <div class="card">
            <img src="../assets/img/25.png">
            <h4>Website Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, dolores sapiente incidunt repudiandae obcaecati.</p>
        </div>

        <div class="card">
            <img src="../assets/img/26.png">
            <h4>Online Marketing</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, dolores sapiente incidunt repudiandae obcaecati.</p>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.col-5{
    padding: 3rem 0;
}

h2{
    font-family: 'Rubik', sans-serif;
    font-size: 50px;

    span{
        font-family: 'Rubik', sans-serif;
        font-size: 50px;
        color: #00d9a6;
    }
}

#separator1, #separator2{
    height: 4px;
    border-radius: 10px;
    background: rgb(152,225,94);
    background: linear-gradient(106deg, rgba(152,225,94,1) 2%, rgba(142,225,99,1) 18%, rgba(96,222,121,1) 41%, rgba(64,220,135,1) 57%, rgba(29,219,153,1) 85%, rgba(0,217,166,1));  
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
    background: rgb(152,225,94);
    background: linear-gradient(106deg, rgba(152,225,94,1) 2%, rgba(142,225,99,1) 18%, rgba(96,222,121,1) 41%, rgba(64,220,135,1) 57%, rgba(29,219,153,1) 85%, rgba(0,217,166,1));  
    box-shadow: 2px 2px 15px #00d9a68a;
}

.card{
    width: 49%;
    height: 15rem;
    border: none;
    box-shadow: 0 0 30px rgba(128, 128, 128, 0.241);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img{
        width: 15%;
    }

    h4{
        font-family: 'Roboto', sans-serif;
    }

    p{
        font-size: small;
        color: gray;
    }
}
</style>