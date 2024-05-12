<script setup>
import BaseTemplate from './ui/slots/BaseTemplate.vue';
import TopNav from './components/TopNav.vue';
import HeaderDivider from './components/HeaderDivider.vue';
import NavBar from './components/main-nav/NavBar.vue';
import MainBanner from './components/content/MainBanner.vue';
import BaseContainer from './ui/slots/BaseContainer.vue'
import ContentSpot from './components/content/ContentSpot.vue';

</script>
<template>
  <BaseTemplate>
    <TopNav />
    <NavBar />
    <HeaderDivider />
    <BaseContainer>
      <MainBanner />
      <ContentSpot />
    </BaseContainer>
  </BaseTemplate>
</template>

<style scoped></style>
