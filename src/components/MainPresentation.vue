<script>
export default{
    name: 'MainPresentation',
}
</script>

<template>
    <div>
        <div id="container">
            <span><strong>17 YEARS OF EXPERIENCE</strong></span>

            <h1 class="mt-1"><strong>We Are a <br> Web Design <span>Agency</span></strong></h1>

            <div class="d-flex my-5">
                <div id="separator1" class="me-2"></div>
                <div id="separator2"></div>
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ducimus eligendi? Eligendi distinctio adipisci, provident fugiat temporibus, impedit quasi labore soluta consequuntur sed reiciendis qui, nisi exercitationem consectetur. Officia, dolores.</p>

            <button class="blackButton my-5 text-white">READ MORE</button>

            <div class="d-flex align-items-center">
                <div id="social"><strong>FACEBOOK - INSTAGRAM - YOUTUBE - TWITTER</strong></div>
                <div class="blackButtonBg">
                    <button class="greenButton"><strong>01</strong></button>
                    <button><strong>02</strong></button>
                    <button><strong>03</strong></button>
                </div>
            </div>
            
            
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
#container{
    background-image: url(../assets/img/Group-36-2x.png);
    background-size: 165vh;
    background-repeat: no-repeat;
    background-position: top -35px right -260px;
    padding: 10rem 7.5rem;


    span{
        color: #00d9a6;
        font-family: 'Roboto Mono', monospace;
        letter-spacing: 5px;
        font-size: small;
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

    p{
        width: 50%;
        color: #535252;
    }

    .blackButton{
        border: none;
        padding: 13px 40px;
        font-size: small;
        border-radius: 50px;
        background: rgb(65,65,65);
        background: linear-gradient(56deg, rgba(65,65,65,1) 0%, rgba(55,55,55,1) 25%, rgba(41,41,41,1) 50%, rgba(30,30,30,1) 75%, rgba(13,13,13,1) 100%);
    }
    .blackButtonBg{
        border: none;
        padding: 3px;
        border-radius: 50px;
        background: rgb(65,65,65);
        background: linear-gradient(56deg, rgba(65,65,65,1) 0%, rgba(55,55,55,1) 25%, rgba(41,41,41,1) 50%, rgba(30,30,30,1) 75%, rgba(13,13,13,1) 100%);
        box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.551);

        button{
            padding: 10px 20px;
            border: none;
            border-radius: 50px;
            font-size: large;
            background-color: transparent;
            color: rgba(255, 255, 255, 0.436);
        }

        .greenButton{
            background: rgb(152,225,94);
            background: linear-gradient(106deg, rgba(152,225,94,1) 2%, rgba(142,225,99,1) 18%, rgba(96,222,121,1) 41%, rgba(64,220,135,1) 57%,     rgba(29,219,153,1) 85%, rgba(0,217,166,1));  
        }
    }

    #social{
        font-size: 13px;
        letter-spacing: 1px;
        color: #3d3d3d;
        margin-right: 170px;
    }
}
</style>