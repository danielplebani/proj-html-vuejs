<script>
export default{
    name: 'MainServices',
}
</script>

<template>
    <div class="d-flex">
      <div class="col-5">
        <h1>
            We Are Here To <br>
            Make Your <span>Website</span> <br> 
            Look More <span>Elegant</span> <br>
            And Stylish!
        </h1>

        <div class="d-flex my-5">
            <div id="separator1" class="me-2"></div>
            <div id="separator2"></div>
        </div>

        <button class="text-white me-5">VIEW ALL</button>
      </div>

      <div class="col-7 d-flex justify-content-between flex-wrap gap-3">
        <div class="card">
            <img src="../assets/img/111.png" alt="speed test">
        </div>

        <div class="card"></div>

        <div class="card"></div>

        <div class="card"></div>
      </div>
    </div>
</template>

<style lang="scss" scoped>

.col-5{
    padding-top: 4rem;
}

h1{
    font-family: 'Rubik', sans-serif;
    font-size: 60px;

    span{
        font-family: 'Rubik', sans-serif;
        font-size: 60px;
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
    height: 55%;
    border: none;
    box-shadow: 0 0 15px rgba(128, 128, 128, 0.288);
    padding: 2rem;

    img{
        width: 10%;
    }
}
</style>