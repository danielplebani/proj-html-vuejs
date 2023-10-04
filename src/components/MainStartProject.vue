<script>
export default{
    name: 'MainStartProject',
}
</script>

<template>
    <div>
        <div style="margin-bottom: 7rem;" class="d-flex justify-content-center gap-4">
            <div id="blackCard" class="col-6 d-flex flex-column justify-content-center align-items-center py-5">
                <span>Are you ready?</span>

                <h3>Start a New Project</h3>

                <form class="container-fluid py-1">
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter yor email address">
                    <span class="input-group-text">SUBMIT</span>
                  </div>
                </form>
            </div>

            <div id="greenCard" class="col-6 d-flex flex-column justify-content-center align-items-center py-5">
                <span>What are you waiting for?</span>

                <h3>Let's Talk About Work</h3>

                <button class="blackButton">START NOW</button>
            </div>
        </div>
        
        <div class="d-flex justify-content-around align-items-center">
            <img src="../assets/img/221aa.png">
            <img src="../assets/img/client-9-2x.png">
            <img src="../assets/img/222aa.png">
            <img src="../assets/img/223aa.png">
            <img src="../assets/img/224aa.png">
            <img src="../assets/img/225aa.png">
        </div>
    </div>
</template>

<style lang="scss" scoped>
#blackCard{
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
    background: rgb(65,65,65);
    background: linear-gradient(56deg, rgba(65,65,65,1) 0%, rgba(55,55,55,1) 25%, rgba(41,41,41,1) 50%, rgba(30,30,30,1) 75%, rgba(13,13,13,1) 100%);
}

#greenCard{
    box-shadow: 0 0 20px #00d9a6ac;
    background: rgb(8,217,162);
    background: linear-gradient(90deg, rgba(8,217,162,1) 0%, rgba(34,218,149,1) 25%, rgba(66,219,135,1) 50%, rgba(94,222,123,1) 75%, rgba(120,223,110,1) 100%);
}

#blackCard, #greenCard{
    border-radius: 10px;
    font-family: 'Rubik', sans-serif;

    span{
        color: rgba(255, 255, 255, 0.486);
        font-size: small;
        margin-bottom: 1rem;
    }

    h3{
        color: white;
        margin-bottom: 3rem;
    }

    form{
        background-color: rgba(128, 128, 128, 0.367);
        border: none;
        width: 60%;
        border-radius: 40px;

        input{
            background-color: transparent;
            border: none;
        }

        span{
            background-color: transparent;
            border: none;
            cursor: pointer;
            margin: 0;
            font-family: 'Rubik', sans-serif;
            font-size: small;
        }
    }

    input::placeholder{
        color: gray;
        font-size: small;
        font-family: 'Rubik', sans-serif;
    }
}

.blackButton{
    border: none;
    padding: 13px 40px;
    font-size: small;
    color: rgba(255, 255, 255, 0.7);
    border-radius: 50px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    background: rgb(65,65,65);
    background: linear-gradient(56deg, rgba(65,65,65,1) 0%, rgba(55,55,55,1) 25%, rgba(41,41,41,1) 50%, rgba(30,30,30,1) 75%, rgba(13,13,13,1) 100%);
}

img{
    width: 8%;
}
</style>