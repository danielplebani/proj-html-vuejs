<script>
export default{
    name: 'AppSeparator',
}
</script>

<template>
    <div class="d-flex">
        <div id="separator1" class="me-2"></div>
        <div id="separator2"></div>
    </div>
</template>


<style lang="scss" scoped>

@use '/src/assets/colors/AppColors.scss' as *;

#separator1, #separator2{
    height: 4px;
    border-radius: 10px;
    background: rgb(152,225,94);
    background: $bg-gradient-yellow-green;  
}

#separator1{
    width: 15px;
}

#separator2{
    width: 35px;
}
</style>