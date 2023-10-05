<script>

export default{
    name: 'ContactsQuick',

    props:{
        text: String,
    }
}
</script>

<template>
  <li>{{text}}</li>
</template>

<style lang="scss" scoped>

@use '../assets/colors/AppColors.scss' as *;


li{
    color: $text-gray_80;
    font-family: 'Ar one sans', monospace;
    font-size: small;
}
</style>