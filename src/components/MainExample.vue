<script>

import ExampleProjects from '../componentsChild/ExampleProjects.js';
import AppSeparator from './utility/AppSeparator.vue';

export default{
    name: 'MainExample',

    components: {
        AppSeparator
    },

    data(){
        return{
            mouseOver: true,
            ExampleProjects
        }
    }
}
</script>


<template>
    <div class="d-flex flex-column align-items-center">
      <div class="d-flex">
        <div class="col-6">
            <AppSeparator class="mb-3"></AppSeparator>

            <h2>
              Our recent <span>web design</span> & <br>
              some examples of <br> 
              past <span>projects</span>
            </h2>

            <AppSeparator class="mt-3"></AppSeparator>
        </div>

        <div class="col-6">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aspernatur quisquam ullam error cupiditate enim eligendi accusantium numquam assumenda atque facere ipsum laborum nesciunt perferendis, non nobis totam at cumque? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum suscipit officiis consequuntur quisquam quas placeat quae. Odio quis quibusdam, minus tempora aliquid fuga dolores, accusamus laudantium ex praesentium unde perferendis?</p>
        </div>
      </div>


      <div class="d-flex justify-content-center flex-wrap gap-1 my-5 position-relative">

        <div class="projects" v-for="example in ExampleProjects">
            <img :src="example.img">
            <div class="infoImg">
                <h5>{{example.caption}}</h5>
                <span>{{example.title}}</span>
            </div>
        </div> 
        

        <div id="quickCommands" class="d-flex flex-column">
            <button class="mb-2">
                <img src="../assets/img/menu.png">
                Browse Demons
            </button>

            <button class="mb-2">
                <img src="../assets/img/1311.png">
                Buy Now!
            </button>

            <button>
                <img src="../assets/img/322.png">
                Export Section
            </button>
        </div>

      </div>


        <button class="greenButton text-white me-5" @mouseenter="mouseOver = false"  @mouseleave="mouseOver = true">
            <span v-if="mouseOver">READ MORE</span>
            <span v-if="mouseOver == false">VIEW ALL</span>
        </button>
    </div>
</template>


<style lang="scss" scoped>

@use '../assets/colors/AppColors.scss' as *;

p{
    color: $text-gray_80;
    padding-top: 10rem;
    font-size: small;
    font-family: 'Rubik', sans-serif;
}

.projects{
    width: calc(99% / 4);
    cursor: pointer;
    position: relative;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .infoImg{
        display: none;
        width: calc(100% - 2rem);
        height: calc(100% - 2rem);
        position: absolute;
        top: 1rem;
        right: 1rem;
        color: white;
        padding-left: 2rem;
        padding-top: 16rem;
        font-family: 'Rubik', sans-serif;
        background: linear-gradient(106deg, rgba(152,225,94,0.9) 2%, rgba(142,225,99,0.9) 18%, rgba(96,222,121,0.9) 41%, rgba(64,220,135,0.9) 57%, rgba(29,219,153,0.9) 85%, rgba(0,217,166,0.9));
    }
}

.projects:hover{
    .infoImg{
        display: block;
    }
}

#quickCommands{
    position: absolute;
    top: 200px;
    right: -80px;

    button{
        background-color: rgba(0, 0, 0, 0.5);
        border: none;
        border-radius: 10px;
        padding: 10px 20px;
        color: white;
        width: 250px;
        display: flex;
        justify-content: start;
        align-items: center;
        font-family: 'Rubik', sans-serif;

        img{
            width: 10%;
            filter: invert(100%);
            margin-right: 5px;
        }
    }

    button:hover {
    transform: translateX(-40px);
    }
}
</style>