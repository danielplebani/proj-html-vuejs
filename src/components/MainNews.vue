<script>
export default{
    name: 'MainNews',
}
</script>

<template>
    <div class="d-flex flex-column align-items-center">
        <h2 class="mb-5">
            Latest news & our <span>blog</span>
        </h2>

        <div class="d-flex mb-4">
            <div id="separator1" class="me-2"></div>
            <div id="separator2"></div>
        </div>

        <div class="d-flex">
            <div class="col-4 p-2 position-relative">
                <img src="../assets/img/serious-businesswoman-with-documents-talking-on-P9Q6LX6-1024.jpg">

                <div class="newsTitle">
                    <span>May 24, 2018 •by Alex</span>

                    <h5 class="mt-2 ps-5 d-flex align-items-center">
                        <i class="fa-solid fa-circle me-2"></i>
                        <strong>Marketing Ideas</strong>
                    </h5>
                </div>
            </div>

            <div class="col-4 p-2 position-relative">
                <img src="../assets/img/asas.jpg">

                <div class="newsTitle">
                    <span>May 24, 2018 •by Alex</span>

                    <h5 class="mt-2 ps-5 d-flex align-items-center">
                        <i class="fa-solid fa-circle me-2"></i>
                        <strong>Rest During Working Hours</strong>
                    </h5>
                </div>
            </div>

            <div class="col-4 p-2 position-relative">
                <img src="../assets/img/simple-home-office-with-tree-PBXRXYB-large-1024x768.jpg">

                <div class="newsTitle">
                    <span>May 24, 2018 •by Alex</span>

                    <h5 class="mt-2 ps-5 d-flex align-items-center">
                        <i class="fa-solid fa-circle me-2"></i>
                        <strong>Develope Your Startup Idea</strong>
                    </h5>
                </div>
            </div>
        </div>

        <button class="blackButton">VIEW ALL POST</button>
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

img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0 0 30px $shadow-black;
}

.blackButton{
    border: none;
    padding: 13px 40px;
    font-size: small;
    margin-top: 8rem;
    border-radius: 50px;
    color: rgba(255, 255, 255, 0.7);
    box-shadow: 0 0 20px $shadow-black;
    background: $bg-gradient-white_black;
}

.newsTitle{
    background-color: white;
    width: 80%;
    height: 30%;
    border-radius: 5px;
    position: absolute;
    bottom: -3rem;
    left: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;

    span{
        color: gray;
        font-size: small;
        font-family: 'Rubik', sans-serif;
        padding-left: 67px;
    }

    h5{
        font-family: 'Rubik', sans-serif;

        i{
            color: $text-waterGreen;
            font-size: x-small;
        }
    }
}
</style>