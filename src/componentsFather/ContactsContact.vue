<script>
import AppSeparator from '../components/utility/AppSeparator.vue'

export default{
    name: 'ContactsContact',

    props:{
        street: String,
        mail: String,
        number: String
    },

    components:{
        AppSeparator
    }
}
</script>

<template>
  <div class="col-3 d-flex flex-column px-3 pe-5">
            <h5 class="mb-4"><strong>CONTACT</strong></h5>

            <AppSeparator class="mb-3"></AppSeparator>

            <p class="mb-4">{{street}}</p>
 
            <p class="mb-4">{{ mail }}</p>

            <p>{{number}}</p>
        </div>
</template>

<style lang="scss" scoped>
@use '../assets/colors/AppColors.scss' as *;

p{
    color: $text-gray_80;
    font-family: 'Ar one sans', monospace;
    font-size: small;
}

</style>