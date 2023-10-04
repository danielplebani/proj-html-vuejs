<script>

import FooterContacts from './FooterContacts.vue';
import FooterBar from './FooterBar.vue';

export default{
    name: 'AppFooter',

    components: {
        FooterContacts,
        FooterBar
    }
}
</script>

<template>
    <FooterContacts id="FooterContacts"></FooterContacts>
    <FooterBar id="FooterBar"></FooterBar>
</template>

<style lang="scss" scoped>
#FooterContacts{
    padding: 10rem 2rem;
}

#FooterBar{
    padding: 2.5rem;
    background: rgb(65,65,65);
    background: linear-gradient(56deg, rgba(65,65,65,1) 0%, rgba(55,55,55,1) 25%, rgba(41,41,41,1) 50%, rgba(30,30,30,1) 75%, rgba(13,13,13,1) 100%);
}
</style>