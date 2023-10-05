<script>

export default{
    name: 'HeaderNav',

    props:{
        text: String
    }
}
</script>

<template>
  <span>{{text}}</span>
</template>

<style lang="scss" scoped>

@use '../assets/colors/AppColors.scss' as *;

span{
    font-size: small;
    color: $text-darkGray;
    font-family: 'AR One Sans', sans-serif;
    cursor: pointer;
  }
</style>