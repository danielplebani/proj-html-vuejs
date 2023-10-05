<script>
export default{
    name: 'AppSocialIcon',
}
</script>

<template>
    <div>
        <i class="fa-brands fa-facebook-f me-4"></i>
        <i class="fa-brands fa-twitter me-4"></i>
        <i class="fa-brands fa-pinterest-p"></i>
    </div>
</template>


<style lang="scss" scoped>
@use '/src/assets/colors/AppColors.scss' as *;

i{
    color: $text-white_70;
    font-size: small;
    cursor: pointer;
}
</style>