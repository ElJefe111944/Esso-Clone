<script setup>
import { reactive } from 'vue';
// data
import componentData from './data/componentData.json';
import cardData from './data/cardData.json';
// components
import BaseTemplate from './ui/slots/BaseTemplate.vue';
import TopNav from './components/TopNav.vue';
import HeaderDivider from './components/HeaderDivider.vue';
import NavBar from './components/main-nav/NavBar.vue';
import MainBanner from './components/content/MainBanner.vue';
import BaseContainer from './ui/slots/BaseContainer.vue'
import ContentSpot from './components/content/ContentSpot.vue';
import CardContentContainer from './components/content/CardContentContainer.vue';
import TermsContainer from './components/terms/TermsContainer.vue';
import Disclaimer from './components/terms/Disclaimer.vue';
import Footer from './components/Footer.vue';


const componentSpots = reactive(componentData);
const cards = reactive(cardData);


</script>
<template>
  <BaseTemplate>
    <TopNav />
    <NavBar />
    <HeaderDivider />
    <BaseContainer>
      <MainBanner />
      <ContentSpot v-for="content in componentSpots" :key="content.id" :content="content" />
      <CardContentContainer :cards="cards" />
      <TermsContainer />
      <Disclaimer />
      <Footer />
    </BaseContainer>
  </BaseTemplate>
</template>

<style scoped></style>
