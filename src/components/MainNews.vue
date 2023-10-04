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

img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
}

.blackButton{
    border: none;
    padding: 13px 40px;
    font-size: small;
    margin-top: 8rem;
    border-radius: 50px;
    color: rgba(255, 255, 255, 0.7);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    background: rgb(65,65,65);
    background: linear-gradient(56deg, rgba(65,65,65,1) 0%, rgba(55,55,55,1) 25%, rgba(41,41,41,1) 50%, rgba(30,30,30,1) 75%, rgba(13,13,13,1) 100%);
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
            color: #00d9a6;
            font-size: x-small;
        }
    }
}
</style>