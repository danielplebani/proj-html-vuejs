<script>
export default{
    name: 'FooterContacts'
}
</script>

<template>
    <div class="d-flex">
        <div class="col-3 d-flex flex-column px-3">
            <img style="width: 60%;" class="mb-3" src="../assets/img/cropped-Group-39-2x.png">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, nobis. Delectus sunt quo perferendis provident vitae blanditiis, sit deleniti saepe odio laboriosam laborum earum repudiandae.</p>
        </div>

        <div class="col-3 d-flex flex-column px-3">
            <h5 class="mb-4"><strong>QUICK LINKS</strong></h5>

            <div class="d-flex mb-4">
              <div id="separator1" class="me-2"></div>
              <div id="separator2"></div>
            </div>

            <ul>
                <li>Careers</li>
                <li>News</li>
                <li>Terms of use</li>
                <li>Privacy Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
 
        <div class="col-3 d-flex flex-column px-3 pe-5">
            <h5 class="mb-4"><strong>CONTACT</strong></h5>

            <div class="d-flex mb-4">
              <div id="separator1" class="me-2"></div>
              <div id="separator2"></div>
            </div>

            <p class="mb-4">Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, TX 76051</p>
 
            <p class="mb-4">info@yourdomain.com</p>

            <p>+99 (0) 101 0000 888</p>
        </div>

        <div class="col-3 d-flex flex-column px-3">
            <h5 class="mb-4"><strong>LOCATION ON MAP</strong></h5>

            <div class="d-flex mb-4">
              <div id="separator1" class="me-2"></div>
              <div id="separator2"></div>
            </div>

            <img src="../assets/img/map.png" alt="map">
        </div>
    </div>
</template>

<style lang="scss" scoped>
p{
    color: #767474;
    font-family: 'Ar one sans', monospace;
    font-size: small;
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

h5{
    font-family: 'AR One Sans', sans-serif;
}

ul{
    list-style: none;
    padding: 0;

    li{
        color: #767474;
        font-family: 'Ar one sans', monospace;
        font-size: small;
    }
}

img{
    cursor: pointer;
}
</style>