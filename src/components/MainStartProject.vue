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

                <form class="container-fluid py-1 mb-3">
                  <div class="input-group">
                    <input type="text" class="form-control text-white" placeholder="Enter yor email address">
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

@use '../assets/colors/AppColors.scss' as *;

#blackCard{
    box-shadow: 0 0 20px $shadow-black;
    background: $bg-gradient-white_black;
}

#greenCard{
    box-shadow: 0 0 20px $text-waterGreen;
    background: $bg-gradient-yellow-green;
}

#blackCard, #greenCard{
    border-radius: 10px;
    font-family: 'Rubik', sans-serif;

    span{
        color: $text-gray_80;
        font-size: small;
        margin-bottom: 1rem;
    }

    h3{
        color: white;
        margin-bottom: 3rem;
    }

    form{
        background-color: $text-gray_80;
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
            color: gray;
        }
    }

    input::placeholder{
        color: gray;
        font-size: small;
        font-family: 'Rubik', sans-serif;
    }
}

img{
    width: 8%;
}
</style>