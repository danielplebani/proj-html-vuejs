<script>

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default{
  components:{
    AppHeader,
    AppMain,
    AppFooter
  }
}
</script>

<template>
  <AppHeader id="AppHeader"></AppHeader>
  <AppMain id="AppMain"></AppMain>
  <AppFooter id="AppFooter"></AppFooter>
</template>