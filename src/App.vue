<script setup>
import BaseTemplate from './ui/slots/BaseTemplate.vue';
import TopNav from './components/TopNav.vue';
import HeaderDivider from './components/HeaderDivider.vue';
</script>

<template>
  <BaseTemplate>
    <TopNav />
    <HeaderDivider />
    <h1 class="text-3xl underline font-sans">
      Hello world!
    </h1>
  </BaseTemplate>
</template>

<style scoped></style>
