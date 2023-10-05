<script>
import AppSeparator from './utility/AppSeparator.vue';

export default{
    name: 'MainLearnMore',

    components: {
        AppSeparator
    },

    data(){
        return{
            mouseOver: true,
        }
    }
}
</script>

<template>
    <div class="d-flex align-items-center">
        <div class="col-7">
            <img src="../assets/img/123.jpeg" id="original-img-bg">
            <img src="../assets/img/123.jpeg" id="cut-img-bg">
            
            <div id="original-greenScreen"></div>
            <div id="cut-greenScreen"></div>

            <div id="original-img"><img src="../assets/img/immagine-mancante1.avif"></div>
            <div id="cut-img"><img src="../assets/img/immagine-mancante1.avif"></div>
        </div>

        <div style="padding-right: 7rem;" class="col-5">
            <h2>
               learn more about <br>
               our <span>missions</span> <br> 
            </h2>
  
          <AppSeparator></AppSeparator>

          <p class="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ducimus eligendi? Eligendi distinctio adipisci, provident fugiat temporibus, impedit quasi labore soluta consequuntur sed reiciendis qui, nisi exercitationem consectetur. Officia, dolores.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium hic sit reiciendis facere laudantium similique ipsa et officiis, consectetur quaerat reprehenderit minus id dolore, accusamus aut rerum ad soluta. Iste.</p>

  
          <button class="greenButton text-white me-5" @mouseenter="mouseOver = false"  @mouseleave="mouseOver = true">
            <span v-if="mouseOver">READ MORE</span>
            <span v-if="mouseOver == false">VIEW ALL</span>
          </button>
        </div>
    </div>
</template>


<style lang="scss" scoped>

@use '../assets/colors/AppColors.scss' as *;
.col-7{
    position: relative;
    align-self: self-start;

    #original-img-bg{
        position: absolute;
        left: -100px;
        border-radius: 35px;
        clip-path: polygon(0 0, 100% 0, 100% 70.5%, 0 70.5%);
    }

    #cut-img-bg{
        position: absolute;
        left: -130px;
        border-radius: 35px;
        clip-path: polygon(0 70.5%, 100% 70.5%, 100% 100%, 0 100%);
    }

    #original-greenScreen{
        width: 608px;
        height: 406px;
        clip-path: polygon(0 0, 100% 0, 100% 70.5%, 0 70.5%);
        position: absolute;
        left: -100px;
        border-radius: 35px;
        background: $bg-gradient-yellow-green; 
    }

    #cut-greenScreen{
        width: 608px;
        height: 406px;
        clip-path: polygon(0 70.5%, 100% 70.5%, 100% 100%, 0 100%);
        position: absolute;
        left: -130px;
        border-radius: 35px;
        background: $bg-gradient-yellow-green; 
    }

    #original-img{
        clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
        position: absolute;
        top: 3rem;
        left: 4rem;
        padding: 30px;

        img{
            border-radius: 20px;
            box-shadow: 0 0 20px $shadow-black;
        }
        
    }

    #cut-img{
        clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
        position: absolute;
        top: 2.95rem;
        left: 2.5rem;
        padding: 30px;

        img{
            border-radius: 20px;
            box-shadow: 0 0 20px $shadow-black;
        }
    }


}

.col-5{
    padding: 4rem 0;
    
    p{
        color: #535252;
        font-size: small;
        font-family: 'Rubik', sans-serif;
    } 
}
</style>