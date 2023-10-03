<script>
export default{
    name: 'MainLearnMore',
}
</script>

<template>
    <div class="d-flex align-items-center">
        <div class="col-7">
            <div id="ImageBackground">
                <div id="greenImage"></div>

                <img src="../assets/img/immagine-mancante1.avif" class="cut-image">
            </div>
            
        </div>

        <div style="padding-right: 7rem;" class="col-5">
            <h2>
               learn more about <br>
               our <span>missions</span> <br> 
            </h2>
  
          <div class="d-flex mt-4">
              <div id="separator1" class="me-2"></div>
              <div id="separator2"></div>
          </div>

          <p class="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ducimus eligendi? Eligendi distinctio adipisci, provident fugiat temporibus, impedit quasi labore soluta consequuntur sed reiciendis qui, nisi exercitationem consectetur. Officia, dolores.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium hic sit reiciendis facere laudantium similique ipsa et officiis, consectetur quaerat reprehenderit minus id dolore, accusamus aut rerum ad soluta. Iste.</p>

  
          <button class="text-white me-5">READ MORE</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.col-7{
    align-self: self-start;
    position: relative;

    #ImageBackground{
        width: 45rem;
        height: 30rem;
        border-radius: 30px;
        background-image: url(../assets/img/123.jpeg);
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        left: -90px;
        

       #greenImage{
          height: 100%;
          border-radius: 30px;
          background: rgba(153, 225, 94, 0.75);
          background: linear-gradient(106deg, rgba(152,225,94,0.75) 2%, rgba(142,225,99,0.75) 18%, rgba(96,222,121,0.75) 41%, rgba(64,220,135,0.75) 57%, rgba(29,219,153,0.75) 85%, rgba(0,217,166,0.75));  
        } 

        img{
            position: absolute;
            top: 5.5rem;
            left: 12rem;
            border-radius: 15px;
            box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
        }  
    }

    
}


.col-5{
    padding: 5rem 0;
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
        background: linear-gradient(106deg, rgba(152,225,94,1) 2%, rgba(142,225,99,1) 18%, rgba(96,222,121,1) 41%, rgba(64,220,135,1)     57%, rgba(29,219,153,1) 85%, rgba(0,217,166,1));  
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
        background: linear-gradient(106deg, rgba(152,225,94,1) 2%, rgba(142,225,99,1) 18%, rgba(96,222,121,1) 41%, rgba(64,220,135,1)     57%, rgba(29,219,153,1) 85%, rgba(0,217,166,1));  
        box-shadow: 2px 2px 15px #00d9a68a;
    }
    
    p{
        color: #535252;
        font-size: small;
    } 
}
</style>