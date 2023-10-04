<script>
export default{
    name: 'FooterBar'
}
</script>

<template>
    <div class="position-relative">
        <div class="d-flex justify-content-between align-items-center text-white">
            <span>
                <i class="fa-regular fa-copyright"></i> 
                2020 PHLOX BUSINESS TEAM.
            </span>
    
            <div>
                <i class="fa-brands fa-facebook-f me-4"></i>
                <i class="fa-brands fa-twitter me-4"></i>
                <i class="fa-brands fa-pinterest-p"></i>
            </div>
        </div>

        <div class="assistance">
            <i class="fa-solid fa-arrow-up arrow me-3"></i>
            <i class="fa-regular fa-comment liveChat"></i>
        </div>
    </div>
</template>

<style lang="scss" scoped>
span, i{
    color: rgba(255, 255, 255, 0.477);
    font-size: small;
}

span{
    font-family: 'Rubik', sans-serif;
}

.arrow{
    background-color: white;
    color: rgba(0, 0, 0, 0.51);
    padding: 9px 10px;
    border-radius: 50%;
    border: 0.5px solid gray;
    cursor: pointer;
}

.liveChat{
    background-color: #527ceb;
    color: white;
    padding: 17px;
    border-radius: 50%;
    border: none;
    font-size: medium;
    cursor: pointer;
}

.assistance{
    position: absolute;
    top: 10px;
    right: 2rem;
}
</style>